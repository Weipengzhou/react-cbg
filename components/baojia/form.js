import { createForm, formShape } from 'rc-form';
import { Picker, List} from 'antd-mobile';
import arrayTreeFilter from 'array-tree-filter';
import  district  from '../data/city_data';
import {connect} from 'react-redux';
import * as action from '../../redux/actions';
import { bindActionCreators } from 'redux';

class Form extends React.Component {
    state = {
        pickerValue: [],
        visible: false,
        count: 60,
        liked: true
    };
    static propTypes = {
        form: formShape,
    };

    submit = () => {
        this.props.form.validateFields((error, value) => {
            this.props.indexBaojia({value})
            console.log(error, value);
        });
    }
    getSel() {
        const value = this.state.pickerValue;
        if (!value) {
            return '';
        }
        const treeChildren = arrayTreeFilter(district, (c, level) => c.value === value[level]);
        return treeChildren.map(v => v.label).join(',');
    }
    handleClick=()=>{
             if(this.state.liked){
                this.state.liked = false;
                this.timer = setInterval(function () {
                var count = this.state.count;
                count -= 1;
              if (count < 1) {
                this.setState({
                  liked: true
                });
                count = 60;
              clearInterval(this.timer)
              }
              this.setState({
                count: count
              });
            }.bind(this), 1000);
          }
        }
    render() {
        let errors;
        var text = this.state.liked ? '获取验证码' : this.state.count + '秒后重新获取';
        const { getFieldProps, getFieldError } = this.props.form;
        return (
            <div>
                <div className='baojia-form'>
                <div className='form-list-box'>
                 
                 <span className='city'></span>
                 <Picker
                     visible={this.state.visible}
                     data={district}
                     value={this.state.pickerValue}
                     onChange={v => this.setState({ pickerValue: v })}
                     onOk={() => this.setState({ visible: false })}
                     onDismiss={() => this.setState({ visible: false })}
                     {...getFieldProps('district', {
                         initialValue: ['0', '0', '0'],
                       })}
                 >
                     <List.Item extra={this.getSel()} onClick={() => this.setState({ visible: true })}>

                     </List.Item>
                 </Picker></div>
                 <div className='form-list-box'><span className='area'></span><input {...getFieldProps('area',{ initialValue: ''})} placeholder='输入房屋面积' /></div>  
                <div className='form-list-box'><span className='phone'></span><input {...getFieldProps('phone',{ initialValue: ''})} placeholder='输入手机，报价结果将发送您的手机' /></div>
                <div className='form-list-box' style={{border:'none'}}>
                    <span className='sms'></span><input   style={{width:'2.7rem',float:'left'}}{...getFieldProps('sms',{ initialValue: ''})} placeholder='输入验证码' />
                    <button onClick={this.handleClick} style={{width:'2.55rem',float:'right'}}>{text}</button>
                </div>
                    <button onClick={this.submit}>立即计算</button>
                </div>
                

            </div>
        );
    }
}
function mapStateToProps(state) {
    return { }
  }
function mapDispatchToProps(dispatch) {
    return {
      ...bindActionCreators(action, dispatch)
    }
 }
const Index = createForm()(Form);
export default connect(mapStateToProps, mapDispatchToProps)(Index)
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
    render() {
        let errors;
        const { getFieldProps, getFieldError } = this.props.form;
        return (
            <div>
                <div className='mfsj-form'>
                <div className='form-list-box'><span className='area'></span><input {...getFieldProps('name',{ initialValue: ''})} placeholder='您的称呼' /></div>
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
                  
                    <div className='form-list-box'><span className='phone'></span><input {...getFieldProps('phone',{ initialValue: ''})} placeholder='请输入您的手机号码' /></div>
                    <button onClick={this.submit}>立即申请免费设计</button>
                </div>
                <div>
                    <img src='/static/img/18.81_16.jpg' alt='金蚂蚁装修服务流程' style={{width:'7.5rem',marginTop:'0.1rem'}}/>
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
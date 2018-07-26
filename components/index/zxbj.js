import { createForm, formShape } from 'rc-form';
import { Picker, List} from 'antd-mobile';
import arrayTreeFilter from 'array-tree-filter';
import  district  from '../data/city_data';


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
                <div className='index-form'>
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
                    <div className='form-list-box'><span className='area'></span><input {...getFieldProps('area',{ initialValue: ''})} placeholder='您的房屋面积' /></div>
                    <div className='form-list-box'><span className='phone'></span><input {...getFieldProps('phone',{ initialValue: ''})} placeholder='输入手机号码获取报价结果' /></div>
                    <button onClick={this.submit}>立即获取</button>
                </div>

            </div>
        );
    }
}

export default createForm()(Form);
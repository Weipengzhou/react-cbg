import Head from '../components/head'
import Nav from '../components/nav/nav'
import stylesheet from '../components/baojia/baojia.less'
import { Icon } from 'antd-mobile';
import Form from '../components/baojia/form'
import {Component} from 'react'
import Footer from '../components/footer/footer'


class Baojia extends Component{
    render(){
        return(
            <div className='Baojia'>
             <Head title="免费报价" url={'www.zxjmy.com/baojia'} title='装修花多少钱？_装修报价单_家装预算表_房屋装修预算清单_金蚂蚁装修网手机端' description='金蚂蚁装修网手机端(m.zxjmy.com）如实的告诉您的房子装修需要花费多少钱并且为您推荐口碑好的装修公司和免费的装修设计方案,装修报价单,房屋装修预算清单以及家装预算表。' url={`www.zxjmy.com/baojia`}/>
             <Nav title="免费报价"><a style={{ color: '#333', fontSize: '14px' }}  onClick={()=>(window.history.back())}><Icon type="left"  size='md'/>  </a></Nav>
                <div className='header'>
                    <Form/>
                </div>
                <div>
                    <img src='/static/img/18.81_12.jpg' alt='我们的服务' style={{width:'7.5rem'}}/>
                    <img src='/static/img/18.81_18.jpg' alt='我们的服务' style={{width:'7.5rem'}}/>
                    <img src='/static/img/18.81_22.jpg' alt='我们的服务' style={{width:'7.5rem'}}/>
                    <img src='/static/img/18.81_28.jpg' alt='我们的服务' style={{width:'7.5rem'}}/>
                    <img src='/static/img/18.81_29.jpg' alt='我们的服务' style={{width:'7.5rem'}}/>
                    <img src='/static/img/18.81_30.jpg' alt='我们的服务' style={{width:'7.5rem'}}/>
                </div>
                <Footer/>
    
                   <style>{stylesheet} </style>
            </div>
        )
    }
}



export default Baojia;
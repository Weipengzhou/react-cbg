import Head from '../components/head'
import Nav from '../components/nav/nav'
import stylesheet from '../components/baojia/baojia.less'
import { Icon } from 'antd-mobile';
import Form from '../components/baojia/form'

import Footer from '../components/footer/footer'


const Baojia =()=>{

    return(
        <div className='Baojia'>
         <Head title="免费报价" />
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


export default Baojia;
import Link from 'next/link'
import Head from '../components/head'
import Nav from '../components/nav/nav'
import stylesheet from '../components/yanfang/yanfang.less'
import { Icon } from 'antd-mobile';
import Form from '../components/yanfang/form'
import Footer from '../components/footer/footer'
import {Component} from 'react'


class Sheji extends Component{
    render(){
        return(
        
            <div className='Mfyf'>
                 <Head title="免费验房_金蚂蚁装修网" description='免费验房_金蚂蚁装修网' />
                 <Nav title="免费验房"><a style={{ color: '#333', fontSize: '14px' }}  onClick={()=>(window.history.back())}><Icon type="left"  size='md'/>  </a></Nav>
                 <div className='banner'>
                    <img src='/static/img/18.81_05.jpg' alt='金蚂蚁装修网免费验房' style={{width:'7.5rem'}}/>
                 </div>
                 <Form/>
                    <img src='/static/img/18.81_10.jpg' alt='金蚂蚁装修网免费验房' style={{width:'7.5rem',marginTop:'0.2rem'}}/>
                    <img src='/static/img/18.81_14.jpg' alt='金蚂蚁装修网免费验房' style={{width:'7.5rem',marginTop:'0.2rem'}}/>
                    <Link href='/sheji'><a style={{display:'block'}}> <img src='/static/img/18.81_20.jpg' alt='金蚂蚁装修网免费验房' style={{width:'7.5rem',marginTop:'0.2rem'}}/></a></Link>
                <Footer/>
                <style>{stylesheet} </style>
            </div>
        )
    }
}


export default Sheji
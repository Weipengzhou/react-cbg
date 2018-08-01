import Head from '../components/head'
import Nav from '../components/nav/nav'
import stylesheet from '../components/sheji/sheji.less'
import { Icon } from 'antd-mobile';
import Form from '../components/sheji/form'
import Footer from '../components/footer/footer'

const Sheji =()=>{

    return(
        <div className='Mfsj'>
             <Head title="免费设计" />
        	 <Nav title="免费设计"><a style={{ color: '#333', fontSize: '14px' }}  onClick={()=>(window.history.back())}><Icon type="left"  size='md'/>  </a></Nav>
             <div className='banner'>
                <img src='/static/img/index_05.jpg' alt='金蚂蚁装修网免费设计' style={{width:'7.5rem'}}/>
             </div>
             <Form/>
            <Footer/>
            <style>{stylesheet} </style>
        </div>
    )
}


export default Sheji
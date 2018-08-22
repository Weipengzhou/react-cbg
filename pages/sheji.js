import Head from '../components/head'
import Nav from '../components/nav/nav'
import stylesheet from '../components/sheji/sheji.less'
import { Icon } from 'antd-mobile';
import Form from '../components/sheji/form'
import Footer from '../components/footer/footer'

const Sheji =()=>{

    return(
        <div className='Mfsj'>
             <Head title="家居装修设计_免费房屋装修设计效果图_室内装修设计_免费装修设计方案_金蚂蚁装修网" description='金蚂蚁装修网免费设计频道（m.zxjmy.com/sheji/）为广大装修业主免费提供家居装修设计,房屋装修设计效果图,室内装修设计,装修设计方案' url={'www.zxjmy.com/sheji'} />
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
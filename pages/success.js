import Link from 'next/link'
import Head from '../components/head'
import Nav from '../components/nav/nav'
import stylesheet from '../components/success/success.less'
import { Icon } from 'antd-mobile';
import Form from '../components/yanfang/form'
import Footer from '../components/footer/footer'
import {Component} from 'react'
import Select from '../components/select/select';
import BottomNav from '../components/bottomNav/bottomNav';

class Success extends Component{
    render(){
        return(
        
            <div className='Mfyf'>
                 <Head title="提交成功" description='提交成功_金蚂蚁装修网手机端' />
                 <Nav><a style={{ color: '#333', fontSize: '14px' }}  onClick={()=>(window.history.back())}><Icon type="left"  size='md'/>  </a><Select/></Nav>
                 <div className='top'>
                    <img src='/static/img/success_top.png' alt='提交成功'/>

                    <p className='cg'>提交成功</p>
                    <p className='one'>
                    我们将以<b>1337390****</b>开头的电话
与您联系，请注意来电哟~
                    </p>
                  </div>
                  <div className='bottom'>
                  <img src='/static/img/success_bottom.png' alt='提交成功'/>
                    </div>  
                <Footer/>
                <BottomNav/>
                <style>{stylesheet} </style>
            </div>
        )
    }
}

export default Success;
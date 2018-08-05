import Link from 'next/link'
import Head from '../components/head'
import { Component } from 'react'
import stylesheet from '../components/gs_index/gs_index.less'
import Nav from '../components/nav/nav'
import Footer from '../components/footer/footer'
import { Pagination, Icon } from 'antd-mobile';

class Index extends Component{
    state={

    }
    render(){
       
        return(
            <div className='Gs_index'>
                 <Head title={``} description={``} />
                  <Nav title={`装修公司`}><a style={{ color: '#333', fontSize: '14px' }} onClick={() => (window.history.back())}><Icon type="left" size='md' /> </a></Nav>

                <Footer/>    
                <style>
                    {stylesheet}
                </style>
            </div>
        )
    }
}

Index.getInitialProps = async function (context) {

    const { id } = context.query
    
    return { show: id }

}
export default Index;
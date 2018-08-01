import Link from 'next/link'
import Head from '../components/head'
import {Component} from 'react'
import stylesheet from '../components/gs/gs.less'
import Nav from '../components/nav/nav'
import Footer from '../components/footer/footer'
import { Icon } from 'antd-mobile';

class  Gs extends Component{
    state={
        menu:[{name:'综合',cate:'',id:'1'},{name:'案例',cate:'',id:'2'},{name:'口碑值',cate:'',id:'3'}],
        currentIndex:1,
    }
    tabChoiced=(id)=>{
        this.setState({
            currentIndex:id
        });
    }

    render(){
        return(
            <div className='company'>
                    <Head  title={`${this.props.show}装修公司排名_北京装修公司哪家好？_北京装修公司如何选？_北京口碑好的装修公司_北京金蚂蚁装修网`} description={`北京金蚂蚁装修网为您严选口碑好的装修公司并且为您提供北京装修公司排名。北京装修公司如何选？北京装修公司哪家好？北京金蚂蚁装修网告诉您！！`}/>
                    <Nav title={`${this.props.show}装修公司`}><a style={{ color: '#333', fontSize: '14px' }}  onClick={()=>(window.history.back())}><Icon type="left"  size='md'/> </a></Nav>
                    <div className='search'>
                         <div className='center'>
                            <input  type="search" placeholder="输入您想查找的装修公司"/>
                            <button>搜索公司</button>
                         </div>
                    </div>
                    <div className='filter-nav'>
                    <ul>
                           {this.state.menu.map((e,index)=>(  
                                <li key={index} onClick={this.tabChoiced.bind(this,e.id)} className={e.id==this.state.currentIndex?'active':''}>
                                    <span>
                                        {e.name}
                                    </span>     
                                </li>
                           ))}
                    </ul>
                    </div>
                    <div className=' btn-area'>
                        
                    </div>
                    <style>{stylesheet}</style>
            </div>
        )
    }
}

Gs.getInitialProps = async function (context) {

	const { id } = context.query
    return {show:id}

}

export default Gs;
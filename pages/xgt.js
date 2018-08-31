import Head from '../components/head'
import Nav from '../components/nav/nav'
import stylesheet from '../components/xgt/xgt.less'
import Footer from '../components/footer/footer'
import { Icon } from 'antd-mobile';
import * as apis from '../redux/api'
import Select from '../components/select/select';
import BottomNav from '../components/bottomNav/bottomNav';
const cai = [{name:'fengge',title:'风格'},{name:'huxing',title:'户型'},{name:'jubu',title:'局部'},{name:'kongjian',title:'空间'},{name:'yanse',title:'颜色'}]
const Xgt=(props)=>{
    return  (
        <div className='Xgt'>
            <Head title="最新室内装修效果图大全_家居装修设计效果图_房子装修图_装修设计图_金蚂蚁装修网" description='金蚂蚁装修网为您免费提供最新的最新室内装修效果图大全,家居装修设计效果图,房子装修图,装修设计图.希望大家能够喜欢这些最新室内装修效果图大全,家居装修设计效果图,房子装修图,装修设计图.'  url={`www.zxjmy.com/xgt`}/>
            <Nav title="效果图" navUrl='/xgt'><a style={{ color: '#333', fontSize: '14px' }} onClick={() => (window.history.back())}><Icon type="left" size='md' />  </a><Select/></Nav>
            <header>
                <img src={'/static/img/banner4.jpg'} alt='' />
            </header>
            <div className='filtrate'>
                <div className='filtrate-wrap'>
                    <p className="filtrate-top">分类</p>
                    <div className='filtrate-content'>
                      
                       {cai.map((e, i) => (
                            <div key={i}>
                                <p className="filtrate-title">{e.title}</p>
                                <ul>
                                {props.shows.categoryArr[e.name].child.map((a,index)=>(
                                    <li key={index}>
                                        <a href={`/xgt/${a.pinyin}`}> {a.name}</a>
                                    </li>
                                ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                    <Footer/>
                    <BottomNav/>
                </div>
            </div>
          
            <style>{stylesheet}</style>
        </div>
    )
    
}
Xgt.getInitialProps = async function (context) {
   

    const res = await apis.getXgt()

    const data = await res;
    return {
        shows: data,
    }


}

export default Xgt;
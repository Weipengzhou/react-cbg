import Head from '../components/head'
import Nav from '../components/nav/nav'
import stylesheet from '../components/xgt/xgt.less'
import Footer from '../components/footer/footer'
import { Icon } from 'antd-mobile';
import * as apis from '../redux/api'
const cai = [{name:'fengge',title:'风格'},{name:'huxing',title:'户型'},{name:'jubu',title:'局部'},{name:'kongjian',title:'空间'},{name:'yanse',title:'颜色'}]
const Xgt=(props)=>{
    console.log(props)
    return  (
        <div className='Xgt'>
            <Head title="效果图" />
            <Nav title="效果图"><a style={{ color: '#333', fontSize: '14px' }} onClick={() => (window.history.back())}><Icon type="left" size='md' />  </a></Nav>
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
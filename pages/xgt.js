import Head from '../components/head'
import Nav from '../components/nav/nav'
import stylesheet from '../components/xgt/xgt.less'
import Footer from '../components/footer/footer'
import { Icon } from 'antd-mobile';
const cai =  [
    {name:'空间',child:[{name:'全部',id:'12'},{name:'卧室',id:'2'},{name:'卫生间',id:'2'},{name:'厨房',id:'2'},{name:'餐厅',id:'2'},{name:'阳台',id:'2'},{name:'儿童房',id:'2'},{name:'玄关',id:'2'},{name:'书房',id:'2'},{name:'衣帽间',id:'2'},{name:'花园',id:'2'},{name:'阁楼',id:'2'},{name:'走廊',id:'2'}]},
    {name:'类型',child:[{name:'全部',id:'1'},{name:'小户型',id:'2'}]}
]
export default () => (
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
                            <p className="filtrate-title">{e.name}</p>
                            <ul>
                                {e.child.map((f, index) => (
                                    <li key={index} >
                                        <a href={`/xgt/${f.id}`}>{f.name}</a>
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
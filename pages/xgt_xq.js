import Link from 'next/link'
import Head from '../components/head'
import Nav from '../components/nav/nav'
import stylesheet from '../components/xgt/xgt.less'
import Footer from '../components/footer/footer'
import { Icon ,Pagination} from 'antd-mobile';
const list =[{},{},{}]

export default () => (
    <div className='Xgt_xq'>
         <Head title="效果图" />
        <Nav title="效果图"><a style={{ color: '#333', fontSize: '14px' }} onClick={() => (window.history.back())}><Icon type="left" size='md' />  </a></Nav>
        <div className='center'>
             <ul className='list'>
                 {list.map((e,i)=>(
                     <li><Link href=''><a>
                         <div className='img'>
                            <img src='/static/img/tu.jpg'/>
                          </div>
                          <div className='info'>
                                <p className='title'>
                                卧龙湖风情小镇
                                </p>
                                <span>查看详情>></span>
                          </div>
                         </a></Link> 
                    </li>
                 ))}
            </ul>
            {list.length <=10 ? <div></div> : <Pagination total={5} className="custom-pagination-with-icon" current={1} locale={{
                            prevText: (<span className="arrow-align">上一页</span>), nextText: (<span className="arrow-align">下一页</span>),
                        }} />}
        </div>
        <Footer/>
        <style>{stylesheet}</style>
    </div>
)
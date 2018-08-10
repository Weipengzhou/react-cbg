import Link from 'next/link'
import Head from '../components/head'
import stylesheet from '../components/baishitong/bklist.less'
import Nav from '../components/nav/nav'
import Footer from '../components/footer/footer'
import { Pagination, Icon, Tabs, WhiteSpace } from 'antd-mobile';
const list = [{},{},{},{},{},{},{},{},{},{},{}]
const BaikeList = () => (
    <div className='Bklist'>
        <Head title={``} description={``} />
        <Nav title={`装修百科`}><a style={{ color: '#333', fontSize: '14px' }} onClick={() => (window.history.back())}><Icon type="left" size='md' /> </a></Nav>
        <div className='center clearfix'>
        <div className='header'>
                    <a className='title'>百科</a>
        </div>
        <ul className='list'>
            {list.map((e, i) => (
                <li key={i} className='clearfix'><Link><a>
                    <div className='img'>
                        <img src={`/static/img/anli.jpg`}  alt=""/>
                    </div>
                    <div className="right">
                        <p className='biaoti'>
                            法恩莎卫浴：2018年度国家知识产权...
                        </p>
                        <p className='info'>
                             <time>2018-08-08</time>
                             <span>浏览次数：516</span>
                        </p>
                    </div>
                </a></Link></li>
            ))}
        </ul>
        {list.length <=10 ? <div></div> : <Pagination total={5} className="custom-pagination-with-icon" current={1} locale={{
                            prevText: (<span className="arrow-align">上一页</span>), nextText: (<span className="arrow-align">下一页</span>),
                        }} />}
        </div>
        <Footer />
        <style>{stylesheet}</style>
    </div>
)

export default BaikeList;
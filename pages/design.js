import Link from 'next/link'
import Head from '../components/head'
import stylesheet from '../components/design/design.less'
import Nav from '../components/nav/nav'
import Footer from '../components/footer/footer'
import { Pagination, Icon } from 'antd-mobile';
const list = [{},{}]
const Design = (props) => (
    <div className='Design'>
        <Head title={``} description={``} />
        <Nav title={`设计团队`}><a style={{ color: '#333', fontSize: '14px' }} onClick={() => (window.history.back())}><Icon type="left" size='md' /> </a></Nav>
        <div className='list'>
            <ul>
                {list.map((e, index) => (<li key={index}>
                    <Link href=''>
                        <a>
                            <span className='li_img'>
                                <img src="http://beijing.zxjmy.com/uploads/20180714/1531549905570209.jpg" alt="" />
                            </span>
                            <span className='li_con'>
                                <span className="li_h">
                                    <span className="name">测试</span>
                                    <span className="tag">(设计师)</span>
                                </span>
                                <span className="li_detail">
                                    <p>擅长领域 : 别墅、公寓</p>
                                    <p>设计经验 : 10年 </p>
                                </span>
                            </span>
                        </a>
                    </Link>
                </li>))}
            </ul>
            {list.length <=10 ? <div></div> : <Pagination total={5} className="custom-pagination-with-icon" current={1} locale={{
                            prevText: (<span className="arrow-align">上一页</span>), nextText: (<span className="arrow-align">下一页</span>),
                        }} />}
        </div>

        <Footer />
        <style>{stylesheet}</style>
    </div>
)

Design.getInitialProps = async function (context) {

    const { id } = context.query

    return { show: id }

}

export default Design;



import Link from 'next/link'
import Head from '../components/head'
import stylesheet from '../components/gongdi/gongdi.less'
import Nav from '../components/nav/nav'
import Footer from '../components/footer/footer'
import { Pagination, Icon } from 'antd-mobile';

const list=[{},{},{}];

const Gongdi=(props)=>(
    <div className='Gongdi'>
         <Head title={``} description={``} />
         <Nav title={`在建工地列表`}><a style={{ color: '#333', fontSize: '14px' }} onClick={() => (window.history.back())}><Icon type="left" size='md' /> </a></Nav>
         <div className='pic-list'>
            <ul>
            {list.map((e,index)=>(
                <li key={index}>
                    <Link>
                       <a> 
                           <img src="/static/img/zxgs_2.jpg" alt=""/>
                           <div className="li_con">
                                <div className="li_infor">
                                    <span className="fs30">升龙城张先生的家</span>
                                    <p>161㎡/4居/6万/全包</p>
                                </div>
                            </div>
                        
                        </a>
                    </Link>
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

Gongdi.getInitialProps = async function (context) {

    const { id } = context.query

    return { show: id }

}

export default Gongdi;
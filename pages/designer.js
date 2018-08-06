import Link from 'next/link'
import Head from '../components/head'
import stylesheet from '../components/designer/designer.less'
import Nav from '../components/nav/nav'
import Footer from '../components/footer/footer'
import { Pagination, Icon } from 'antd-mobile';

const List = [{},{}]
const Designer = (props) => (
    <div className='Designer'>
        <Head title={``} description={``} />
        <Nav title={`金蚂蚁装修网`}><a style={{ color: '#333', fontSize: '14px' }} onClick={() => (window.history.back())}><Icon type="left" size='md' /> </a></Nav>
        <div className='top clearfix'>
            <div className="img">
                <img src="http://beijing.zxjmy.com/uploads/20180714/1531549905570209.jpg" alt="" />
            </div>
            <p className='name'>李玲玉</p>
            <p className='er'>首席设计师 | 5年经验</p>
            <p className='about'>毕业于**学院，从事设计工作5年，有着足够丰富的设计经验，家里设计装修交给我，您放心吧。  </p>

        </div>
        <div className='list'>
            <p className="title">案例作品</p>
            <ul>
                {List.map((e, index) => (
                    <li key={index}>
                        <Link><a>
                             <div className="img">
                                <img src="/static/img/zxgs_2.jpg" alt=""/>
                              </div>
                              <div className="case-detail">
                                <p className="case-title">中式</p><p className="case-data">90㎡ | 全包 | 现代简约 |20w</p></div>
                            </a></Link>
                        </li>
                        ))}
                </ul>
        </div>
        <Footer />
                <style>
                    {stylesheet}
                </style>
    </div>
            )
            
            
Designer.getInitialProps = async function (context) {

    const {id} = context.query
        
    return {show: id }
        
        }
        
export default Designer;
import Link from 'next/link'
import Head from '../components/head'
import { Component } from 'react'
import stylesheet from '../components/gs_index/gs_index.less'
import Nav from '../components/nav/nav'
import Footer from '../components/footer/footer'
import { Pagination, Icon } from 'antd-mobile';

class Index extends Component {
    constructor(props) {
        super(props)
        this.state = {
            case: [{}, {}, {}],
            design: [{}, {}, {}, {}, {}, {}]
        }
    }

    render() {

        return (
            <div className='Gs_index'>
                <Head title={``} description={``} />
                <Nav title={`装修公司`}><a style={{ color: '#333', fontSize: '14px' }} onClick={() => (window.history.back())}><Icon type="left" size='md' /> </a></Nav>
                <div className='tou'>
                    <div className='center'>
                        <div className='logo'>
                            <img src='/static/img/anli.jpg' alt=''/>
                        </div>
                        <div className='info'>
                            <h2>业之峰装饰郑州分公司</h2>
                            <p>口碑值:100</p>
                            <span className='score'></span>
                        </div>
                    </div>
                </div>
                <div className='address'>
                    <p className="dz" >北京市朝阳区朝阳路大黄庄35号铭基国际创意园08底商<em className="icon"></em></p>
                    <span className="line"></span>
                    <a href='tel:400-0606-129'>  <em className="con-phone"></em></a>

                </div>
                <div className='case'>
                    <p className="title">装修案例<Link><a href="">更多></a></Link></p>
                    <div className='case-show'>
                        <ul className='clearfix case-slide'>
                            {this.state.case.map((e, index) => (
                                <li key={index}>
                                    <Link as={`/zhengzhou/gs/id/anli/id`}>
                                        <a>
                                            <div className='img'>
                                                <img src='/static/img/zxgs_2.jpg' alt='' />
                                            </div>
                                            <div className='case-detail'>
                                                <p className='case-title'>中式</p>
                                                <p className='case-data'>90㎡|全包|现代简约</p>
                                            </div>
                                        </a>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className='design_team'>
                    <p className="title">设计团队<Link><a href="">更多></a></Link></p>
                    <div className='team-slide'>
                        <ul className='team-list'>
                            {this.state.design.map((e, index) => (<li key={index}>
                                <Link><a><div className='img-box'><img src={``} alt={``} /></div><span>设计师</span></a></Link>
                            </li>))}
                        </ul>
                    </div>
                </div>
                <div className='gs_gd'>
                    <p className="title">装修工地<Link><a href="">更多></a></Link></p>
                    <div className='gd_center clearfix'>
                        <ul>
                            {this.state.design.map((e, index) => (
                                <li key={index}>
                                    <Link>
                                        <a>
                                            <div className='img'>
                                                <img src={`/static/img/anli.jpg`} alt={``} />
                                            </div>
                                            <div className='info'>

                                                <div className='totle'>
                                                    <span className='name'>王先生家的工地</span>
                                                </div>
                                                <div className='totle'>

                                                    <span className='bao'>全包 | 55w | 60㎡</span>
                                                </div>
                                                <div className='totle'>

                                                    <span className='pic'>施工图:1套</span>
                                                    <span className='statu'>泥木阶段</span>
                                                </div>
                                            </div>
                                        </a>
                                    </Link>
                                </li>))}
                        </ul>
                    </div>
                </div>
                <div>

                </div>
                <div className='about'>
                    <p className="title">公司信息<Link><a href="">更多></a></Link></p>
                    <p className='content'>
                        河南紫苹果钻石装饰   提供免费量房、免费制作详细的报价方案和平面设计。具有施工贰级资质，是郑州规模较大的一家集设计、施工、建材服务为一体的专业化品牌公司。在北京、郑州、太原、武汉、重庆、成都、南宁、乌鲁木齐等多个大中型城市建立了直营分公司。河南紫苹果钻石装饰公司先后在升龙国际广场B座5号楼开设了6000平米的家居体验馆，29800精装满意搬回家，在郑州地区率先采用了精装套餐的计费模式，深受广大古城人民的好评。
      河南紫苹果钻石装饰坚持将“帮助中产阶层完成家的梦想，为构建和谐社会努力奋斗”作为企业使命。在郑州率先推出家装套餐模式以来，长期致力于满足不同业主对家的需求和追求，继268、298、398套餐和包干价之后，紫苹果团队又推出了598、998套餐，希望能满足更多业主对家的需求和追求。
      我们秉承着——“客户的满意，是我们永远的追求”的企业宗旨，遵循“勤奋、团结、至诚、唯实”的企业文化，以“空间、结构、风格、文化”的全新理念，打造高品味的生活空间，以优质高效的服务，创精品工程，赢得客户赞誉，做您信赖的装饰专家。以一流的品牌形象、全新的设计理念、科学的管理模式、完善的服务体系，与古城人民携手装饰美好的家园。
                  </p>
                </div>
                <Footer />
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
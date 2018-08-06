import Link from 'next/link'
import Head from '../components/head'
import stylesheet from '../components/jieshao/jieshao.less'
import Nav from '../components/nav/nav'
import Footer from '../components/footer/footer'
import { Pagination, Icon } from 'antd-mobile';

const Jieshao = (props) => (
    <div className='jieshao'>

        <Head title={``} description={``} />
        <Nav title={`装修公司介绍`}><a style={{ color: '#333', fontSize: '14px' }} onClick={() => (window.history.back())}><Icon type="left" size='md' /> </a></Nav>
        <div className='about'>
            <p className="title">公司介绍</p>
            <p className='content'>
                河南紫苹果钻石装饰   提供免费量房、免费制作详细的报价方案和平面设计。具有施工贰级资质，是郑州规模较大的一家集设计、施工、建材服务为一体的专业化品牌公司。在北京、郑州、太原、武汉、重庆、成都、南宁、乌鲁木齐等多个大中型城市建立了直营分公司。河南紫苹果钻石装饰公司先后在升龙国际广场B座5号楼开设了6000平米的家居体验馆，29800精装满意搬回家，在郑州地区率先采用了精装套餐的计费模式，深受广大古城人民的好评。
河南紫苹果钻石装饰坚持将“帮助中产阶层完成家的梦想，为构建和谐社会努力奋斗”作为企业使命。在郑州率先推出家装套餐模式以来，长期致力于满足不同业主对家的需求和追求，继268、298、398套餐和包干价之后，紫苹果团队又推出了598、998套餐，希望能满足更多业主对家的需求和追求。
我们秉承着——“客户的满意，是我们永远的追求”的企业宗旨，遵循“勤奋、团结、至诚、唯实”的企业文化，以“空间、结构、风格、文化”的全新理念，打造高品味的生活空间，以优质高效的服务，创精品工程，赢得客户赞誉，做您信赖的装饰专家。以一流的品牌形象、全新的设计理念、科学的管理模式、完善的服务体系，与古城人民携手装饰美好的家园。
                  </p>
        </div>
        <div className='message'>
            <p className="title">公司业务</p>
            <div className="merchant-information">
                <div className="business-scope"><span>接单范围:</span><p>朝阳、崇文、大兴、东城、丰台、海淀、平谷、石景山、顺义、通州、西城、宣武、昌平一</p></div>
                <div className="business-spread"><span>服务范围:</span><p>普通住宅 小户型 别墅 ktv 商铺 餐厅 美容院 娱乐场所 酒店 办公室 旧房 公寓 写字楼 厂房 学校 医院 网吧 酒吧 服装店 其他工装</p></div>
            </div>
        </div>
        <div className='zizhi'>
            <p className="title">企业资质与照片</p>
            <ul>
                <li>
                    <img src={`/static/img/index_23.jpg`} alt=''/>
                    <span>企业资质</span>
                </li>
                <li>
                    <img src={`/static/img/index_23.jpg`} alt=''/>
                    <span>企业资质</span>
                </li>
            </ul>
        </div>
        <Footer />
        <style>
            {stylesheet}
        </style>
    </div>
)

export default Jieshao;

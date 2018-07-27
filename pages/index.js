
import Link from 'next/link'
import Head from '../components/head'
import stylesheet from '../components/index/index.less'
import Nav from '../components/nav/nav'
import Slider from '../components/index/slider/slider'
import Zxbj from '../components/index/zxbj/zxbj'
import List from '../components/index/xgt/xgt'
import Company from '../components/index/company/company'
import TabExample from '../components/tab/tab'

const IndexNav = (props) => (
  <ul className='clearfix'>
    {props.ListData.map((e, index) => (
      <li key={index}><Link href={e.url}><a><img src={`../static/img/${e.imgSrc}.png`} alt={e.alt} /><span>{e.name}</span></a></Link></li>
    ))}
  </ul>
)
const ListData = [
  { url: '/sheji', imgSrc: 'shouye-sheji@2x', alt: '金蚂蚁装修网', name: '免费设计' },
  { url: '/baojia', imgSrc: 'shouye-baojia@2x', alt: '金蚂蚁装修网', name: '免费报价' },
  { url: '/yanfang', imgSrc: 'shouye-yanfang@2x', alt: '金蚂蚁装修网', name: '免费验房' },
  { url: '/xgt', imgSrc: 'shouye-xioguotu@2x', alt: '金蚂蚁装修网', name: '效果图' },
  { url: '/company', imgSrc: 'shouye-gongsi@2x', alt: '金蚂蚁装修网', name: '装修公司' },
  { url: '/wenda', imgSrc: 'shouye-wenda@2x', alt: '金蚂蚁装修网', name: '装修问答' },
  { url: '/gl', imgSrc: 'shouye-gonglue@2x', alt: '金蚂蚁装修网', name: '装修攻略' },
  { url: '/bk', imgSrc: 'shouye-baike@2x', alt: '金蚂蚁装修网', name: '装修百科' },
]

const CompanyList = [
  {id: '1', name: '北京佳时特装饰工程有限公司', company_logo: '/uploads/20180706/1530847987631095.jpg', public_praise: '1234'},
  {id: '2', name: '北京佳时特装饰工程有限公司', company_logo: '/uploads/20180706/1530847987631095.jpg', public_praise: '1234'},
  {id: '3', name: '北京佳时特装饰工程有限公司', company_logo: '/uploads/20180706/1530847987631095.jpg', public_praise: '1234'},
  {id: '4', name: '北京佳时特装饰工程有限公司', company_logo: '/uploads/20180706/1530847987631095.jpg', public_praise: '1234'},
  {id: '5', name: '北京佳时特装饰工程有限公司', company_logo: '/uploads/20180706/1530847987631095.jpg', public_praise: '1234'},
  {id: '6', name: '北京佳时特装饰工程有限公司', company_logo: '/uploads/20180706/1530847987631095.jpg', public_praise: '1234'},
  {id: '7', name: '北京佳时特装饰工程有限公司', company_logo: '/uploads/20180706/1530847987631095.jpg', public_praise: '1234'}
];
const XiaoguotuData = {
  tabs:[
    { title: '户型'},
    { title: '空间' },
    { title: '局部' },
    { title: '风格' },
  ],
  huxing:[
    {url:'baidu',lei:'二居室',English:'Second residence',imgName:'index_14',alt:'金蚂蚁装修网'},
    {url:'baidu',lei:'公寓',English:'apartment',imgName:'index_16',alt:'金蚂蚁装修网'},
    {url:'baidu',lei:'复式',English:'compound',imgName:'index_64',alt:'金蚂蚁装修网'},
    {url:'baidu',lei:'小户型',English:'Large-sized apartment',imgName:'index_65',alt:'金蚂蚁装修网'}
  ],
  kongjian:
  [
    {url:'baidu',lei:'客厅',English:'living room',imgName:'index_18',alt:'金蚂蚁装修网'},
    {url:'baidu',lei:'餐厅',English:'Restaurant',imgName:'index_20',alt:'金蚂蚁装修网'},
    {url:'baidu',lei:'卧室',English:'Bedroom',imgName:'index_66',alt:'金蚂蚁装修网'},
    {url:'baidu',lei:'厨房',English:'Kitchen',imgName:'index_67',alt:'金蚂蚁装修网'}
  ],
  jubu:[
    {url:'baidu',lei:'背景墙',English:'Background wall',imgName:'index_23',alt:'金蚂蚁装修网'},
    {url:'baidu',lei:'吧台',English:'Bar counter',imgName:'index_25',alt:'金蚂蚁装修网'},
    {url:'baidu',lei:'隔断',English:'partition',imgName:'index_68',alt:'金蚂蚁装修网'},
    {url:'baidu',lei:'飘窗',English:'Bay window',imgName:'index_69',alt:'金蚂蚁装修网'}
  ],
  style:[
    {url:'baidu',lei:'简约',English:'Simple',imgName:'index_27',alt:'金蚂蚁装修网'},
    {url:'baidu',lei:'田园',English:'Countryside',imgName:'index_29',alt:'金蚂蚁装修网'},
    {url:'baidu',lei:'中式',English:'Chinese style',imgName:'index_70',alt:'金蚂蚁装修网'},
    {url:'baidu',lei:'欧式',English:'European style',imgName:'index_71',alt:'金蚂蚁装修网'}
  ]
}
const tabs={
  sheji:[
    { title: '户型'},
    { title: '空间' },
    { title: '局部' },
    { title: '风格' },
  ],
  baike:[
    { title: '攻略'},
    { title: '问答' },
    { title: '资讯' },
    { title: '百科' },
  ]
}
export default () => (
  <div className='Index'>
    <Head title="金蚂蚁装修网" />
    <Nav />
    <Slider />
    <div className='index-navbar'>
      <IndexNav ListData={ListData} />
    </div>
    <div className='zxbj-form'>
      <p className="yusuantext"><span>6</span>秒估算装修报价</p>
      <Zxbj />
    </div>
      <TabExample title={'看设计'} tabs={tabs.sheji}>
        <List data={XiaoguotuData.huxing} more='/xgt/huxing'/>  
        <List data={XiaoguotuData.kongjian} more='/xgt/kongjian'/>     
        <List data={XiaoguotuData.jubu} more='/xgt/jubu' />   
        <List data={XiaoguotuData.style} more='/xgt/style'/>   
      </TabExample>
     <div className='home-find-company'>
      <div className='header'>
        <a className="title" href="/company">装修公司</a>
        <a className='more' href='/company'>更多></a>
      </div>

      <Company CompanyList={CompanyList} />
      <TabExample title={'装修百事通'}  tabs={tabs.baike}>

      </TabExample>
    </div>
    <style>{stylesheet}</style>
  </div>
)

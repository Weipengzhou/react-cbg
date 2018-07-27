import Link from 'next/link'
import { Tabs, WhiteSpace } from 'antd-mobile';
import { StickyContainer, Sticky } from 'react-sticky';
import Style from './xgt.less'
function renderTabBar(props) {
  return (<Sticky>
    {({ style }) => <div className='abc clearfix' style={{ ...style, zIndex: 1 }}> <Link href=''><a  className='title'>看设计</a></Link><Tabs.DefaultTabBar {...props} /></div>}
  </Sticky>);
}
const ListData={
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

const List =(props)=>{
  return(
    <div style={{   height: '8.4rem', backgroundColor: '#fff' }}>
      <ul className='clearfix'>
        {props.data.map((e,index)=>(<li key={index}><Link href={e.url}><a><div className='info'><p>{e.lei}</p><span>{e.English}</span></div><img src={`/static/img/${e.imgName}.jpg`} alt={e.alt}/></a></Link></li>))}
      </ul>
        <Link href={props.more}><a className='more'>查看更多>></a></Link>
    </div>
  )
}
const TabExample = () => (
  <div className='xgt'>
    <WhiteSpace />
    <StickyContainer>
      <Tabs tabs={ListData.tabs}
        initalPage={'t2'}
        renderTabBar={renderTabBar}
      >
       
       <List data={ListData.huxing} more='/xgt/huxing'/>  
       <List data={ListData.kongjian} more='/xgt/kongjian'/>     
       <List data={ListData.jubu} more='/xgt/jubu' />   
       <List data={ListData.style} more='/xgt/style'/>   
      </Tabs>
    </StickyContainer>
    <WhiteSpace />
    <style >{ Style}</style>
  </div>
);

export default TabExample;
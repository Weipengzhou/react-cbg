import Link from 'next/link'
import Head from '../components/head'
import stylesheet from '../components/gdxq/gdxq.less'
import Nav from '../components/nav/nav'
import Footer from '../components/footer/footer'
import { Pagination, Icon } from 'antd-mobile';
import { Tabs, WhiteSpace } from 'antd-mobile';
import { StickyContainer, Sticky } from 'react-sticky';
function renderTabBar(props) {
    return (<Sticky>
        {({ style }) => <div style={{ ...style, zIndex: 1 }}><Tabs.DefaultTabBar {...props} /></div>}
    </Sticky>);
}
const tabs = [
    { title: '设计方案' },
    { title: '施工案例' },
];
const list={
    title:'庆圣诞节小区',
    anli:[{title:1, type:1,img:[{}]},{title:1, type:2,img:[{}]},{title:1, type:1,img:[{}]},{title:1, type:3,img:[{}]},{title:4, type:4,img:[{}]}]
}
const Kaigong =()=>(
    <div className='fuwu clearfix'><p>成品保护</p><p>拆除工程</p></div>
  );
  const Yinbi =()=>(
    <div className='fuwu clearfix'><p>吊顶内线管</p><p>设备的安装</p><p>吊顶龙骨的安装</p><p>吊顶预埋或拉结筋</p><p>吊杆的安装</p><p>隔墙中的线管</p><p>电气预埋管</p><p>隔墙龙骨安装</p><p>隔墙预埋件或拉结筋安装</p><p>室内布线</p><p>面布置强弱线</p></div>
  );
  const Fenbu=()=>(
      <div className='fuwu clearfix'><p>顶面工程</p><p>墙体工程</p><p>涂料工程</p><p>地面工程</p></div>
  );
  const Anzhuang=()=>(
      <div className='fuwu clearfix'><p>灯具、洁具、家具安装</p><p>成品门及感应门安装，其他电器设备安装</p><p>开关插座面板安装，高隔安装 地毯、地板等安装</p></div>
  );
  const Wangong=()=>(
      <div className='fuwu clearfix'><p>验收合格</p><p>交付使用</p></div>
  );
const Gdxq = () => (
    <div className='Gdxq'>
        <Head title={``} description={``} />
        <Nav title={`苍山小区`}><a style={{ color: '#333', fontSize: '14px' }} onClick={() => (window.history.back())}><Icon type="left" size='md' /> </a></Nav>
        <div className='banner'>
            <img src="/static/img/zzgs_03.jpg" alt="" />
        </div>
        <div className="case-detail">
            <p className="case-title">中式</p>
            <p className="case-data">90㎡ | 全包 | 现代简约 | 20w</p>
            <p className='case-statu'>开工大吉</p>
        </div>
        <div className='ta'>
            <WhiteSpace />
            <StickyContainer>
                <Tabs tabs={tabs}
                    initalPage={'t2'}
                    renderTabBar={renderTabBar}
                >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }} className='fangan'>

                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }} className='anli'>
                        <ul>
                            {list.anli.map((e, index) => (
                                <li key={index}>
                                    <p className="title">开工大吉</p>
                                    <p className='time'>2018-07-10</p>
                                    {e.type===1?<Kaigong/>:e.type===2?<Yinbi/>:e.type===3?<Fenbu/>:e.type===4?<Anzhuang/>:e.type===5?<Wangong/>:''}
                                    {e.img.map((a,i)=>(
                                        <div className='img' key={index}>
                                             <img src={`/static/img/zzgs_03.jpg`} alt=''/>
                                        </div>
                                    ))}
                                </li>
                            ))}
                        </ul>
                    </div>

                </Tabs>
            </StickyContainer>
        </div>

        <Footer />
        <style>{stylesheet}</style>
    </div>
)

Gdxq.getInitialProps = async function (context) {

    const { id } = context.query

    return { show: id }

}

export default Gdxq;
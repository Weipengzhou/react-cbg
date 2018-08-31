import Link from 'next/link'
import Head from '../components/head'
import stylesheet from '../components/gdxq/gdxq.less'
import Nav from '../components/nav/nav'
import Footer from '../components/footer/footer'
import { Pagination, Icon } from 'antd-mobile';
import { Tabs, WhiteSpace } from 'antd-mobile';
import { StickyContainer, Sticky } from 'react-sticky';
import * as apis from '../redux/api'
import { Select } from 'antd';
import Selectd from '../components/select/select';
import BottomNav from '../components/bottomNav/bottomNav';
function renderTabBar(props) {
    return (<Sticky>
        {({ style }) => <div style={{ ...style, zIndex: 1 }}><Tabs.DefaultTabBar {...props} /></div>}
    </Sticky>);
}
const tabs = [
    { title: '施工案例' },
    { title: '设计方案' },
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

const Gdxq = (props) =>{
    const {designerDetail}=props.shows

    return  (
        <div className='Gdxq'>
            <Head title={`${designerDetail.companies.name}简介,装修案例,报价,地址,电话_${designerDetail.companies.city}_金蚂蚁装修网手机端`} description={`${designerDetail.companies.city}金蚂蚁装修网手机端为您免费分享${designerDetail.companies.name}施工现场,在建工地,施工图预算,设计,建筑工地图片`} url={`${props.id}.zxjmy.com/gs/gongdixiangqing/${props.zid}`} />
            <Nav title={designerDetail.constructInfo.housing_estate} navUrl={`/${props.id}/gs/${props.ojbkey}/gongdi/${props.zid}`} city={props.id}><a style={{ color: '#333', fontSize: '14px' }} onClick={() => (window.history.back())}><Icon type="left" size='md' /> </a><Selectd/></Nav>
            <div className='banner'>
                <img src="/static/img/zzgs_03.jpg" alt="" />
            </div>
            <div className="case-detail">
                <p className="case-title">{designerDetail.constructInfo.housing_estate}</p>
                <p className="case-data"> | {designerDetail.constructInfo.sort==1?'半包':'全包'} | 现代简约 | </p>
                <p className='case-statu'>{designerDetail.constructInfo.type==1?'准备开工':designerDetail.constructInfo.type==2?'水电阶段':designerDetail.constructInfo.type==3?'泥木阶段':designerDetail.constructInfo.type==4?'油漆阶段':designerDetail.constructInfo.type==5?'竣工阶段':'准备开工'}</p>
            </div>
            <div className='ta'>
                <WhiteSpace />
                <StickyContainer>
                    <Tabs tabs={tabs}
                        initalPage={'2'}
                        renderTabBar={renderTabBar}
                    >
                       
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }} className='anli'>
                            <ul>
                            {designerDetail.info.yi?<li>
                                        <p className="title">准备开工</p>
                                        <Kaigong/>
                                        {designerDetail.info.yi.map((a,i)=>(
                                            <div className='img' key={i}>
                                                 <img src={`http://www.zxjmy.com${a}`} alt=''/>
                                            </div>
                                        ))}
                                    </li>:''}
                                    {designerDetail.info.er? <li>
                                        <p className="title">水电阶段</p>
                                       <Yinbi/>
                                        {designerDetail.info.er.map((a,i)=>(
                                            <div className='img' key={i}>
                                                 <img src={`http://www.zxjmy.com${a}`} alt=''/>
                                            </div>
                                        ))}
                                    </li>:''}
                                    {designerDetail.info.san?<li>
                                        <p className="title">泥木阶段</p>
                                      <Fenbu/>
                                        {designerDetail.info.san.map((a,i)=>(
                                            <div className='img' key={i}>
                                                <img src={`http://www.zxjmy.com${a}`} alt=''/>
                                            </div>
                                        ))}
                                    </li>:''}
                                    {designerDetail.info.si?<li>
                                        <p className="title">油漆阶段</p>
                                        <Anzhuang/>
                                        {designerDetail.info.si.map((a,i)=>(
                                            <div className='img' key={i}>
                                                 <img src={`http://www.zxjmy.com${a}`} alt=''/>
                                            </div>
                                        ))}
                                    </li>:''}
                                    {designerDetail.info.wu? <li>
                                        <p className="title">竣工阶段</p>
                                         <Wangong/>
                                        {designerDetail.info.wu.map((a,i)=>(
                                            <div className='img' key={i}>
                                                 <img src={`http://www.zxjmy.com${a}`} alt=''/>
                                            </div>
                                        ))}
                                    </li>:''}
                            </ul>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }} className='fangan' dangerouslySetInnerHTML={{
              __html:` ${designerDetail.constructInfo.design_plan}`
            }}>
                               
                        </div>
    
                    </Tabs>
                </StickyContainer>
            </div>
    
            <Footer />
            <BottomNav/>
            <style>{stylesheet}</style>
        </div>
    )
}

Gdxq.getInitialProps = async function (context) {
    const { id, key ,zid} = context.query
    const res = await apis.getGongdi({ construct_id:zid });

    const data = await res;
    return {
        shows: data,
        id: id,
        ojbkey: key,
        zid:zid
    }


}

export default Gdxq;
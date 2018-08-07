import Link from 'next/link'
import Head from '../components/head'
import stylesheet from '../components/gywm/gywm.less'
import Nav from '../components/nav/nav'
import Footer from '../components/footer/footer'
import { Pagination, Icon } from 'antd-mobile';

const Gywm = (props) => (
    <div className='Gywm'>
        <Head title={`关于我们_金蚂蚁装修网`} description={`关于我们_金蚂蚁装修网`} />
        <Nav title={`关于我们`}><a style={{ color: '#333', fontSize: '14px' }} onClick={() => (window.history.back())}><Icon type="left" size='md' /> </a></Nav>
        <div className='center'>
            <h2 className='title'>金蚂蚁装修网：装修就上金蚂蚁</h2>
            <img src={`/static/img/index_tu.png`} style={{ width: '7rem' }} />
            <p>蚂蚁装修网隶属于郑州贯达网络科技有限公司，从14年成立至今，建立了完善的装饰企业品牌推广、形象维护体系，致力于扩大装饰企业在互联网的影响力，为企业带来高速的来自于互联网的产值增长，进而推动企业整体发展，最终为企业成功融入互联网时代的浪潮做出最强力的支持。</p>
            <p>金蚂蚁装修网力求为用户创建一站式的装修流程体系，其创新的商业模式集合了产业链所有的关键元素，从设计到装修，从建材到施工，从家具到软装，金蚂蚁装修网是永不落幕的家居、建材网上会展，成为装修、家居的一站式平台。</p>
            <p> “创新、速度、服务、共赢”是金蚂蚁人的宗旨，金蚂蚁正在不断努力突破，打造一个更加开放，更具影响力，服务更加便捷的装修平台。</p>
            <p>现已开通分站200多个，覆盖全国大中小城市，现日均独立访客超过30万人次，为中国千百万装修业主提供服务，影响力巨大。</p>
            <p>金蚂蚁装修网是中国装修行业门户网站，是互联网装修资源整合平台，是业主和装修企业之间的桥梁和纽带。金蚂蚁装修网分为PC版和手机触屏版，为业主提供装修招标、免费报价、装修知识、装修效果图、在线工地、活动信息等装修一条龙服务。</p>
            <p>金蚂蚁装修网有强大的会员系统，分为装饰公司、建材商家、设计师、装修业主四大会员系统，服务于装修行业所有参与者。金蚂蚁装修网在各大搜索引擎，有极高重权，关键词自然排名非常好。同时，金蚂蚁装修网各类广告遍地开花，让金蚂蚁装修网的形象深入人心。</p>
            <p>公司地址：郑州市金水区北三环52号1号楼25层</p>
            <p>联系电话：400-0606-129</p>
            <p>合作咨询：523328741</p>
        </div>
        <Footer />
        <style>{stylesheet}</style>
    </div>
)

export default Gywm;
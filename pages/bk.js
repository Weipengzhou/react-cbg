import Link from 'next/link'
import Head from '../components/head'
import stylesheet from '../components/baishitong/baishitong.less'
import Nav from '../components/nav/nav'
import Footer from '../components/footer/footer'
import { Pagination, Icon, Tabs, WhiteSpace } from 'antd-mobile';
import renderContent from '../components/baishitong/renderContent'
import renderFengshui from '../components/baishitong/renderFengshui'
const tabs ={
    shbk:{
        title: [{ title: '生活百科',list:[{},{},{}] },{ title: '设计百科' ,list:[{},{},{}]},{ title: '装修百科' ,list:[{},{},{}] },{ title: '房产百科' ,list:[{},{},{}] },{ title: '品牌百科',list:[{},{},{}] },{ title: '品牌百科',list:[{},{},{}] },{ title: '品牌百科',list:[{},{},{}] }]
    },
    sjbk:{},
    zxbk:{},
    fcbk:{},
    ppbk:{}
}
const navList = [{ title: '百科', imgName: 'baishitong-baike@2x', name: 'bk' }, { title: '攻略', imgName: 'baishitong-gonglue@2x', name: 'gl' }, { title: '资讯', imgName: 'baishitong-zixun@2x', name: 'zx' }, { title: '问答', imgName: 'baishitong-wenda@2x', name: '' }, { title: '吐槽', imgName: 'baishitong-tucao@2x', name: '' }]




const Bk = () => (
    <div className='Bk'>
        <Head title={``} description={``} />
        <Nav title={`装修百科`}><a style={{ color: '#333', fontSize: '14px' }} onClick={() => (window.history.back())}><Icon type="left" size='md' /> </a></Nav>
        <header>
            <ul>
                {navList.map((i, index) => (
                    <li key={index}>
                        <Link href={`/${i.name}`}><a>
                            <div className='img'>
                                <img src={`/static/img/${i.imgName}.png`} alt="" />
                            </div>
                            <span>{i.title}</span>
                        </a>
                        </Link>
                    </li>
                ))}
            </ul>
        </header>
        <div className='shbk'>
            <div className='header'>
                <a className='title'>生活百科</a>
                <a href="" className='more'>查看更多></a>
            </div>
            <Tabs tabs={tabs.shbk.title} list={tabs.shbk.list}  renderTabBar={props => <Tabs.DefaultTabBar {...props} page={4} />}>
                 {renderContent}
            </Tabs>
           
            <WhiteSpace />
          
        </div>
        <div className='zxfs'>
            <div className='header'>
                <a className='title'>装修风水</a>
                <a href="" className='more'>查看更多></a>
            </div>
            <Tabs tabs={tabs.shbk.title} list={tabs.shbk.list}  renderTabBar={props => <Tabs.DefaultTabBar {...props} page={4} />}>
            {renderFengshui}
            </Tabs>
           
            <WhiteSpace />
          
        </div>
        <div className='shbk'>
            <div className='header'>
                <a className='title'>生活百科</a>
                <a href="" className='more'>查看更多></a>
            </div>
            <Tabs tabs={tabs.shbk.title} list={tabs.shbk.list}  renderTabBar={props => <Tabs.DefaultTabBar {...props} page={4} />}>
                 {renderContent}
            </Tabs>
           
            <WhiteSpace />
          
        </div>
        <div className='zxfs'>
            <div className='header'>
                <a className='title'>装修风水</a>
                <a href="" className='more'>查看更多></a>
            </div>
            <Tabs tabs={tabs.shbk.title} list={tabs.shbk.list}  renderTabBar={props => <Tabs.DefaultTabBar {...props} page={4} />}>
            {renderFengshui}
            </Tabs>
           
            <WhiteSpace />
          
        </div>
        <Footer />
        <style>{stylesheet}</style>
    </div>
)

export default Bk;
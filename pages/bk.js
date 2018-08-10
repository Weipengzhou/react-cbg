import Link from 'next/link'
import Head from '../components/head'
import stylesheet from '../components/baishitong/baishitong.less'
import Nav from '../components/nav/nav'
import Footer from '../components/footer/footer'
import { Pagination, Icon, Tabs, WhiteSpace } from 'antd-mobile';

const tabs = [
    {
        id: 15, name: '生活百科', cate_pinyin: 'shenghuo',
        child: [{ id: '67', name: '风水', cate_pinyin: 'fengshui' }, { id: '68', name: '生活窍门', cate_pinyin: 'qiaomen' }, { id: '67', name: '风水', cate_pinyin: 'fengshui' }, { id: '68', name: '生活窍门', cate_pinyin: 'qiaomen' }, { id: '67', name: '风水', cate_pinyin: 'fengshui' }, { id: '68', name: '生活窍门', cate_pinyin: 'qiaomen' }, { id: '67', name: '风水', cate_pinyin: 'fengshui' }, { id: '68', name: '生活窍门', cate_pinyin: 'qiaomen' }],
        list: [{}, {}, {}]
    },
    {
        id: 14, name: '装修百科', cate_pinyin: 'zhuangxiu',
        child: [{ id: '67', name: '风水', cate_pinyin: 'fengshui' }, { id: '68', name: '生活窍门', cate_pinyin: 'qiaomen' }, { id: '67', name: '风水', cate_pinyin: 'fengshui' }, { id: '68', name: '生活窍门', cate_pinyin: 'qiaomen' }, { id: '67', name: '风水', cate_pinyin: 'fengshui' }, { id: '68', name: '生活窍门', cate_pinyin: 'qiaomen' }, { id: '67', name: '风水', cate_pinyin: 'fengshui' }, { id: '68', name: '生活窍门', cate_pinyin: 'qiaomen' }],
        list: [{}, {}, {}]
    },
    {
        id: 15, name: '设计百科', cate_pinyin: 'sheji',
        child: [{ id: '67', name: '风水', cate_pinyin: 'fengshui' }, { id: '68', name: '生活窍门', cate_pinyin: 'qiaomen' }, { id: '67', name: '风水', cate_pinyin: 'fengshui' }, { id: '68', name: '生活窍门', cate_pinyin: 'qiaomen' }, { id: '67', name: '风水', cate_pinyin: 'fengshui' }, { id: '68', name: '生活窍门', cate_pinyin: 'qiaomen' }, { id: '67', name: '风水', cate_pinyin: 'fengshui' }, { id: '68', name: '生活窍门', cate_pinyin: 'qiaomen' }],
        list: [{}, {}, {}]
    },
    {
        id: 15, name: '房产百科', cate_pinyin: 'fangchan',
        child: [{ id: '67', name: '风水', cate_pinyin: 'fengshui' }, { id: '68', name: '生活窍门', cate_pinyin: 'qiaomen' }, { id: '67', name: '风水', cate_pinyin: 'fengshui' }, { id: '68', name: '生活窍门', cate_pinyin: 'qiaomen' }, { id: '67', name: '风水', cate_pinyin: 'fengshui' }, { id: '68', name: '生活窍门', cate_pinyin: 'qiaomen' }, { id: '67', name: '风水', cate_pinyin: 'fengshui' }, { id: '68', name: '生活窍门', cate_pinyin: 'qiaomen' }],
        list: [{}, {}, {}]
    }
]
const navList = [{ title: '百科', imgName: 'baishitong-baike@2x', name: 'bk' }, { title: '攻略', imgName: 'baishitong-gonglue@2x', name: 'gl' }, { title: '资讯', imgName: 'baishitong-zixun@2x', name: 'zx' }, { title: '问答', imgName: 'baishitong-wenda@2x', name: 'wd' }, { title: '吐槽', imgName: 'baishitong-tucao@2x', name: 'tc' }]




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
        {tabs.map((b,z) => (
            <div className='shbk' key={z}>
                <div className='header'>
                    <a className='title'>{b.name}</a>
                    <a href={`/bk/${b.cate_pinyin}`} className='more'>全部></a>
                </div>
                <ul className='nav clearfix'>
                {b.child.map((e, index) => (
                    <li key={index}>
                        <Link href={`/bk/${e.cate_pinyin}`}><a>{e.name}</a></Link>
                    </li>
                ))}

                 </ul>
                 <ul className='list'>
                {b.list.map((a, i) => (
                    <li key={i} className='clearfix'>
                        <Link href={`/`}>
                            <a>
                                <h3>电视柜什么牌子好?2018电视柜十大品牌</h3>
                                <div className="img">
                                    <img src={`/static/img/index_70.jpg`} alt="" />
                                </div>
                                <div className="info">
                                    <p className="item-sumy">
                                        如何将小空间合理利用，实现小空间打造精致生活，合理利用每一平方的空间
                                        如何将小空间合理利用，实现小空间打造精致生活，合理利用每一平方的空间
                                        如何将小空间合理利用，实现小空间打造精致生活，合理利用每一平方的空间
                            </p>
                                    <div className="info-bar-left">
                                        {a.title}
                                    </div>
                                    <div className="info-bar-right">
                                        2018-08-08 14:33:55
                            </div>
                                </div>
                            </a>
                        </Link>
                    </li>
                ))}
            </ul>
            <WhiteSpace />
            </div>
            
        ))}
  




        <Footer />
        <style>{stylesheet}</style>
    </div>
)

Bk.getInitialProps = async function (context) {

    const { id } = context.query

    return { show: id }

}

export default Bk;
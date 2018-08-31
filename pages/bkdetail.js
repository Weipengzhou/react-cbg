import Link from 'next/link'
import Head from '../components/head'
import stylesheet from '../components/baishitong/baishitong.less'
import Nav from '../components/nav/nav'
import Footer from '../components/footer/footer'
import { Pagination, Icon, Tabs, WhiteSpace } from 'antd-mobile';
import Select from '../components/select/select';
import * as apis from '../redux/api'
import BottomNav from '../components/bottomNav/bottomNav';
const navList = [{ title: '百科', imgName: 'baishitong-baike@2x', name: 'bk' }, { title: '攻略', imgName: 'baishitong-gonglue@2x', name: 'gl' }, { title: '资讯', imgName: 'baishitong-zixun@2x', name: 'zx' }, { title: '问答', imgName: 'baishitong-wenda@2x', name: 'baojia' }, { title: '吐槽', imgName: 'baishitong-tucao@2x', name: 'baojia' }]




const Bk = (props) => {
    console.log(props)
    const {articles,category}=props.shows.articles
    return (
        <div className='Bk'>
            <Head title={`装修知识_装修${props.shows.name}_金蚂蚁装修网手机端`} description={`金蚂蚁装修网手机端百科频道为您免费提供装修知识,装修${props.shows.name}。希望大家能够喜欢这些装修知识`} url={`www.zxjmy.com/${props.id}`} />
            <Nav title={`${props.shows.name}`} navUrl={`/${props.id}`}><a style={{ color: '#333', fontSize: '14px' }} onClick={() => (window.history.back())}>
            <Icon type="left" size='md' /> </a><Select/></Nav>
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
            {category.map((b,z) => (
                <div className='shbk' key={z}>
                    <div className='header'>
                        <a className='title'>{b.name}</a>
                        <a href={`/${props.id}/${b.cate_pinyin}`} className='more'>全部></a>
                    </div>
                    <ul className='nav clearfix'>
                    {b.cate.map((e, index) => (
                        <li key={index}>
                            <Link href={`/${props.id}/${e.cate_pinyin}`}><a>{e.name}</a></Link>
                        </li>
                    ))}
    
                     </ul>
                     <ul className='list'>
                        {articles[b.cate_pinyin].map((a, i) => (
                            <li key={i} className='clearfix'>
                                <Link href={`/a/${a.id}`}>
                                    <a>
                                        <h3>{a.title}</h3>
                                        </a>
                                </Link>
                                        <div className="img">
                                            <img src={`http://www.zxjmy.com${a.img}`} alt={a.title} />
                                        </div>
                                       
                                        <div className="info">
                                            <p className="item-sumy">
                                                {a.intro}
                                            </p>
                                            <div className="info-bar-left">
                                               <a href={`/${props.id}/${b.cate_pinyin}`}> {a.fid_cate}</a>
                                            </div>
                                            <div className="info-bar-right">
                                               {a.updated_at}
                                             </div>
                                        </div>
                                
                            </li>
                        ))}
                 </ul>
                <WhiteSpace />
                </div>
                
            ))}
      
    
    
    
    
            <Footer />
            <BottomNav/>
            <style>{stylesheet}</style>
        </div>
    )
}

Bk.getInitialProps = async function (context) {
    const { id} = context.query
    const res = await apis.getBaike({ cate_py:id });

    const data = await res;
    return {
        shows: data,
        id: id
    }

}
export default Bk;
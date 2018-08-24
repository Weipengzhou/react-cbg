import Link from 'next/link'
import Head from '../components/head'
import stylesheet from '../components/baishitong/bklist.less'
import Nav from '../components/nav/nav'
import Footer from '../components/footer/footer'
import { Pagination, Icon, Tabs, WhiteSpace } from 'antd-mobile';
import * as apis from '../redux/api'


const BaikeList = (props) => {
    const obj2String=(b,c,d)=>{
        var obj = Object.assign({},props.info);
       if(d){
        obj[d]=1
       }
        obj[b] = c
        return new URLSearchParams(obj).toString()
    }
    const{articles,name,cate_title,total}=props.shows
    const {info} =props
    
    return (
        <div className='Bklist'>
            <Head title={cate_title} description={`金蚂蚁装修网(m.zxjmy.com）${name}栏目为您免费提供${cate_title}金蚂蚁装修网，希望大家能够喜欢金蚂蚁装修网（m.zxjmy.com）${name}栏目！！`} url={`www.zxjmy.com/${props.id}/${info.third_py}`} />
            <Nav title={`${name}`}><a style={{ color: '#333', fontSize: '14px' }} onClick={() => (window.history.back())}><Icon type="left" size='md' /> </a></Nav>
            <div className='center clearfix'>
            <div className='header'>
                        <a className='title'>{name}</a>
            </div>
            <ul className='list'>
                {articles.articles.data.map((e, i) => (
                    <li key={i} className='clearfix'>
                    <Link href={`/a/${e.id}`}><a>
                        <div className='img'>
                            <img src={`http://www.zxjmy.com${e.img}`}  alt={e.title}/>
                        </div>
                        <div className="right">
                            <p className='biaoti'>
                              {e.intro}
                            </p>
                            <p className='info'>
                                 <time>浏览次数:{e.views}</time>
                                 <span>{e.label_name}</span>
                            </p>
                        </div>
                    </a></Link></li>
                ))}
            </ul>
            {total <= 10 ? total == 0 ? <p style={{ textAlign: 'center' }}>暂无相关内容</p> : '' : <div className="am-pagination custom-pagination-with-icon">
                            <div className="am-flexbox am-flexbox-align-center">
                                <div className="am-flexbox-item am-pagination-wrap-btn am-pagination-wrap-btn-prev">
                                    <a role="button" className={`am-button am-button-inline ${info.page == 1 ? 'am-button-disabled' : info.page ? '' : 'am-button-disabled'}`}
                                       href={`${info.page ? parseInt(info.page) > 1? `/${props.id}/${props.info.third_py}?${obj2String('page', parseInt(info.page) - 1)}` :`#` : '#' }`}
                                    >
                                        上一页
                                    </a>
                                </div>
                                <div className="am-flexbox-item am-pagination-wrap" aria-live="assertive">
                                    <span className="active">{info.page ? info.page : '1'}</span>/<span>{Math.ceil(total / 10)}</span></div>
                                 <div className="am-flexbox-item am-pagination-wrap-btn am-pagination-wrap-btn-next">
                                    <a role="button" className={`am-button am-button-inline${info.page <= Math.floor(total / 10) ? '' : info.page ? 'am-button-disabled' : ''} `}
                                        href={`${info.page ? info.page * 10 <= total ? `/${props.id}/${props.info.third_py}?${obj2String('page', parseInt(info.page) + 1)}` : '#' : `/${props.id}/${props.info.third_py}?${obj2String('page', 2)}`}`}
                                    ><span className="arrow-align">
                                            下一页
                                    </span>
                                    </a>
                                </div>
                            </div>
                        </div>}
            </div>
            <Footer />
            <style>{stylesheet}</style>
        </div>
    )
}



BaikeList.getInitialProps = async function (context) {
    const {id,info,lei} = context.query
     info['third_py'] = lei

    const res = await apis.getList(info);

    const data = await res;
    return {
        shows: data,
        id: id,
        info:info
    }

}

export default BaikeList;
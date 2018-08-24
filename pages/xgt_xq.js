import Link from 'next/link'
import Head from '../components/head'
import Nav from '../components/nav/nav'
import stylesheet from '../components/xgt/xgt.less'
import Footer from '../components/footer/footer'
import { Icon ,Pagination} from 'antd-mobile';
import * as apis from '../redux/api'
const list =[{},{},{}]

const XgtList=(props)=>{
    const obj2String=(b,c,d)=>{
        var obj = Object.assign({},props.info);
       if(d){
        obj[d]=1
       }
        obj[b] = c
        return new URLSearchParams(obj).toString()
    }
    console.log(props)
    const {pictureSets,total}=props.shows
    const {info}=props
    return (
        <div className='Xgt_xq'>
             <Head title="效果图" />
            <Nav title="效果图"><a style={{ color: '#333', fontSize: '14px' }} onClick={() => (window.history.back())}><Icon type="left" size='md' />  </a></Nav>
            <div className='center'>
                 <ul className='list'>
                     {pictureSets.data.map((e,i)=>(
                         <li><Link href={`/xgt/${e.id}`}><a>
                             <div className='img'>
                                <img src={`http://www.zxjmy.com${e.path}`} alt={e.title}/>
                              </div>
                              <div className='info'>
                                    <p className='title'>
                                    {e.title}
                                    </p>
                                    <span>查看详情>></span>
                              </div>
                             </a></Link> 
                        </li>
                     ))}
                </ul>
                {total <= 10 ? total == 0 ? <p style={{ textAlign: 'center' }}>暂无相关内容</p> : '' : <div className="am-pagination custom-pagination-with-icon">
                            <div className="am-flexbox am-flexbox-align-center">
                                <div className="am-flexbox-item am-pagination-wrap-btn am-pagination-wrap-btn-prev">
                                    <a role="button" className={`am-button am-button-inline ${info.page == 1 ? 'am-button-disabled' : info.page ? '' : 'am-button-disabled'}`}
                                       href={`${info.page ? parseInt(info.page) > 1? `/xgt/${props.id}?${obj2String('page', parseInt(info.page) - 1)}` :`#` : '#' }`}
                                    >
                                        上一页
                                    </a>
                                </div>
                                <div className="am-flexbox-item am-pagination-wrap" aria-live="assertive">
                                    <span className="active">{info.page ? info.page : '1'}</span>/<span>{Math.ceil(total / 10)}</span></div>
                                 <div className="am-flexbox-item am-pagination-wrap-btn am-pagination-wrap-btn-next">
                                    <a role="button" className={`am-button am-button-inline${info.page <= Math.floor(total / 10) ? '' : info.page ? 'am-button-disabled' : ''} `}
                                        href={`${info.page ? info.page * 10 <= total ? `/xgt/${props.id}?${obj2String('page', parseInt(info.page) + 1)}` : '#' : `/xgt/${props.id}?${obj2String('page', 2)}`}`}
                                    ><span className="arrow-align">
                                            下一页
                                    </span>
                                    </a>
                                </div>
                            </div>
                        </div>}
               
            </div>
            <Footer/>
            <style>{stylesheet}</style>
        </div>
    )
}


XgtList.getInitialProps = async function (context) {
	const { id ,info} = context.query
    info['cate_name'] = id
	const res = await apis.getXgtList(info)

	const data = await res;
	return {
           id:id,
            shows: data,
            info:info
	}

}

export default XgtList
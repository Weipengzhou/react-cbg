import Link from 'next/link'
import Head from '../components/head'
import Nav from '../components/nav/nav'
import stylesheet from '../components/xgt/xgt.less'
import Footer from '../components/footer/footer'
import { Icon ,Pagination} from 'antd-mobile';
import * as apis from '../redux/api'
import Select from '../components/select/select';
import BottomNav from '../components/bottomNav/bottomNav';
const list =[{},{},{}]

const GsXgt=(props)=>{
    const {data} =props.shows.caselist
    return(
        <div className='Xgt_xq'>
             <Head title={`${props.shows.company_name}装修案例,装修设计图,房屋设计图,农村自建房设计图_${props.shows.city}金蚂蚁装修网手机端`} description={`${props.shows.company_name}装修案例,装修设计图,房屋设计图,农村自建房设计图_${props.shows.city}金蚂蚁装修网手机端`} url={`${props.id}.zxjmy.com/gs/anli/${props.ojbkey}`} />
            <Nav title="案例列表" navUrl={`/${props.id}/gs/${props.ojbkey}/anli`} city={props.id}><a style={{ color: '#333', fontSize: '14px' }} onClick={() => (window.history.back())}><Icon type="left" size='md' />  </a><Select/></Nav>
            <div className='center'>
                 <ul className='list'>
                     {data.map((e,i)=>(
                         <li key={i}>
                         <Link href={`/${props.id}/gs/${props.ojbkey}/anli/${e.id}`}><a>
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
                {list.length <=10 ? <div></div> : <Pagination total={5} className="custom-pagination-with-icon" current={1} locale={{
                                prevText: (<span className="arrow-align">上一页</span>), nextText: (<span className="arrow-align">下一页</span>),
                            }} />}
            </div>
            <Footer/>
            <BottomNav/>
            <style>{stylesheet}</style>
        </div>
    )
}
GsXgt.getInitialProps = async function (context) {
     
    const {id,key} =context.query
   const res = await apis.getCompanyXgt({company_id:key});
   
   const data = await res;
   return {
           shows:data,
           id:id,
           ojbkey:key
   }

}

export default GsXgt
import Link from 'next/link'
import Head from '../components/head'
import stylesheet from '../components/gongdi/gongdi.less'
import Nav from '../components/nav/nav'
import Footer from '../components/footer/footer'
import { Pagination, Icon } from 'antd-mobile';
import * as apis from '../redux/api'


const Gongdi=(props)=>{
    console.log(props)
    const {constructs,city,company_name} =props.shows
    return (
        <div className='Gongdi'>
             <Head title={`${company_name}施工现场,在建工地,施工图预算,设计_建筑工地图片_${city}金蚂蚁装修网`} description={`${city}金蚂蚁装修网为您免费分享${company_name}施工现场,在建工地,施工图预算,设计,建筑工地图片`} />
             <Nav title={`在建工地列表`} city={props.id}><a style={{ color: '#333', fontSize: '14px' }} onClick={() => (window.history.back())}><Icon type="left" size='md' /> </a></Nav>
             <div className='pic-list'>
                <ul>
                {constructs.data.map((e,index)=>(
                    <li key={index}>
                        <Link href={`/${props.id}/gs/${props.ojbkey}/gongdi/${e.id}`}>
                           <a> 
                               <img src={`http://www.zxjmy.com${e.path}`} alt={e.housing_estate}/>
                               <div className="li_con">
                                    <div className="li_infor">
                                        <span className="fs30">{e.housing_estate}</span>
                                       
                                    </div>
                                </div>
                            
                            </a>
                        </Link>
                    </li>
    
                ))}
                </ul>
    
             
             </div>
             <Footer/>
            <style>{stylesheet}</style>
        </div>
    )
}

Gongdi.getInitialProps = async function (context) {

    const { id, key } = context.query
    const res = await apis.getGongdilist({ company_id:key });

    const data = await res;
    return {
        shows: data,
        id: id,
        ojbkey: key
    }

}

export default Gongdi;
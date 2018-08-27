import Link from 'next/link'
import Head from '../components/head'
import stylesheet from '../components/design/design.less'
import Nav from '../components/nav/nav'
import Footer from '../components/footer/footer'
import { Pagination, Icon } from 'antd-mobile';
import * as apis from '../redux/api'


const Design = (props) =>{
 
    const {company_name,city,designers_list}=props.shows
    return  (
        <div className='Design'>
            <Head title={`${company_name}.设计团队,设计师_${city}设计师_${city}室内房屋设计图,小别墅设计图_${city}金蚂蚁装修网手机端`} description={`${city}金蚂蚁装修网手机端为您免费分享${company_name}设计团队,设计师,${city}设计师,${city}室内房屋设计图,小别墅设计图`} url={`${props.id}.zxjmy.com/gs/sheji/${props.ojbkey}`} />
            <Nav title={`设计团队`} city={props.id}><a style={{ color: '#333', fontSize: '14px' }} onClick={() => (window.history.back())}><Icon type="left" size='md' /> </a></Nav>
            <div className='list'>
                <ul>
                {designers_list.map((e, index) => (<li key={index}>
                        <Link href={`/${props.id}/gs/${props.ojbkey}/sheji/${e.id}`}>
                            <a>
                                <span className='li_img'>
                                    <img src={`http://www.zxjmy.com${e.profile}`} alt={e.name} />
                                </span>
                                <span className='li_con'>
                                    <span className="li_h">
                                        <span className="name">{e.name}</span>
                                        <span className="tag">(设计师)</span>
                                    </span>
                                    <span className="li_detail">
                                        <p>擅长领域 : {e.domain}</p>
                                        <p>设计经验 : {e.experiences}年 </p>
                                    </span>
                                </span>
                            </a>
                        </Link>
                    </li>))}
                </ul>
              
            </div>
    
            <Footer />
            <style>{stylesheet}</style>
        </div>
    )
}

Design.getInitialProps = async function (context) {

    const {id,key} =context.query
    const res = await apis.getCompanyDesign({company_id:key});
    
	const data = await res;
	return {
            shows:data,
            id:id,
            ojbkey:key
	}
}

export default Design;



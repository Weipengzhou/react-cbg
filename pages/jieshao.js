import Link from 'next/link'
import { Component } from 'react'
import Head from '../components/head'
import stylesheet from '../components/jieshao/jieshao.less'
import Nav from '../components/nav/nav'
import Footer from '../components/footer/footer'
import { Pagination, Icon } from 'antd-mobile';
import * as apis from '../redux/api'
class Jieshao extends Component {
    render() {
        const { company } = this.props.shows
        return (
            <div className='jieshao'>
                <Head title={`${company.companyIntro.name}介绍_${company.companyIntro.city}装修公司哪家好？如何选？_${company.companyIntro.city}金蚂蚁装修网`} description={`${company.companyIntro.name}介绍,${company.companyIntro.city}金蚂蚁装修网为您免费分享${company.companyIntro.city}装修公司排名,哪家好？`} url={`${this.props.id}.zxjmy.com/gs/jieshao/${this.props.ojbkey}`} />
                <Nav title={`${company.companyIntro.name}`}><a style={{ color: '#333', fontSize: '14px' }} onClick={() => (window.history.back())}><Icon type="left" size='md' /> </a></Nav>
                <div className='about'>
                    <p className="title">公司介绍</p>
                    <p className='content'>
                        {company.companyIntro.intro}  </p>
                </div>
                <div className='message'>
                    <p className="title">公司业务</p>
                    <div className="merchant-information">
                     
                        <div className="business-spread"><span>服务范围:</span><p>{company.companyRanges.map((e,index)=>(<a key={index} > {e.name} </a>))}</p></div>
                    </div>
                </div>
                <div className='zizhi'>
                    <p className="title">企业资质与照片</p>
                    <ul>
                       {company.companyImages.map((e,index)=>(
                           <li key={index}>
                              <img  src={`http://www.zxjmy.com${e.path}`} alt={company.companyIntro.name}/>
                           </li>
                       ))}
                    </ul>
                </div>
                <Footer />
                <style>
                    {stylesheet}
                </style>
            </div>
        )
    }
}





Jieshao.getInitialProps = async function (context) {

    const { id, key } = context.query

    const res = await apis.getCompanyAbout({ company_id: key});

    const data = await res;
    return {
        shows: data,
        id: id,
        ojbkey: key
    }

}
export default Jieshao;

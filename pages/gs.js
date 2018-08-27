import Link from 'next/link'
import Head from '../components/head'
import { Component } from 'react'
import stylesheet from '../components/gs/gs.less'
import Nav from '../components/nav/nav'
import Footer from '../components/footer/footer'
import { Pagination, Icon } from 'antd-mobile';
import * as apis from '../redux/api'


class Gs extends Component {
    state = {
        menu: [{ name: '全部', cate: '', id: '1' }, { name: '案例', cate: 'case', id: '2' }, { name: '口碑值', cate: 'public_praise', id: '3' }],
        nIndex: 1,
        list: [],
        style: false,
        filtrate: [0, 0, 0],
        cai: [
            {
                name: '空间',
                child: [{ name: '全部', id: '1' }, { name: '厨房', id: '2' }]
            },
            {
                name: '类型',
                child: [{ name: '全部', id: '1' }, { name: '小户型', id: '2' }]
            }],

    }
    tabChoiced = (id) => {
        this.setState({
            nIndex: id
        });
    }
    filtrate = (i, index) => {
        var filtrate = this.state.filtrate
        filtrate[i] = index;
        this.setState({ filtrate })
    }
 
    obj2String(b, c,d) {
        var obj = Object.assign({}, this.props.para);
       if(d){
        obj[d]=1
       }
        obj[b] = c
        return new URLSearchParams(obj).toString()
    }

    render() {
        const { city } = this.props.shows
        const newUrl = this.props.para
        newUrl['city_name'] = this.props.id
        return (
            <div className='company'>
                <Head title={`${city}装修公司排名_${city}装修公司哪家好？_${city}装修公司如何选？_${city}口碑好的装修公司_${city}金蚂蚁装修网`} description={`${city}金蚂蚁装修网为您严选口碑好的装修公司并且为您提供${city}装修公司排名。${city}装修公司如何选？${city}装修公司哪家好？${city}金蚂蚁装修网告诉您！！`} url={`${this.props.id}.zxjmy.com/gs`} />
                <Nav title={`${city}装修公司`} city={this.props.id}><a style={{ color: '#333', fontSize: '14px' }} onClick={() => (window.history.back())}><Icon type="left" size='md' /> </a></Nav>

                <div className='filter-nav'>
                    <ul>
                        {this.state.menu.map((e, index) => (
                            <li key={index} onClick={this.tabChoiced.bind(this, e.id)} className={newUrl['order'] == e.cate ? 'active' : ''}>
                                <Link href={`/${this.props.id}/gs${e.id == 1 ? `` : e.id == 2 ? `?${this.obj2String('order', 'case','page')}` : e.id == 3 ? `?${this.obj2String('order', 'public_praise','page')}` : ''}`}>
                                    <a>
                                        {e.name}
                                    </a>
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <div className='btn-area' onClick={() => (this.setState({ style: !this.state.style }))}>
                        {this.state.style ? <em className='on'></em> : <em className='em'></em>
                        }
                    </div>

                </div>


                <div className='contents'>
                    <div className='company-wrap'>
                        <ul>
                            {this.props.shows.companies.map((e, i) => (
                                <li key={i}>
                                    <Link href={`/${this.props.id}/gs/${e.id}`} >
                                        <a>
                                            <div className='com-logo'>
                                                <img src={`http://www.zxjmy.com/${e.company_logo}`} alt={e.name} />
                                            </div>
                                            <div className='detail'>
                                                <div className='title'>
                                                    <span>{e.name}</span>
                                                </div>
                                                <div className='info'>
                                                    <i className="two_1"></i>
                                                    <i className="two_2"></i>
                                                    <i className="two_3"></i><em>{e.caseCounts ? e.caseCounts : '0'}个</em>
                                                    <i className="two_4"></i><em>{e.constructCounts ? e.constructCounts : '0'}个</em>
                                                    <i className="two_5"></i><em>{e.evaluation_times}</em>
                                                </div>
                                                <div className='address'>
                                                    <em></em>
                                                    <span>{e.address}  </span>
                                                </div>
                                            </div>
                                        </a>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        {this.props.shows.companyCount <= 10 ? this.props.shows.companyCount == 0 ? <p style={{ textAlign: 'center' }}>暂无公司</p> : '' : <div className="am-pagination custom-pagination-with-icon">
                            <div className="am-flexbox am-flexbox-align-center">
                                <div className="am-flexbox-item am-pagination-wrap-btn am-pagination-wrap-btn-prev">
                                    <a role="button" className={`am-button am-button-inline ${newUrl.page == 1 ? 'am-button-disabled' : newUrl.page ? '' : 'am-button-disabled'}`}
                                       href={`${newUrl.page ? parseInt(newUrl.page) > 1? `/${this.props.id}/gs?${this.obj2String('page', parseInt(newUrl.page) - 1)}` :`#` : '#' }`}
                                    >
                                        上一页
                                    </a>
                                </div>
                                <div className="am-flexbox-item am-pagination-wrap" aria-live="assertive">
                                    <span className="active">{newUrl.page ? newUrl.page : '1'}</span>/<span>{Math.ceil(this.props.shows.companyCount / 10)}</span></div>
                                 <div className="am-flexbox-item am-pagination-wrap-btn am-pagination-wrap-btn-next">
                                    <a role="button" className={`am-button am-button-inline${newUrl.page <= Math.floor(this.props.shows.companyCount / 10) ? '' : newUrl.page ? 'am-button-disabled' : ''} `}
                                        href={`${newUrl.page ? newUrl.page * 10 <= this.props.shows.companyCount ? `/${this.props.id}/gs?${this.obj2String('page', parseInt(newUrl.page) + 1)}` : '#' : `/${this.props.id}/gs?${this.obj2String('page', 2)}`}`}
                                    ><span className="arrow-align">
                                            下一页
                                    </span>
                                    </a>
                                </div>
                            </div>
                        </div>}

                    </div>
                    <Footer />
                </div>
                {this.state.style ?
                    <div className='filtrate'>
                        <div className='filtrate-wrap'>
                            <p className="filtrate-top">筛选</p>
                            <div className='filtrate-content'>
                                {this.props.shows.companyCategories.map((e, i) => (
                                    <div key={i}>
                                        <p className="filtrate-title">{e.name}</p>
                                        <ul>
                                            {e.child.map((f, index) => (
                                                <li key={index} className={e.name == '地区' ? (newUrl['district_id'] == f.id ? 'on' : '') : e.name == '范围' ? (newUrl['range_id'] == f.id ? 'on' : '') : e.name == '风格' ? (newUrl['style_id'] == f.id ? 'on' : '') : ''} >
                                                    <a href={`/${this.props.id}/gs${e.name == '地区' ? `?${this.obj2String('district_id', f.id,'page')}` : e.name == '范围' ? `?${this.obj2String('range_id', f.id,'page')}` : `?${this.obj2String('style_id', f.id,'page')}`}`}>{f.name}</a>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div> : ''}
                <style>{stylesheet}</style>
            </div>
        )
    }
}



Gs.getInitialProps = async function (context) {
   
    const { id, lei } = context.query
   
    if (!lei.city_name) {
        lei.city_name = id
    }

    const res = await apis.getCompanyList(lei)

    const data = await res;
    return {
        shows: data,
        id: id,
        para: lei
    }


}

export default Gs;
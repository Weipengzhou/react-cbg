import Link from 'next/link'
import Head from '../components/head'
import { Component } from 'react'
import stylesheet from '../components/gs/gs.less'
import Nav from '../components/nav/nav'
import Footer from '../components/footer/footer'
import { Pagination, Icon } from 'antd-mobile';



class Gs extends Component {
    state = {
        menu: [{ name: '综合', cate: '', id: '1' }, { name: '案例', cate: '', id: '2' }, { name: '口碑值', cate: '', id: '3' }],
        nIndex: 1,
        list: [{
            id:1,name:'好又快装饰公司',company_logo:'',evaluation_times:'',address:'河南郑州'
        }],
        style: false,
        filtrate:[0,0,0],
        cai:[{name:'空间',child:[{name:'全部',id:'1'},{name:'厨房',id:'2'}]},{name:'类型',child:[{name:'全部',id:'1'},{name:'小户型',id:'2'}]}],

    }
    tabChoiced = (id) => {
        this.setState({
            nIndex: id
        });
    }
    filtrate=(i,index)=>{
        var filtrate = this.state.filtrate
        filtrate[i]=index;
        this.setState({filtrate})
    }
 
    render() {
            console.log(this.props)
       return (
            <div className='company'>
                <Head title={`${this.props.show}装修公司排名_北京装修公司哪家好？_北京装修公司如何选？_北京口碑好的装修公司_北京金蚂蚁装修网`} description={`北京金蚂蚁装修网为您严选口碑好的装修公司并且为您提供北京装修公司排名。北京装修公司如何选？北京装修公司哪家好？北京金蚂蚁装修网告诉您！！`} />
                <Nav title={`${this.props.show}装修公司`}><a style={{ color: '#333', fontSize: '14px' }} onClick={() => (window.history.back())}><Icon type="left" size='md' /> </a></Nav>
                <div className='search'>
                    <div className='center'>
                        <input type="search" placeholder="输入您想查找的装修公司" />
                        <button>搜索公司</button>
                    </div>
                </div>
                <div className='filter-nav'>
                    <ul>
                        {this.state.menu.map((e, index) => (
                            <li key={index} onClick={this.tabChoiced.bind(this, e.id)} className={e.id == this.state.nIndex ? 'active' : ''}>
                                <span>
                                    {e.name}
                                </span>
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
                            {this.state.list.map((e, i) => (
                                <li key={i}>
                                    <Link as={`/${this.props.show}/gs/${e.id}`} href={`/gs_index?id=${e.id}`}>
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
                                                    <i className="two_3"></i><em>10个</em>
                                                    <i className="two_4"></i><em>10个</em>
                                                    <i className="two_5"></i><em>{e.evaluation_times}}个</em>
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
                        {this.state.list.length == 0 ? <div></div> : <Pagination total={5} className="custom-pagination-with-icon" current={1} locale={{
                            prevText: (<span className="arrow-align">上一页</span>), nextText: (<span className="arrow-align">下一页</span>),
                        }} />}
                    </div>
                    <Footer />
                </div>
                {this.state.style ?
                    <div className='filtrate'>
                        <div className='filtrate-wrap'>
                              <p className="filtrate-top">筛选</p>
                              <div className='filtrate-content'>
                                    {this.state.cai.map((e,i)=>(
                                         <div key={i}>
                                                <p className="filtrate-title">{e.name}</p>
                                                <ul>
                                                    {e.child.map((f,index)=>(
                                                        <li key={index}  className={this.state.filtrate[i]==index?'on':''} onClick={this.filtrate.bind(this,i,index)}>
                                                                    <a>{f.name}</a> 
                                                        </li>
                                                    ))}
                                                </ul>
                                           </div>
                                    ))}    
                              </div>                          
                        </div>
                    </div>:''}
                <style>{stylesheet}</style>
            </div>
        )
    }
}

Gs.getInitialProps = async function (context) {

    const { id } = context.query
    return { show: id }

}

export default Gs;
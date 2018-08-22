
import Link from 'next/link'
import { Component } from 'react'
import Head from '../components/head'
import stylesheet from '../components/index/index.less'
import Nav from '../components/nav/nav'
import Slider from '../components/index/slider/slider'
import Zxbj from '../components/index/zxbj/zxbj'
import List from '../components/index/xgt/xgt'
import Company from '../components/index/company/company'
import TabExample from '../components/tab/tab'
import ChildTab from '../components/index/baikeTab/baikeTab'
import Footer from '../components/footer/footer'
import * as apis from '../redux/api'
import {connect} from 'react-redux';
import * as action from '../redux/actions';
import { bindActionCreators } from 'redux';



const IndexNav = (props) => (
	<ul className='clearfix'>
		{props.ListData.map((e, index) => (
			<li key={index}><Link href={e.url}><a><img src={`../static/img/${e.imgSrc}.png`} alt={e.alt} /><span>{e.name}</span></a></Link></li>
		))}
	</ul>
)



const XiaoguotuData = {
	tabs: [
		{ title: '户型' },
		{ title: '空间' },
		{ title: '局部' },
		{ title: '风格' },
	],
	huxing: [
		{ url: 'baidu', lei: '二居室', English: 'Second residence', imgName: 'index_14', alt: '金蚂蚁装修网' },
		{ url: 'baidu', lei: '公寓', English: 'apartment', imgName: 'index_16', alt: '金蚂蚁装修网' },
		{ url: 'baidu', lei: '复式', English: 'compound', imgName: 'index_64', alt: '金蚂蚁装修网' },
		{ url: 'baidu', lei: '小户型', English: 'Large-sized apartment', imgName: 'index_65', alt: '金蚂蚁装修网' }
	],
	kongjian:
		[
			{ url: 'baidu', lei: '客厅', English: 'living room', imgName: 'index_18', alt: '金蚂蚁装修网' },
			{ url: 'baidu', lei: '餐厅', English: 'Restaurant', imgName: 'index_20', alt: '金蚂蚁装修网' },
			{ url: 'baidu', lei: '卧室', English: 'Bedroom', imgName: 'index_66', alt: '金蚂蚁装修网' },
			{ url: 'baidu', lei: '厨房', English: 'Kitchen', imgName: 'index_67', alt: '金蚂蚁装修网' }
		],
	jubu: [
		{ url: 'baidu', lei: '背景墙', English: 'Background wall', imgName: 'index_23', alt: '金蚂蚁装修网' },
		{ url: 'baidu', lei: '吧台', English: 'Bar counter', imgName: 'index_25', alt: '金蚂蚁装修网' },
		{ url: 'baidu', lei: '隔断', English: 'partition', imgName: 'index_68', alt: '金蚂蚁装修网' },
		{ url: 'baidu', lei: '飘窗', English: 'Bay window', imgName: 'index_69', alt: '金蚂蚁装修网' }
	],
	style: [
		{ url: 'baidu', lei: '简约', English: 'Simple', imgName: 'index_27', alt: '金蚂蚁装修网' },
		{ url: 'baidu', lei: '田园', English: 'Countryside', imgName: 'index_29', alt: '金蚂蚁装修网' },
		{ url: 'baidu', lei: '中式', English: 'Chinese style', imgName: 'index_70', alt: '金蚂蚁装修网' },
		{ url: 'baidu', lei: '欧式', English: 'European style', imgName: 'index_71', alt: '金蚂蚁装修网' }
	]
}
const tabs = {
	sheji: [
		{ title: '户型' },
		{ title: '空间' },
		{ title: '局部' },
		{ title: '风格' },
	]
}

class Shouye extends Component {
	constructor(props) {
		super(props)

	}

    componentDidMount(){
        this.props.defaultCity(this.props.shows.city.city.domain)
    }
    componentWillReceiveProps(nextProps) {
        if(nextProps.shows.city.city.domain!==this.props.shows.city.city.domain){
            this.props.defaultCity(nextProps.shows.city.city.domain)
        }
    }


	render() {
		const city = this.props.shows.city.city.city
		const domain=this.props.shows.city.city.domain

		return (
		
			<div className='Index'>
				<Head title={`${city}装修网推荐口碑好的装修公司_免费装修报价,装修设计效果图_${city}金蚂蚁装修网`} description={`${city}金蚂蚁装修网（m.zxjmy.com/${domain}）,${city}装修网致力于为${city}装修业主打造一个良好的互联网装修平台,并为${city}业主推荐口碑好的装修公司免费提供室内装修报价`} url={`${domain}.zxjmy.com`}/>

				<Nav title='首页' city={domain}>
					<Link href='/'><a style={{ color: '#333', fontSize: '14px' }}>{city}∨</a></Link>
				</Nav>
				<Slider />
				<div className='index-navbar'>
					<IndexNav ListData={[
							{ url: '/sheji', imgSrc: 'shouye-sheji@2x', alt: '金蚂蚁装修网', name: '免费设计' },
							{ url: '/baojia', imgSrc: 'shouye-baojia@2x', alt: '金蚂蚁装修网', name: '免费报价' },
							{ url: '/yanfang', imgSrc: 'shouye-yanfang@2x', alt: '金蚂蚁装修网', name: '免费验房' },
							{ url: '/xgt', imgSrc: 'shouye-xioguotu@2x', alt: '金蚂蚁装修网', name: '效果图' },
							{ url: `/${domain}/gs`, imgSrc: 'shouye-gongsi@2x', alt: '金蚂蚁装修网', name: '装修公司' },
							{ url: '/wenda', imgSrc: 'shouye-wenda@2x', alt: '金蚂蚁装修网', name: '装修问答' },
							{ url: '/gl', imgSrc: 'shouye-gonglue@2x', alt: '金蚂蚁装修网', name: '装修攻略' },
							{ url: '/bk', imgSrc: 'shouye-baike@2x', alt: '金蚂蚁装修网', name: '装修百科' },
						]} />
				</div>
				<div className='zxbj-form'>
					<p className="yusuantext"><span>6</span>秒估算装修报价</p>
					<Zxbj />
				</div>
				<TabExample title={'看设计'} tab={tabs.sheji}>
					<List data={XiaoguotuData.huxing} more='/xgt/huxing' />
					<List data={XiaoguotuData.kongjian} more='/xgt/kongjian' />
					<List data={XiaoguotuData.jubu} more='/xgt/jubu' />
					<List data={XiaoguotuData.style} more='/xgt/style' />
				</TabExample>
				<div className='home-find-company'>
					<div className='header'>
						<a className="title" href={`${domain}/gs`}>装修公司</a>
						<a className='more' href={`${domain}/gs`}>更多></a>
					</div>
					<Company CompanyList={this.props.shows.city} />
				</div> 
				<ChildTab Baike={this.props.shows.second_cates} title={'装修百事通'} style={{ marginTop: '0.2rem' }} />
				<Footer />
				<style>{stylesheet}</style>
			</div>

		)
	}

}


function mapStateToProps(state) {
    return {defaultCity:state.defaultCity }
  }
  function mapDispatchToProps(dispatch) {
    return {
      ...bindActionCreators(action, dispatch)
    }
  }

  

Shouye.getInitialProps = async function (context) {
	const { id } = context.query

	const res = await apis.indexCompany({city_name:id})

	const data = await res;
	return {
			shows: data
	}

}


export default connect(mapStateToProps,mapDispatchToProps)(Shouye)


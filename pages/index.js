
import Link from 'next/link'
import Head from '../components/head'
import stylesheet from '../index.less'
import Nav from '../components/nav'
import Slider from '../components/index/slider'
import Zxbj from '../components/index/zxbj'

const IndexNav=(props)=>(
  <li><Link href={props.href}><a><img src={props.src} alt={props.alt}/><span>{props.name}</span></a></Link></li>
)

export default () => (
  <div className='Index'>
    <Head title="金蚂蚁装修网" />
    <Nav/>
    <Slider/>
    <div className='index-navbar'>
        <ul className='clearfix'>
            <IndexNav href='/sheji' src={`../static/img/shouye-sheji@2x.png`} alt='金蚂蚁装修网' name='免费设计'/>
            <IndexNav href='/baojia' src={`../static/img/shouye-baojia@2x.png`} alt='金蚂蚁装修网' name='免费报价'/>
            <IndexNav href='/yanfang' src={`../static/img/shouye-yanfang@2x.png`} alt='金蚂蚁装修网' name='免费验房'/>
            <IndexNav href='/xgt' src={`../static/img/shouye-xioguotu@2x.png`} alt='金蚂蚁装修网' name='效果图'/>
            <IndexNav href='/company' src={`../static/img/shouye-gongsi@2x.png`} alt='金蚂蚁装修网' name='装修公司'/>
            <IndexNav href='/wenda' src={`../static/img/shouye-wenda@2x.png`} alt='金蚂蚁装修网' name='装修问答'/>
            <IndexNav href='/gl' src={`../static/img/shouye-gonglue@2x.png`} alt='金蚂蚁装修网' name='装修攻略'/>
            <IndexNav href='/bk' src={`../static/img/shouye-baike@2x.png`} alt='金蚂蚁装修网' name='装修百科'/>
        </ul>
    </div>
    <div className='zxbj-form'>
       <p className="yusuantext"><span>6</span>秒估算装修报价</p>
       <Zxbj/>
    </div>


    <style jsx global>{ stylesheet }</style>
   
  </div>
)

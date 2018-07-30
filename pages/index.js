import Link from 'next/link'
import Head from '../components/head'
import Nav from '../components/nav/nav'
import stylesheet from '../components/city/city.less';

export default () => {
    this.state={
        city:'郑州',
        url:'zhengzhou'
    }
   return(
    <div className='cityChose'>
    <Head title="金蚂蚁装修网" />
    <Nav title="切换城市">	<Link as={`/:${this.props.url}`} href={`/shouye?url=${this.state.url}`}><a style={{color:'#333',fontSize:'14px'}}>{"<"} </a></Link></Nav>
    <style>{stylesheet}</style>
   </div>
   )
}

   

import Link from 'next/link'
import stylesheet from './nav.less'
import {Component} from 'react'
import { NavBar, Icon ,Popover} from 'antd-mobile';

const Iteam=(props)=>(<li><Link href={props.url}><a><i></i><span>{props.name}</span></a></Link></li>)
class Nav extends Component{
  state = {
    visible: false,
  };

  handleVisibleChange = (e) => {
    console.log(e)
    this.setState({
      visible:!e,
    });
  };
  closeClick=()=>{
    this.setState({
      visible:false
    })
  }
  render(){
    return(
      <div>
          <div className={this.state.visible?'bg':'bg none'} style={{position:'fixed',left:'0',top:'0',width:'100%',height:'100%',background:'rgba(0,0,0,.2)',zIndex:'1'}} onClick={this.closeClick}></div>
          <nav style={{width:'100%',position:'fixed',top:0,zIndex:'1111'}}>
            <NavBar style={{backgroundColor:'rgba(255,255,255,1)',color:'#000',borderBottom:'1px solid #eee' }}
              mode="light"
                leftContent= {this.props.children}
                rightContent={[<Icon key="1" type="ellipsis" onClick={this.handleVisibleChange.bind(this,this.state.visible)} />]}
              >{this.props.title}</NavBar>
              <div className={this.state.visible?'block':'block none'} style={{position:'absolute',left:'0',top:'46px',width:'100%',height:'100%'}}>
                  
                    <ul className='nav-content clearfix'>
                        <Iteam url='/index' name='首页'/>
                        <Iteam url='/index' name='效果图'/>
                        <Iteam url='/index' name='装修公司'/>
                        <Iteam url='/index' name='装修百事通'/>
                        <Iteam url='/index' name='在线报价'/>
                        <Iteam url='/index' name='个人中心'/>
                    </ul>
              </div>
            
           </nav>
           <style>{ stylesheet }</style>
    </div>
    )
  }
}
  


export default Nav

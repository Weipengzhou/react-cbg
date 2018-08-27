import Link from 'next/link'
import stylesheet from './nav.less'
import {Component} from 'react'
import { NavBar, Icon ,Popover} from 'antd-mobile';
import {connect} from 'react-redux';
import * as action from '../../redux/actions';
import { bindActionCreators } from 'redux';

const Iteam=(props)=>(<li><Link href={props.url}><a><i></i><span>{props.name}</span></a></Link></li>)
class Nav extends Component{
  state = {
    visible: false,
  };

  handleVisibleChange = (e) => {
    this.setState({
      visible:!e,
    });
  };
  closeClick=()=>{
    this.setState({
      visible:false
    })
  }
  componentDidMount(){
    this.props.defaultCity(localStorage.getItem('city'))
  }
  render(){
       
      const navcity=this.props.city?this.props.city:this.props.default?this.props.default:'beijing'
    return(
      <div>
          <div className={this.state.visible?'bg':'bg none'} style={{position:'fixed',left:'0',top:'0',width:'100%',height:'100%',background:'rgba(0,0,0,.2)',zIndex:'111'}} onClick={this.closeClick}></div>
          <nav style={{width:'100%',position:'fixed',top:0,zIndex:'1111'}}>
            <NavBar style={{backgroundColor:'rgba(255,255,255,1)',color:'#000',borderBottom:'1px solid #eee' }}
              mode="light"
                leftContent= {this.props.children}
                rightContent={[<Icon key="1" type="ellipsis" onClick={this.handleVisibleChange.bind(this,this.state.visible)} />]}
              >{this.props.title}</NavBar>
              <div className={this.state.visible?'block':'block none'} style={{position:'absolute',left:'0',top:'46px',width:'100%',height:'100%'}}>
                  
                    <ul className='nav-content clearfix'>
                        <Iteam url={`/${navcity}`} name='首页'/>
                        <Iteam url='/xgt' name='效果图'/>
                        <Iteam url={`/${navcity}/gs`} name='装修公司'/>
                        <Iteam url='/bk' name='装修百事通'/>
                        <Iteam url='/baojia' name='在线报价'/>
                        <Iteam url='/baojia' name='个人中心'/>
                    </ul>
              </div>
            
           </nav>
           <style>{ stylesheet }</style>
    </div>
    )
  }
}
  
function mapStateToProps(state) {
  return { default:state.defaultCity}
}
function mapDispatchToProps(dispatch) {
  return {
    ...bindActionCreators(action, dispatch)
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Nav)

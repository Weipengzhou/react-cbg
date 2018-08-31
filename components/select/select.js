import Link from 'next/link'
import {Component} from 'react'
import { NavBar, Icon ,Popover} from 'antd-mobile';
import {connect} from 'react-redux';
import * as action from '../../redux/actions';
import { bindActionCreators } from 'redux';

class Select extends Component{
    componentDidMount(){
        this.props.chineseCity(localStorage.getItem('chinese'))
       
      }
    render(){
        const navcity=this.props.city?this.props.city:this.props.defaultChinese?this.props.defaultChinese:'郑州市'
    
        return(
            <a className='city' href='/'>{navcity}</a>
        )
    }
}

  
function mapStateToProps(state) {
    return { defaultChinese:state.Chinese}
  }
  function mapDispatchToProps(dispatch) {
    return {
      ...bindActionCreators(action, dispatch)
    }
  }

export default connect(mapStateToProps,mapDispatchToProps)(Select)
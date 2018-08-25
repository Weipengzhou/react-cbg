import { Component } from 'react';
import Link from 'next/link'
import Head from '../components/head'
import Nav from '../components/nav/nav'
import { Icon, Carousel, Button, WhiteSpace, WingBlank } from 'antd-mobile';
import stylesheet from '../components/xgt/xiaoguotu.less'
import * as apis from '../redux/api'
import {connect} from 'react-redux';
import * as action from '../redux/actions';
import { bindActionCreators } from 'redux';

class Xiaoguotu extends Component {
    state = {
        imgHeight: 176,
        slideIndex: 0,
        
    }

    componentDidMount() {
        // simulate img loading
        this.props.Get_Img({rendering_id:this.props.id})

    }
    add = (e) => {  
            this.props.setImgLength(e)
       if(e+1==this.props.ImgLength){
         this.props.Get_Img({rendering_id:this.props.NextImg})
         window.history.pushState({},'', `/xgt/${this.props.NextImg}`)
       }
    }
    render() {
        console.log(this.props)
       const {data} =this.props.shows.renderingsCenter
    
       const imglist = this.props.imgs?this.props.imgs:data.img_path
        return (
            <div className='Xiaoguotu'>
                <Head title={`${data.title}_金蚂蚁装修网`} description={`金蚂蚁装修网（www.zxjmy.com）为您免费分享${data.title}。如果大家喜欢这组效果图，希望大家能把《${data.title}》分享给您的朋友们哦！`} />
                <Nav title={this.props.ImgName?this.props.ImgName:data.title}><a style={{ color: '#333', fontSize: '14px' }} onClick={() => (window.history.back())}><Icon type="left" size='md' />  </a></Nav>

                <WingBlank>
                    <Carousel
                        autoplay={false}
                        infinit={false}
                        afterChange={this.add}
                        dots={false}
                    >
                        {imglist.map((val,i) => (
                            
                                <img key={i}
                                    src={`http://www.zxjmy.com${val}`}
                                    alt={this.props.ImgName?this.props.ImgName:data.title}
                                    style={{ width: '100%', verticalAlign: 'top' }}
                                 
                                />
                    
                        ))}
                    </Carousel>
                </WingBlank>
                <div className='bottom'>
                        <div className='info'>
                            <h1>{this.props.ImgName?this.props.ImgName:data.title}</h1>
                        </div>
                        <Link href='/sheji'><a className='sj'>
                        我也想这样装</a></Link>
                </div>
                <style>{stylesheet}</style>
            </div>
        )
    }
}



Xiaoguotu.getInitialProps = async function (context) {
    const {id} = context.query

    const res = await apis.getImg({rendering_id:id});

    const data = await res;
    return {
        shows: data,
        id: id,

    }

}

function mapStateToProps(state) {
    return {imgs:state.ImgList,
        ImgName:state.ImgName,
        NextImg:state.NextImg,
        PrevImg:state.PrevImg,
        ImgLength:state.ImgLength,
        ImgIndex:state.ImgIndex }
  }
  function mapDispatchToProps(dispatch) {
    return {
      ...bindActionCreators(action, dispatch)
    }
  }

export default connect(mapStateToProps,mapDispatchToProps)(Xiaoguotu);



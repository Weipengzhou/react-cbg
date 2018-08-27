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
        this.props.Com_Get_Img({case_id:this.props.id})

    }
    add = (e) => {  
            this.props.Com_setImgLength(e)
       if(e+1==this.props.Com_ImgLength){
         this.props.Com_Get_Img({case_id:this.props.Com_NextImg})
         window.history.pushState({},'', `/${this.props.fid}/gs/${this.props.ojbkey}/anli/${this.props.Com_NextImg}`)
       }
    }
    render() {

       const {data} =this.props.shows.company_name
    
       const imglist = this.props.Com_imgs?this.props.Com_imgs:data.img_path
        return (
            <div className='Xiaoguotu'>
                <Head title={`${data.title}_金蚂蚁装修网手机端`} description={`金蚂蚁装修网手机端（www.zxjmy.com）为您免费分享${data.title}。如果大家喜欢这组效果图，希望大家能把《${data.title}》分享给您的朋友们哦！`} url={`${this.props.fid}.zxjmy.com/gs/anlixiaoguo/${this.props.id}`} />
                <Nav title={this.props.Com_ImgName?this.props.Com_ImgName:data.title}><a style={{ color: '#333', fontSize: '14px' }} onClick={() => (window.history.back())}><Icon type="left" size='md' />  </a></Nav>

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
                                    alt={this.props.Com_ImgName?this.props.Com_ImgName:data.title}
                                    style={{ width: '100%', verticalAlign: 'top' }}
                                 
                                />
                    
                        ))}
                    </Carousel>
                </WingBlank>
                <div className='bottom'>
                        <div className='info'>
                            <h1>{this.props.Com_ImgName?this.props.Com_ImgName:data.title}</h1>
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
    const {pid,key,id} = context.query

    const res = await apis.getCompanyImg({case_id:pid});

    const data = await res;

    return {
        shows: data,
        id: pid,
        ojbkey:key,
        fid:id
    }

}

function mapStateToProps(state) {
    return {Com_imgs:state.Com_ImgList,
        Com_ImgName:state.Com_ImgName,
        Com_NextImg:state.Com_NextImg,
        Com_PrevImg:state.Com_PrevImg,
        Com_ImgLength:state.Com_ImgLength,
        Com_ImgIndex:state.Com_ImgIndex }
  }
  function mapDispatchToProps(dispatch) {
    return {
      ...bindActionCreators(action, dispatch)
    }
  }

export default connect(mapStateToProps,mapDispatchToProps)(Xiaoguotu);
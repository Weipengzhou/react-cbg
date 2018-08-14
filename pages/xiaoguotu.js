import { Component } from 'react';
import Link from 'next/link'
import Head from '../components/head'
import Nav from '../components/nav/nav'
import { Icon, Carousel, Button, WhiteSpace, WingBlank } from 'antd-mobile';
import stylesheet from '../components/xgt/xiaoguotu.less'



class Xiaoguotu extends Component {
    state = {
        data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
        imgHeight: 176,
        slideIndex: 0,
    }
  
    componentDidUpdate() {

        if (this.state.slideIndex !== this.state.data.length - 1) {
               this.setState({ slideIndex: this.state.data.length - 1 });
        }
    }
    add=(e)=>{
        if(e==this.state.length-1){
            console.log(this.state.data)
        }
        // if(e==this.state.data.length-1){

        //     this.setState({
        //         data: this.state.data.concat('AiyWuByWklrrUDlFignR'),
        //     });
        // }
  
      
    }
    render() {
        return (
            <div className='Xiaoguotu'>
                <Head title="效果图" />
                <Nav title="效果图"><a style={{ color: '#333', fontSize: '14px' }} onClick={() => (window.history.back())}><Icon type="left" size='md' />  </a></Nav>
            
                <WingBlank>
                    <Carousel
                        autoplay={false}
                        infinite={false}
                        selectedIndex={this.state.slideIndex}
                        beforeChange={this.add}
                      
                    >
                        {this.state.data.map((val, index) => (
                            <a
                                key={val + index}
                                href="http://www.alipay.com"
                                style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                            >
                                <img
                                    src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
                                    alt=""
                                    style={{ width: '100%', verticalAlign: 'top' }}
                                    onLoad={() => {
                                        // fire window resize event to change height
                                        window.dispatchEvent(new Event('resize'));
                                        this.setState({ imgHeight: 'auto' });
                                    }}
                                />
                            </a>
                        ))}
                    </Carousel>
                </WingBlank>
                <style>{stylesheet}</style>
            </div>
        )
    }
}

export default Xiaoguotu;



import { Component } from 'react';
import Link from 'next/link'
import Head from '../components/head'
import Nav from '../components/nav/nav'
import { Icon, Carousel, Button, WhiteSpace, WingBlank } from 'antd-mobile';
import stylesheet from '../components/xgt/xiaoguotu.less'



class Xiaoguotu extends Component {
    state = {
        data: ['1', '2', '3'],
        imgHeight: 176,
        slideIndex: 0,
        name:'现代简约风格'
    }

    componentDidMount() {
        // simulate img loading
        setTimeout(() => {
            this.setState({
                data: ['1', '2', '3'],
            });
        }, 100);
    }
    add = (e) => {
        console.log('当前是第' + (e + 1) + '张', '当前图片有' + this.state.data.length + '张', '图片列表', this.state.data)
        const len = this.state.data.length
        const {data} =this.state
        if ((e + 2) == len) {
            data.push(e+3)
            this.setState({ data})
            this.setState({ name:'最漂亮主卧田园窗帘效果' })
        }
     
    }
    render() {
        return (
            <div className='Xiaoguotu'>
                <Head title={this.state.name} />
                <Nav title={this.state.name}><a style={{ color: '#333', fontSize: '14px' }} onClick={() => (window.history.back())}><Icon type="left" size='md' />  </a></Nav>

                <WingBlank>
                    <Carousel
                        autoplay={false}
                        infinit={false}
                        afterChange={this.add}
                        dots={false}
                    >
                        {this.state.data.map(val => (
                            <a
                                key={val}
                                href="http://www.alipay.com"
                                style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                            >
                                <img
                                    src={`/static/img/pic/${val}.jpg`}
                                    alt={this.state.name}
                                    style={{ width: '100%', verticalAlign: 'top' }}
                                 
                                />
                            </a>
                        ))}
                    </Carousel>
                </WingBlank>
                <div className='bottom'>
                        <div className='info'>
                            <h1>{this.state.name}</h1>
                        </div>
                        <Link href='/sheji'><a className='sj'>
                        我也想这样装</a></Link>
                </div>
                <style>{stylesheet}</style>
            </div>
        )
    }
}

export default Xiaoguotu;
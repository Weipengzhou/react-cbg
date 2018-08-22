import { Component } from 'react'
import Link from 'next/link'
import Head from '../components/head'
import stylesheet from '../components/article/article.less'
import Nav from '../components/nav/nav'
import Footer from '../components/footer/footer'
import { Pagination, Icon, Tabs, WhiteSpace } from 'antd-mobile';
const list=[{},{},{},{},{}]
class Article  extends Component{
    componentDidMount() {
        window._bd_share_config = {
            common : {
                bdText : '图片',	
                bdDesc : '内容',	
                bdUrl : 'www.baidu.com', 	
                bdPic : '自定义分享图片'
            },
            share : [{
                "bdSize" : 16
            }],
            slide : [{	   
                bdImg : 0,
                bdPos : "right",
                bdTop : 100
            }],
            image : [{
                viewType : 'list',
                viewPos : 'top',
                viewColor : 'black',
                viewSize : '16',
                viewList : ['qzone','tsina','huaban','tqq','renren']
            }],
            selectShare : [{
                "bdselectMiniList" : ['qzone','tqq','kaixin001','bdxc','tqf']
            }]
        }
       
    }
    render(){
        return (
            <div className='Article'>
                <Head title={``} description={``} />
                <Nav title={`装修百科`}><a style={{ color: '#333', fontSize: '14px' }} onClick={() => (window.history.back())}><Icon type="left" size='md' /> </a></Nav>
                <div className='center'>
                <h1>俄罗斯幼儿园被曝虐童 孩子睡觉时手脚被尿布捆绑</h1>
                <div className="info">
                    <span className="time">2018-08-10 16:52</span>
                    <span className="source">来源：金蚂蚁装修网</span>
                </div>
                <div className="content">
                     <p>《每日邮报》9日报道，近日，俄罗斯检察官正在调查一所“地狱幼儿园”，有人曝料，睡觉时，孩子们的手和腿经常被绑在一起，无法动弹。</p>
                     <p>大家都知道装修公司套路深，要装修的小伙伴总是防不胜防，那么，在<strong>签订装修合同要注意</strong><strong>什么呢？</strong></p>
                </div>
                <div className="bdsharebuttonbox bdshare-button-style0-16" data-bd-bind="1533892531330">
                    <a href="#" className="bds_qzone" data-cmd="qzone" title="分享到QQ空间"></a>
                    <a href="#" className="bds_tsina" data-cmd="tsina" title="分享到新浪微博"></a>
                    <a href="#" className="bds_weixin" data-cmd="weixin" title="分享到微信"></a>
                </div>
                <div className="bottom">
                    <span>声明：本文发自金蚂蚁装修网，如本站文章和转稿涉及版权等问题，请作者及时联系本站，我们会尽快处理。</span>
                    <span> 标题：装修合同注意事项，不看会后悔！</span>
                    <a href=""> 本文地址：http://www.zxjmy.com/a/68</a>
                </div>
               
                <div className='tj'>
                    <div className='header'>
                        <a className='title'>相关推荐</a>
                    </div>
                    <ul className='list'>
                        {list.map((e, i) => (
                            <li key={i} className='clearfix'><Link><a>
                                <div className='img'>
                                    <img src={`/static/img/anli.jpg`}  alt=""/>
                                </div>
                                <div className="right">
                                    <p className='biaoti'>
                                        法恩莎卫浴：2018年度国家知识产权...
                                    </p>
                                    <p className='info'>
                                        <time>2018-08-08</time>
                                        <span>浏览次数：516</span>
                                    </p>
                                </div>
                            </a></Link></li>
                        ))}
                    </ul>
                </div>
                </div>
                <Footer />
                <style>{stylesheet}</style>
               
            </div>
        )
    }
}
Article.getInitialProps = async function (context) {
   
    const { id } = context.query
    console.log(id)
    // const res = await apis.getCompanyInfo({company_id:id})

    // const data = await res;

    return { id: id }

}
export default Article;
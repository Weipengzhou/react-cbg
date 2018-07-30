import Link from 'next/link'
import stylesheet from './footer.less'

const Footer=()=>(<footer>
        <div className='hotCity'>
            <h2>热门城市</h2>
            <a href='/beijing'>北京</a>
            <a href='/shanghai'>上海</a>
            <a href='/guangzhou'>广州</a>
            <a href='/shenzhen'>深圳</a>
            <br/>
            <a href='/nanjing'>南京</a>
            <a href='/suzhou'>苏州</a>
            <a href='/hanzhou'>杭州</a>
            <a href='/zhengzhou'>郑州</a>
        </div>
        <div className='top'>
             <a href='/about'>电脑版</a>
             <a href='/flsm' className='two'>关于我们</a>
             <a href='/flsm'>常见问题</a>
        </div>
        <div className='bottom'>
            <a href='tel:400-0606-129'>400-0606-129</a>
            <p>Copyright © 2017 金蚂蚁装修网 保留所有权利</p>
            <p>ICP备案：豫ICP备17030941号-2</p>
        </div>

       <style>{stylesheet}</style>
</footer>)


export default Footer;
import Link from 'next/link'
import footer from './footer.less'

const Footer=()=>(<footer>
        <div className='hotCity'>
            <h2>热门城市</h2>
            <Link as={`/beijing`} href={`/shouye?id=beijing`}><a>北京</a></Link>
            <Link as={`/shanghai`} href={`/shouye?id=shanghai`}><a>上海</a></Link>
            <Link as={`/guangzhou`} href={`/shouye?id=guangzhou`}><a>广州</a></Link>
            <Link as={`/shenzhen`} href={`/shouye?id=shenzhen`}><a>深圳</a></Link>
           
            <br/>
            <Link as={`/nanjing`} href={`/shouye?id=nanjing`}><a>南京</a></Link>
            <Link as={`/suzhou`} href={`/shouye?id=suzhou`}><a>苏州</a></Link>
            <Link as={`/hangzhou`} href={`/shouye?id=hangzhou`}><a>杭州</a></Link>
            <Link as={`/zhengzhou`} href={`/shouye?id=zhengzhou`}><a>郑州</a></Link>
        
        </div>
        <div className='top'>
             <a href='/about'>电脑版</a>
             <a href='/gywm' className='two'>关于我们</a>
             <a href='/flsm'>法律声明</a>
        </div>
        <div className='bottom'>
            <a href='tel:400-0606-129'>400-0606-129</a>
            <p>Copyright © 2017 金蚂蚁装修网 保留所有权利</p>
            <p>ICP备案：豫ICP备17030941号-2</p>
        </div>

       <style>{footer}</style>
</footer>)


export default Footer;
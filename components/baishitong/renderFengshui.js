import Link from 'next/link'

const renderFengshui=(e)=>(
    <ul className='child'>
        {e.list.map((a,index)=>(
            <li key={index} style={{background:`url(http://www.zxjmy.com/uploads/20180808/1533695598704016.jpg)`,backgroundSize:'cover'}}>
              <Link href=''>
                <a>
                             <div className="bar-left">
                             {e.title}
                            </div>
                            <div className='bottom'>
                                <h3>客厅装饰风水禁忌有哪些？客厅风水布局详解</h3>
                                <div className="info-bar-left">2018-08-08</div>    
                                <div className="info-bar-right">2018</div>  
                            </div>
                </a> 
             </Link>
            </li>
        ))}
    </ul>
)
export default renderFengshui
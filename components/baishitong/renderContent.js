import Link from 'next/link'
//装修设计列表
const renderContent = (e) =>(
    <ul  className='list'>
        {e.list.map((a,i)=>(
            <li key={i} className='clearfix'>
                <Link href=''>
                    <a>
                        <h3>电视柜什么牌子好?2018电视柜十大品牌</h3>
                        <div className="img">
                            <img src={`/static/img/index_70.jpg`} alt=""/>
                        </div>
                        <div className="info">
                            <p className="item-sumy">
                                 如何将小空间合理利用，实现小空间打造精致生活，合理利用每一平方的空间   
                                 如何将小空间合理利用，实现小空间打造精致生活，合理利用每一平方的空间
                                 如何将小空间合理利用，实现小空间打造精致生活，合理利用每一平方的空间
                            </p>
                            <div className="info-bar-left">
                             {e.title}
                            </div>
                            <div className="info-bar-right">
                            2018-08-08 14:33:55 
                            </div>
                        </div>
                    </a>
                </Link>
            </li>
        ))}
   </ul>
   )
   export default renderContent;
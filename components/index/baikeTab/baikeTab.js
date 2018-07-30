import { Tabs, WhiteSpace } from 'antd-mobile';
import Link from 'next/link'
import stylesheet from './baikeTab.less'
import TabExample from '../../tab/tab'

const BaikeTab = (props) => {
    return(
        <div style={{marginTop:'0.2rem'}}>
    <TabExample title={props.title}  tabs={props.Baike.tab}>
    {props.Baike.list.map((i,q)=>(
          <div className='baikeTab' key={q}>
                 <Tabs tabs={i.tabs} initialPage={0} animated={false} useOnPan={false}  >
                        {i.data.map((e,index)=>(
                            <div className='content' key={index} style={{height: '240px', backgroundColor: '#fff' }}>
                                    <ul> 
                                        {e.t_list.map((a,dex)=>(
                                            <li key={dex}>
                                                <Link href={`/a/${a.id}`}><a>
                                                    <div className='img'><img src={`http://www.zxjmy.com${a.img}`} alt={a.title}/></div>
                                                   
                                                    <div className='right'>
                                                  <p className='text-title'>{a.title}</p>        
                                                        <p className='text-content'>{a.intro}</p>
                                                        <div className='text-info'>
                                                            <p className='text-time'>{a.updated_at}</p>
                                                            <p className='text-view'>阅读量:{a.views}</p>
                                                            <p className='text-type'>{a.label}</p>
                                                        </div>    
                                                    </div>
                                                    </a>
                                                </Link> 
                                            </li>
                                            
                                            ))}


                                </ul>
                                <Link href={`/bk/${i.tabs[index].cate_pinyin}`}><a  className='gd'>查看更多>></a></Link>
                            </div>
                    ))}             
                </Tabs>
            </div>    
            ))}
    </TabExample>
    <style>{stylesheet}</style>
  </div>
    )
}

export default BaikeTab
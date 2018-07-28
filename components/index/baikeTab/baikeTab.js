import { Tabs, WhiteSpace } from 'antd-mobile';
import Link from 'next/link'
import stylesheet from './baikeTab.less'
import TabExample from '../../tab/tab'

const BaikeTab = (props) => {
    console.log(props)
    return(
        <div>
    <TabExample title={props.title}  tabs={props.Baike.tab}>
    {props.Baike.list.map((i,q)=>(
          <div className='baikeTab'>
                 <Tabs tabs={i.tabs} initialPage={0} animated={false} useOnPan={false} key={q} >
                        {i.data.map((e,index)=>(
                            <div className='content' key={index} style={{height: '250px', backgroundColor: '#fff' }}>
                                    <ul> 
                                        {e.t_list.map((a,dex)=>(
                                            <li key={dex}>
                                                <Link href={a.url}><a>
                                                    <div className='img'><img src={`http://www.zxjmy.com${a.img}`} alt={a.title}/></div>
                                                    <div className='right'>
                                                        <p className='text-title'>{a.title}</p>
                                                        <p className='text-content'>{a.intro}</p>
                                                        <div className='text-info'>
                                                            <p className='text-time'>{a.updated_at}</p>
                                                            <p className='text-view'>{a.views}</p>
                                                            <p className='text-type'>{props.Baike.tab[q].title}</p>
                                                        </div>    
                                                    </div>
                                                </a></Link>
                                            </li>
                                            ))}
                                </ul>
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
import { Tabs, WhiteSpace } from 'antd-mobile';
import Link from 'next/link'
import stylesheet from './baikeTab.less'
import TabExample from '../../tab/tab'

const BaikeTab = (props) => {
    return (
        <div style={{ marginTop: '0.2rem' }}>
            <TabExample title={props.title} tab={props.Baike.tab} trl={props.trl}>
                {props.Baike.list.map((i, q) => (
                    <div className='baikeTab' key={q}>
                        <Tabs tabs={props.Baike.list[q]} initialPage={0} animated={false} useOnPan={false}  >
                            {props.Baike.list[q].map((f,m) => (
                                  <div className='content' key={m} style={{ height: '340px', backgroundColor: '#fff' }}>
                                      <ul>
                                           {props.Baike.data[f.cate_pinyin].map((a, index) => (
                                                        <li key={index} style={{height:'80px'}}>
                                                            <a href={`/a/${a.id}`}>
                                                                <div className='img'><img src={`http://www.zxjmy.com${a.img}`} alt={a.title} /></div>
                                                
                                                                <div className='right'>
                                                                    <p className='text-title'>{a.title}</p>
                                                                    <p className='text-content'>{a.intro}</p>
                                                                    <div className='text-info'>
                                                                        <p className='text-time'>{a.updated_at}</p>
                                                                        <p className='text-view'>阅读量:{a.views}</p>
                                                                       
                                                                    </div>
                                                                </div>
                                                        
                                                            </a>
                                                        </li>
                                                
                                            ))}
                                              {props.Baike.data[f.cate_pinyin].length<1?<a className='gd'>暂无更多>></a>:''}
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

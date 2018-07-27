import Link from 'next/link'
import Style from './xgt.less'



const List =(props)=>{
  return(
    <div style={{   height: '8.4rem', backgroundColor: '#fff' }}>
      <ul className='clearfix'>
        {props.data.map((e,index)=>(<li key={index}><Link href={e.url}><a><div className='info'><p>{e.lei}</p><span>{e.English}</span></div><img src={`/static/img/${e.imgName}.jpg`} alt={e.alt}/></a></Link></li>))}
      </ul>
        <Link href={props.more}><a className='more'>查看更多>></a></Link>
           <style >{ Style}</style>
    </div>
  )
}



export default List;
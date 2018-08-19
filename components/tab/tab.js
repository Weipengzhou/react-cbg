import Link from 'next/link'
import { Tabs, WhiteSpace } from 'antd-mobile';
import { StickyContainer, Sticky } from 'react-sticky';
import Style from './tab.less'


function renderTabBar(props) {
    return (<Sticky>
      {({ style }) => <div className='abc clearfix' style={{ ...style, zIndex: 1 }}> <Link href=''><a  className='title'>{props.tabBarTextStyle}</a></Link><Tabs.DefaultTabBar {...props} /></div>}
    </Sticky>);
  }


  const TabExample = (props) =>{
      return(
        <div className='xgt'>
        <WhiteSpace />
        <StickyContainer>
          <Tabs tabs={props.tab}
            initalPage={'t2'}
            renderTabBar={renderTabBar}
            tabBarTextStyle={props.title}
          >   
              {props.children}
          </Tabs>
        </StickyContainer>
        <WhiteSpace />
        <style >{ Style}</style>
      </div>
      )
  }
  
  export default TabExample;
import {Component} from 'react';
import { Carousel, WingBlank } from 'antd-mobile';

class Slider extends Component {
    state = {
      data: ['banner1','banner2'],
      imgHeight: '3rem',
    }
    componentDidMount() {
      // simulate img loading
      setTimeout(() => {
        this.setState({
          data: ['banner1', 'banner2'],
        });
      }, 100);
    }
    render() {
      return (
        <WingBlank   style={{width:'100%',margin:'0',minHeight:this.state.imgHeight,marginTop:'0.9rem'}}>
          <Carousel
            autoplay={true}
            infinite          
          >
            {this.state.data.map(val => (
                
              <a
                key={val}
                href="/baojia"
                style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
              >
                <img
                  src={`../static/img/${val}.jpg`}
                  alt=""
                  style={{ width: '100%', verticalAlign: 'top',height: this.state.imgHeight}}
                  onLoad={() => {
                    // fire window resize event to change height
                    window.dispatchEvent(new Event('resize'));
                    this.setState({ imgHeight: 'auto' });
                  }}
                />
              </a>
            ))}
          </Carousel>
        
        </WingBlank>
        
      );
    }
  }

  export default Slider
import { ActivityIndicator, WingBlank, WhiteSpace, Button } from 'antd-mobile';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            animating: true,
        };
    }
    componentWillUnmount() {
        clearTimeout(this.closeTimer);
    }

    render() {
        return (
            <div>
                <WingBlank>

                    <div className="toast-container">
                        <WhiteSpace size="xl" />
                      
                        <div className="toast-example">
                            <ActivityIndicator
                                toast
                                text="Loading..."
                                animating={this.state.animating}
                            />
                        </div>
                    </div>
                </WingBlank>
                <style>{`.loading-example {
  display: flex;
  justify-content: flex-start;
}
.align {
  display: flex;
  flex-direction: column;
}
.sub-title {
  color: #888;
  font-size: 14px;
  padding: 30px 0 18px 0;
}`}</style>
            </div>
        );
    }
}


export default App
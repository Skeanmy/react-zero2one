import React from 'react';

interface Props {}

interface State {
    isOpen: boolean
}

class ShopCart extends React.Component<Props, State> {
    // 唯一可以通过直接赋值修改 state 的地方
    public state = {
        isOpen: false
    }

    public handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        this.setState({
            isOpen: !this.state.isOpen
        })
        // target: 事件触发的元素
        // currentTarget: 事件处理绑定的函数
        console.log(e.target, e.currentTarget);
    }
    
    public render() {
        return (
            <div>
                <button onClick={this.handleClick}>购物车两件</button>
                <div style={{
                    display: this.state.isOpen ? 'block' : 'none'
                }}>
                    <ul>
                        <li>1</li>
                        <li>2</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default ShopCart
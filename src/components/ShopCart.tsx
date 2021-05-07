import React, {useState, useEffect, useContext} from 'react';
import {appContext} from '../AppState'

interface Props {}

interface State {
    isOpen: boolean,
    count: number
}

const ShopCart: React.FC = (props) => {
    const [count, setCount] = useState<number>(0)
    const [isOpen, setOpen] = useState<boolean>(false)
    const value = useContext(appContext)

    useEffect(() => {
        console.log(1);
        document.title = count.toString()
    }, [count])

    const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        // target: 事件触发的元素
        // currentTarget: 事件处理绑定的函数
        if ((e.target as HTMLElement).nodeName === 'SPAN') {
            setOpen(!isOpen)
        }
    }
    
    return (
        <div>
            <button onClick={
                () => {
                    setCount(count+1)
                    setCount(count+1)
                }
            }>Click</button>
            <span>count: {count}</span>
            <div onClick={handleClick}>+<span>购物车{value.shopCart.items.length}件商品</span></div>
            <div style={{
                display: isOpen ? 'block' : 'none'
            }}>
                <ul>
                    {
                        value.shopCart.items.map(item => (
                            <li key={item.id}>{item.name}</li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

// class ShopCart extends React.Component<Props, State> {
//     // 唯一可以通过直接赋值修改 state 的地方
//     public state = {
//         isOpen: false,
//         count: 0
//     }

//     public handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        
//         // target: 事件触发的元素
//         // currentTarget: 事件处理绑定的函数
//         console.log(e.target, e.currentTarget);
//         if ((e.target as HTMLElement).nodeName === 'SPAN') {
//             this.setState({
//                 isOpen: !this.state.isOpen
//             })
//         }
//     }
    
//     public render() {
//         return (
//             <div>
//                 <button onClick={
//                     () => {
//                         this.setState((preState, props) => ({
//                             count: preState.count + 1
//                         }))
//                         this.setState((preState, props) => ({
//                             count: preState.count + 2
//                         }))
//                         // this.setState({
//                         //     count: this.state.count + 2
//                         // })
//                         this.setState({
//                             count: this.state.count + 1
//                         })
//                         this.setState((preState, props) => ({
//                             count: preState.count + 2
//                         }))
//                         this.setState((preState, props) => ({
//                             count: preState.count + 3
//                         }))
//                         console.log(this.state.count);
//                     }
//                 }>Click</button>
//                 <span>count: {this.state.count}</span>
//                 <div onClick={this.handleClick}>+<span>购物车两件</span></div>
//                 <div style={{
//                     display: this.state.isOpen ? 'block' : 'none'
//                 }}>
//                     <ul>
//                         <li>1</li>
//                         <li>2</li>
//                     </ul>
//                 </div>
//             </div>
//         )
//     }
// }

export default ShopCart
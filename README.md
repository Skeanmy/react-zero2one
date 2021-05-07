## React-zero2one

### 开发点记录

#### setState 同步还是异步
setState 不是异步的，是由于 state 的处理一般发生在声明周期变化的时候，因此有一种 setState 是异步的现象。

- 当 setState 传入的是一个对象时，会合并多个相同属性的操作，以最后一次的为准
```js
this.setState({
    count: this.state.count + 2
})
this.setState({
    count: this.state.count + 1
})
```
上述操作，每次加1，而不是加2。
原因是每次 setState，由于生命周期不会变化，因此 state 还是旧值。
- 当传入一个函数时，不会合并
```js
this.setState((preState, props) => ({
    count: preState.count + 1
}))
this.setState((preState, props) => ({
    count: preState.count + 2
}))
```
- 当两种方式共存时候如果传入对象的是最后一个，合并操作，执行最后一个的操作，如果最后一个传入的是函数，则向前找到最后一个传入对象的，一起执行。

```js

this.setState((preState, props) => ({
    count: preState.count + 1
}))
this.setState((preState, props) => ({
    count: preState.count + 2
}))
// this.setState({
//     count: this.state.count + 2
// })
this.setState({
    count: this.state.count + 1
})
this.setState((preState, props) => ({
    count: preState.count + 2
}))
this.setState((preState, props) => ({
    count: preState.count + 3
}))
```
上述操作，每次加6
- setState 传入表达式也会合并

#### 生命周期
生命周期可以分为挂载、更新和销毁三个阶段
- 挂载阶段 CDM 只会执行一次
- 更新阶段
  - CWRP 组件接受新的 prop 时候被调用
  - static getDerivedStateFromProps(nextProps, prevState)
  - SCU
  - CDU 组件更新后执行
- 销毁阶段 CWU

#### 17 升级
- useEffect 清理操作由同步变成异步，清理的时候 react 会立即释放资源，不会阻塞 ui
- jsx 不能返回 undefined
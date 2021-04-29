import React from 'react';
import Robot from './components/Robot';
import mockData from './components/mockData.json';
import styles from './App.module.css';
import ShopCart from './components/ShopCart'

interface Props {}

interface State {
  robotList: any
}

class App extends React.Component<Props, State> {

  // public state = {
  //   robotList: []
  // }

  constructor(props: Props) {
    super(props)
    this.state = {
      robotList: []
    }
  }

  componentDidMount() {
    fetch("http://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => {
        this.setState({
          robotList: data
        })
      })
  }

  public render () {
    return (
      <div className={styles.app}>
        <ShopCart />
        <ul>
          {
            this.state.robotList.map(item => (
              <Robot key={item.id} id={item.id} name={item.name} />
            ))
          }
        </ul>
      </div>
    );
  }
  
}

export default App;

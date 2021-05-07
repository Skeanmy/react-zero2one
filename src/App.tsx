import React, { useState, useEffect } from 'react';
import Robot from './components/Robot';
import styles from './App.module.css';
import ShopCart from './components/ShopCart'

interface Props {}

const App: React.FC = () => {
  const [robotList, setList] = useState<any>([])

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://jsonplaceholder.typicode.com/users")
      const data = await res.json()
      setList(data)
    }
    fetchData()
  }, []);

  return (
    <div className={styles.app}>
      <ShopCart />
      <ul>
        {
          robotList.map(item => (
            <Robot key={item.id} id={item.id} name={item.name} />
          ))
        }
      </ul>
    </div>
  ); 
}
// class App extends React.Component<Props, State> {

//   // TODO: 这样写 state 就是 never 类型？
//   // public state = {
//   //   robotList: []
//   // }

//   constructor(props: Props) {
//     super(props)
//     this.state = {
//       robotList: []
//     }
//   }

//   componentDidMount() {
//     fetch("http://jsonplaceholder.typicode.com/users")
//       .then(res => res.json())
//       .then(data => {
//         this.setState({
//           robotList: data
//         })
//       })
//   }

//   public render () {
//     return (
//       <div className={styles.app}>
//         <ShopCart />
//         <ul>
//           {
//             this.state.robotList.map(item => (
//               <Robot key={item.id} id={item.id} name={item.name} />
//             ))
//           }
//         </ul>
//       </div>
//     );
//   }
// }

export default App;

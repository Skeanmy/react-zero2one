import React, {useContext} from 'react';
import {appContext} from '../AppState'
import {withAddToCart} from './AddToCart';

export interface IRobot {
    id: number,
    name: string,
    addToCart: (id, name) => void
}

const Robot: React.FC<IRobot> = ({id, name, addToCart}) => {

    const value = useContext(appContext)
    return (
        // <appContext.Consumer>
        //     {(value) => {
        //         return <li>{value.useName}--{props.name}</li>
        //     }}
        // </appContext.Consumer>
        <div>
            <span>{value.username}--{name}</span>
            <button onClick={() => addToCart(id, name)}>加入购物车</button>
        </div>
    )
};

export default withAddToCart(Robot);
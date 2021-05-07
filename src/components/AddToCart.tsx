import React, {useContext} from 'react';
import {appSetContext} from '../AppState'
import {IRobot} from './Robot'

export const withAddToCart = (ChildComp: React.ComponentType<IRobot>) => {
    // return class extend React.Component {}
    return (props) => {
        const setState = useContext(appSetContext)
        const addToCart = (id, name) => {
            if (setState) {
                setState(state => {
                    return {
                        ...state,
                        shopCart: {
                            items: [...state.shopCart.items, {
                                id,
                                name
                            }]
                        }
                    }
                })
            }
        }
        return <ChildComp {...props} addToCart={addToCart} />
    }
}

export const useAddToCart = () => {
    const setState = useContext(appSetContext)
    const addToCart = (id, name) => {
        if (setState) {
            setState(state => {
                return {
                    ...state,
                    shopCart: {
                        items: [...state.shopCart.items, {
                            id,
                            name
                        }]
                    }
                }
            })
        }
    }
    return addToCart
}
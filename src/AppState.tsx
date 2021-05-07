import React, { useState } from 'react';

interface IState {
    username: string;
    shopCart: {
        items: {
            id: number,
            name: string
        }[]
    }
}

const defaultContext: IState = {
    username: 'contextName',
    shopCart: {
        items: []
    }
}
  
export const appContext = React.createContext(defaultContext)
export const appSetContext = React.createContext<React.Dispatch<React.SetStateAction<IState>> | undefined>(undefined)

export const AppStateProvider: React.FC = ({children}) => {
    const [state, setState] = useState(defaultContext)
  
    return (
        <appContext.Provider value={state}>
            <appSetContext.Provider value={setState}>
                {children}
            </appSetContext.Provider>
        </appContext.Provider>
    )
}
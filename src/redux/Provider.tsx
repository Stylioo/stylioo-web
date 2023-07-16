'use client'

import { Provider } from 'react-redux'
import { store } from './store'

type providerTypes = {
    children: React.ReactNode
}

const ReduxProvider = ({ children }: providerTypes) => {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}

export default ReduxProvider


import React from 'react';
import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';


import { Provider } from 'react-redux'

import store from './Redux/store'

const App2 = () => {

    return (
        <Provider store={store}>
            <App />
        </Provider>
    )

}


AppRegistry.registerComponent(appName, () => App2);

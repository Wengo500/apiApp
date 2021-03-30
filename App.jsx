import React from 'react';
import store from './src/redux/store';
import {Provider} from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';

import Navigator from './src/navigation/Navigator';
import Main from './src/components/Main';
 
export default function App() {
  return (
    <Provider store={store}>
        <NavigationContainer>
           <Navigator/>
        </NavigationContainer>
    </Provider>
  );
}



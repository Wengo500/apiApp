import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'

import Main  from '../components/Main';
import CardScreen from "../components/CardScreen";


const Stack = createStackNavigator();

const Navigator = () => {
  
  return(
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Main} />
      <Stack.Screen 
        name="Card page" component={CardScreen} 
        options={({ route }) => ({ title: route.params.param.name })} 
      />
    </Stack.Navigator>
  )
}
     
export default Navigator;
import React from 'react';
import {Touchable, TouchableOpacity} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

import {Feather} from '@expo/vector-icons'

import Home from './pages/Home'
import Detail from './pages/Detail'

const Stack = createStackNavigator()

const Routes: React.FC = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Home} options={{headerShown: false}} />
        <Stack.Screen name='Detail' 
        component={Detail} 
        options={{headerTitle: 'Detalhes', headerRight: () => (
          <TouchableOpacity style={{marginRight: 15}}>
            <Feather name='shopping-cart' size={24} color='#000' />
          </TouchableOpacity>
        )}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes
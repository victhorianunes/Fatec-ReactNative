import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './src/pages/Home';
import Confirm from './src/pages/Confirm';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}
        />
        <Stack.Screen name="Confirm" component={Confirm}
          options={{
            title: 'Confirmação dos dados',
            headerStyle: {
              backgroundColor: '#6A8D73'
            },
            headerTintColor: '#FFF'
          }
          } />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

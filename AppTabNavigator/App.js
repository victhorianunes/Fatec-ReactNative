import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
 
import Pessoal from './src/pages/Pessoal';
import Formacao from './src/pages/Formacao';
import Habilidades from './src/pages/Habilidades';

 
const Tab = createBottomTabNavigator();
 
const icons = {
  Pessoal:{
    name: 'ios-person',
  },
  Habilidades:{
    name: 'md-pencil',
  },
  Formacao:{
    name: 'ios-school-sharp',
  }
}
 
export default function App(){
  return(
    <NavigationContainer>
      <Tab.Navigator
      screenOptions={ ({route}) => ({
        tabBarIcon: ({ color, size }) => {
          const { name } = icons[route.name];
          return <Icon name={name} color={color} size={size} />
        }
      }) }
      tabBarOptions={{
        style:{
          backgroundColor: '#2F323A'
        },
        activeTintColor: '#EE7B30'
      }}
      >
        <Tab.Screen name='Pessoal' component={Pessoal} />
        <Tab.Screen name='Formacao' component={Formacao} />
        <Tab.Screen name='Habilidades' component={Habilidades} />
      </Tab.Navigator>
    </NavigationContainer>

  )
}

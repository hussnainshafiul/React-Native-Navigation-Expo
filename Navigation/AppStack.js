import { View, Text } from 'react-native'
import React from 'react'

import LoginScreen from '../screens/LoginScreen';
import OnboardingScreen from '../screens/OnboardingScreen'
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen'
import MessagesScreen from '../screens/MessagesScreen'
import MomentsScreen from '../screens/MomentsScreen'
import SettingsScreen from '../screens/SettingsScreen'
import CustomDrawer from '../components/CustomDrawer';
import Ionicons from 'react-native-vector-icons/Ionicons'

import { createDrawerNavigator } from '@react-navigation/drawer';
import { color } from 'react-native-reanimated';
import TabNavigator from './TabNavigator';
const Drawer = createDrawerNavigator();
export default function AuthStack() {
  return (
    
      <Drawer.Navigator
      drawerContent={props => <CustomDrawer{...props} /> }
       screenOptions={{headerShown: false ,
       drawerActiveBackgroundColor: '#aa18ea',
       drawerActiveTintColor: '#fff',
       drawerInactiveTintColor: '#333',
        drawerLabelStyle:{marginLeft: -25, fontSize:15}}}>
        <Drawer.Screen component ={TabNavigator} name='Home'  
            options={{drawerIcon: ({color})=>(
               <Ionicons name='home-outline' size={22} color={color}/>
            )}}
        />
        <Drawer.Screen component ={ProfileScreen} name='Profile' 
         options={{drawerIcon: ({color})=>(
               <Ionicons name='person-outline' size={22} color={color}/>
            )}}  />
        <Drawer.Screen component ={MessagesScreen} name='Messages' 
         options={{drawerIcon: ({color})=>(
               <Ionicons name='chatbox-ellipses-outline' size={22} color={color}/>
            )}} />
        <Drawer.Screen component ={MomentsScreen} name='Moments'  
             options={{drawerIcon: ({color})=>(
               <Ionicons name='timer-outline' size={22} color={color}/>
            )}}
        />
        <Drawer.Screen component ={SettingsScreen} name='Setting' 
         options={{drawerIcon: ({color})=>(
               <Ionicons name='settings-outline' size={22} color={color}/>
            )}} />
      </Drawer.Navigator>

  )
}
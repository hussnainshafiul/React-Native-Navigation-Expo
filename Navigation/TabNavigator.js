import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import CartScreen from '../screens/CartScreen';
import FavouriteScreen from '../screens/FavouriteScreen';
const Tab = createBottomTabNavigator();
import Ionicons from 'react-native-vector-icons/Ionicons'
import Feather from 'react-native-vector-icons/Feather'
import GameDetailsScreen from '../screens/GameDetailsScreen';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();


const HomeStack= () => {
  return (
    
      <Stack.Navigator >
        <Stack.Screen component ={HomeScreen} name='Home'  
        options={{headerShown:false}} />
        <Stack.Screen component={GameDetailsScreen} name='GameDetails'
         options={({route}) => ({
          title: route.params?.title,
        })}
      />
    </Stack.Navigator>

  )
}

export default function TabNavigator() {
  return (
    <Tab.Navigator screenOptions={{headerShown:false, tabBarShowLabel: false,
    tabBarStyle : {backgroundColor: '#AD40AF'} ,
    tabBarInactiveTintColor: '#fff',
    tabBarActiveTintColor: 'yellow',

    
    }

    }
    
    >
       <Tab.Screen
        name="Home2"
        component={HomeStack}
        options={({route}) => ({
          tabBarStyle: {
            display: getTabBarVisibility(route),
            backgroundColor: '#AD40AF',
          },
          tabBarIcon: ({color, size}) => (
            <Ionicons name="home-outline" color={color} size={size} />
          ),
        })}
      />
        <Tab.Screen name='Cart' component={CartScreen}
            options={{
              tabBarBadge: 3,
              tabBarBadgeStyle: {backgroundColor:'yellow'},
              tabBarIcon:({color,size})=> (
          <Feather name='shopping-bag' color={color} size={size}/>
        ) }}
        />
        <Tab.Screen name='Favourite' component={FavouriteScreen}
          options={{tabBarIcon:({color,size})=> (
          <Ionicons name='heart-outline' color={color} size={size}/>
        ) }}
        />
    </Tab.Navigator>
  );
};

const getTabBarVisibility = (route) => {
  //console.log(route);
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Feed';
  //console.log(routeName);

  if (routeName == 'GameDetails') {
    return 'none';
  }
  return 'flex'
}
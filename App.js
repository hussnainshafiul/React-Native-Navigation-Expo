import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, SafeAreaView, TouchableOpacity, Image} from 'react-native';



import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import AuthStack from './Navigation/AuthStack';
import AppStack from './Navigation/AppStack'
const Stack = createNativeStackNavigator();

const App = () => {

  return (
    <NavigationContainer>
     <AppStack
     

     />
      
    </NavigationContainer>
  )

}


//const Home = () => {
  //return (
    /*<SafeAreaView
    style = {{
      flex: 1,
      justifyContent: 'center'
    }}>
 <View>
      <Text
      style = {
        {
          fontSize : 30,
          textAlign : 'center'
        }
      }
      >HomeScreen</Text>
    </View>
    </SafeAreaView>   )}
    */
   


export default App
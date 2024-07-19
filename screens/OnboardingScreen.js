import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, SafeAreaView, TouchableOpacity, Image, ImageBackground} from 'react-native';




import GamingImg from '../assets/gaming.svg';

const OnboardingScreen = ({navigation}) => {

  return (
    <SafeAreaView style= {
      {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
      }
    }>

      <View style= {{marginTop:35}}>
        <Text style={{
          fontSize: 30,
          fontWeight: 'bold',
          color: '#20315f',
          textAlign: 'center'
         
        

        }}>Gameon</Text>

        <View style={{flex: 1 , justifyContent: 'center',alignItems: 'center'}}>
          <GamingImg
          width= {320} 
          height={320}
          style = {{
            transform: [{rotate: '-10deg'}] ,
            justifyContent: 'center',
            alignItems : 'center'
          }}
          
        />
        </View>

        <TouchableOpacity
          onPress={ () => navigation.navigate('Login')}
           style={
          {
           backgroundColor: '#AD40AF',
           padding: 20,
           width: "90%",
           borderRadius: 5,
           flexDirection: 'row',
           justifyContent: 'space-between',
           alignItems: 'center',
           marginBottom: 50
           }}>
          <Text  style={
            {
              fontSize: 18,
              fontWeight: 'bold',
              color: 'white',
              textAlign :'center'
            

            }
          }>Let's Begin</Text>

          <ImageBackground
     
          resizeMode='contain'
          style={{
            width:25,
            height:25,
            marginLeft: 'auto',
          }}
          source={require('../arrow.png')}
            
          />
        </TouchableOpacity>
      </View>

    </SafeAreaView>
    
  );
}

export default OnboardingScreen
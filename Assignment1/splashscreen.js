import React,{ Component } from 'react';
import { AppRegistry, View, TextInput, SafeAreaView,StyleSheet,Image } from 'react-native'; 
export class SplashScreen extends Component
{
    
    render()
    {
        return(
            <View style={style.viewStyles}>
                <Image style={style.image} source={{uri : 'https://cdn.pixabay.com/photo/2016/08/25/07/30/red-1618916__340.png'}} />
            </View>
        );
    }
};

const style = StyleSheet.create({
    image: {
        height:200,
        width:200,
        borderRadius : 20,
        alignSelf : 'center'
      },
      viewStyles:
      {
          flex:1,
          alignSelf:'stretch',
          alignItems:'center',
          justifyContent:'center',
          borderRadius : 10
      }
});
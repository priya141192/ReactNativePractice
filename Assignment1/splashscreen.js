import React,{ Component } from 'react';
import { AppRegistry, View, TextInput, SafeAreaView,StyleSheet,Image } from 'react-native'; 
export class SplashScreen extends Component
{
    
    render()
    {
        return(
            <View style={style.viewStyles}>
                <Image style={style.image} source={require("./splashimage.jpg")} />
            </View>
        );
    }
};

const style = StyleSheet.create({
    image: {
        // height:600,
        // width:600
      },
      viewStyles:
      {
          flex:1,
          alignSelf:'stretch',
          alignItems:'center',
          justifyContent:'center'
      }
});
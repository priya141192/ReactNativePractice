import React,{ Component } from 'react';
import { AppRegistry, View, TextInput, SafeAreaView,StyleSheet,Image } from 'react-native'; 
export class SplashScreen extends Component
{
    
    render()
    {
        return(
            <View style={style.viewStyles}>
                <Image style={style.image} source={{uri : 'https://cdn.pixabay.com/photo/2018/07/31/00/20/canada-3573898__340.png'}} />
            </View>
        );
    }
};

const style = StyleSheet.create({
    image: {
        height:400,
        width:400,
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
import React,{ Component } from 'react';
import { AppRegistry, View, TextInput, SafeAreaView,StyleSheet,Image,Text,TouchableOpacity } from 'react-native'; 

export class WelcomePage extends Component
{
    render()
    {
        return(
            <SafeAreaView style = {styles.maincontainerStyle}>
                <View style = {styles.containerStyle}>
                    {/* <Text style = {styles.textStyle}>NeoSTORE</Text> */}
                    <Image style = {styles.logoimageStyle} source = {{uri : 'https://cdn.pixabay.com/photo/2016/08/25/07/30/red-1618916__340.png'}}></Image>
                    <View style = {styles.textinputcontainerStyle}>
                    <Image style = {styles.imageStyle} source = {require('./Resources/user.png')}></Image>
                        <TextInput style = {styles.textinputStyle} placeholder = 'Username' placeholderTextColor = 'white'></TextInput>
                    </View>
                    <View style = {styles.textinputcontainerStyle}>
                    <Image style = {styles.imageStyle} source = {{uri : 'https://www.iconsdb.com/icons/preview/white/padlock-3-xxl.png'}}></Image>
                        <TextInput style = {styles.textinputStyle}  placeholder = 'Password' placeholderTextColor = 'white'></TextInput>
                    </View>
                    <TouchableOpacity>
                        <Text style={{alignSelf:'flex-end', alignItems :'center',
                        justifyContent:'center',
                        color:'#e91b1a',
                        marginTop: 10,
                        marginRight : 20,
                        fontWeight : 'bold',
                        fontSize: 15}}>Forgot Password ?</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.buttonStyle}>
                    <Text style = {styles.buttontextStyle}>LOGIN</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={{alignSelf:'flex-end', alignItems :'center',marginBottom : 10,
                        justifyContent:'center',
                        color:'#e91b1a',
                        marginTop: 10,
                        marginRight : 20,
                        fontWeight : 'bold',
                        fontSize: 15}}>Don't have an account? Sign Up Now !!!</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create(
    {
        maincontainerStyle : {
            backgroundColor :'white',
            padding : 20,
            height : '100%',
            width : '100%'
        },
        containerStyle : {
            padding : 20,
        },
        textStyle : {
            color : 'white',
            fontStyle : 'normal',
            fontWeight : 'bold',
            fontSize : 50,
            justifyContent : 'center',
            alignSelf : 'center',
            alignItems : 'center'
        },
        textinputStyle : {
            flex :1,
            color : 'white',
            backgroundColor : '#e91b1a',
            borderColor :'white',
            borderRadius : 5,
            fontSize : 15,
            fontWeight : 'bold'
        },
        buttonStyle : {
            elevation : 20,
            backgroundColor : '#e91b1a',
            color :'white',
            borderRadius : 40,
            fontSize : 58,
            marginTop : 120,
            padding : 10,
            margin : 10
        },
        textinputcontainerStyle : {
            elevation : 10,
            flexDirection : 'row',
            borderColor :'white',
            padding : 10,
            borderRadius : 40,
            borderWidth : 2,
            justifyContent : 'center',
            flexDirection : 'row',
            backgroundColor : '#e91b1a',
            margin : 10
        },
        buttontextStyle : {
            color : 'white',
            backgroundColor : '#e91b1a',
            fontStyle : 'normal',
            fontWeight : 'bold',
            fontSize : 15,
            justifyContent : 'center',
            alignSelf : 'center',
            padding : 10
        },
        imageStyle: {
            padding: 10,
            margin: 10,
            marginBottom : 5,
            height: 25,
            width: 25,
            resizeMode: 'stretch',
            alignItems : 'center'
          },
          logoimageStyle: {
            height: 180,
            width: 180,
            margin : 10,
            resizeMode: 'center',
            alignItems : 'center',
            alignSelf : 'center',
            justifyContent : 'center'
          },
    }
)
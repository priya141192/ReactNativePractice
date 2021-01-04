import React,{ Component } from 'react';
import { AppRegistry, View, TextInput, SafeAreaView,StyleSheet,Image,Text,TouchableOpacity } from 'react-native'; 

export class WelcomePage extends Component
{
    render()
    {
        return(
            <SafeAreaView>
                <Text style = {{justifyContent:'center',fontSize:20,alignSelf:'center',margin:20}}>Welcome Screen</Text>
                <View style={styles.container}>
                    <View style = {styles.inputfieldscontainer}>
                        <View style = {styles.inputfieldsstyle}>
                            <Text style = {styles.textstyles}>Username</Text>
                            <TextInput style = {styles.textinputstyles}></TextInput>
                        </View>
                        <View style = {styles.inputfieldsstyle}>
                            <Text style = {styles.textstyles}>Password</Text>
                            <TextInput style = {styles.textinputstyles}></TextInput>
                        </View>
                    </View>
                
                <TouchableOpacity style={{alignSelf:'flex-end',marginRight:20}}>
                    <Text style={{alignSelf:'center',
                    justifyContent:'center',
                    color:'black',
                    marginTop: 10,
                    fontSize: 15}}>Forgot Password ?</Text>
                </TouchableOpacity>
                
                <View style={{flexDirection:'row',alignItems:'center'}}>
                <TouchableOpacity
                    activeOpacity={0.8}
                    style={styles.appButtonContainer}>
                    <Text >LOGIN</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    activeOpacity={0.8}
                    style={styles.appButtonContainer}>
                    <Text >SIGNUP</Text>
                </TouchableOpacity>
                </View>
                </View>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({

    container : {
        justifyContent : 'flex-start',
        alignItems:'center',
        height:'100%',
        padding:10,
    },
    textstyles : {
        color : 'black',
        fontSize : 15,
        alignSelf:'flex-start',
        padding : 5
    },
    textinputstyles : {
        color : 'black',
        fontSize : 15,
        alignSelf:'flex-start',
        borderWidth : 1,
        borderColor : 'black',
        marginLeft: 10,
        flex : 3,
        padding : 5
    },
    inputfieldscontainer : {
        borderStyle : 'solid',
        borderColor : 'black',
        borderWidth : 1,
        padding : 10,
        width : '90%',
    },
    inputfieldsstyle : {
        fontSize : 15,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        flexDirection : 'row',
        margin : 10,
    },
    appButtonContainer: {
        elevation: 1,
        borderColor: 'black',
        borderRadius:5,
        borderWidth: 1,
        marginTop:30,
        alignSelf:'center',
        height:'30%',
        width:'35%',
        marginRight:10,
        alignItems:'center',
        justifyContent:'center',
    },
});
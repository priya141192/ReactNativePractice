import React, { Component } from 'react'  
import {  
    View,StyleSheet,AppRegistry  
} from 'react-native' ;
import {WebView} from 'react-native-webview'  

  
export default class WebView1 extends Component {  
    render() {  
        return (  
        <View style = {styles.container}>  
            <WebView  
                source = {{ uri:'https://www.google.com' }}  
            />  
        </View>  
        )  
    }  
}  
const styles = StyleSheet.create({  
    container: {  
        flex: 1,  
    }  
})  
  
AppRegistry.registerComponent('App', () => ActivityIndicatorDemo)  
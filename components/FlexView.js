import React, { Component } from 'react';  
import { StyleSheet,View } from 'react-native';  
  
export class FlexView extends Component {  
    render() {  
        return (  
            <View style={styles.container}>  
                <View style={styles.powderblue} />  
                <View style={styles.skyblue} />  
                <View style={styles.steelblue} />  
            </View>  
        );  
    }  
}  
const styles = StyleSheet.create({  
    container:{  
        flex: 1,  
        flexDirection: 'column',// set elements horizontally, try column.  
        alignContent:'flex-start'
    },  
    powderblue:{  
        width: 60,  
        height: 60,  
        backgroundColor: 'pink',  
    },  
    skyblue:{  
        width: 60,  
        height: 60,  
        backgroundColor: 'skyblue',  
    },  
    steelblue:{  
        width: 60,  
        height: 60,  
        backgroundColor: 'steelblue',  
    }  
})  
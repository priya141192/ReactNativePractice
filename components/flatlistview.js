import React, { Component } from 'react';
import {
    FlatList,StyleSheet,Text,View,Alert
} from 'react-native';

export class FlatListView extends Component
{
    renderSeparator = () => {
        return(
            <View
            style={{height:1,backgroundColor:'black',width:'100%'}}></View>
        );
    };

    getListViewItem = (item) => {
        Alert.alert(item.key);
    }

    render(){
        return(
            <View style = {styles.container}>
                <FlatList 
                data = {[
                    {key:'Android'},{key:'Kotlin'},
                    {key:'Swift'},{key:'IOS'},{key:'Objective-C'}
                ]}
                
                renderItem = {({item}) =>
                <Text style={styles.item}
            onPress={this.getListViewItem.bind(this,item)}>{item.key}</Text>}
            ItemSeparatorComponent = {this.renderSeparator}
                ></FlatList>
            </View>
        );
    }
}

const styles = StyleSheet.create(
    {
        container :{
            flex : 1
        },
        item : {
            padding : 30,
            backgroundColor : 'yellow',
            fontSize:15,
            height : 44
        },
    }
);
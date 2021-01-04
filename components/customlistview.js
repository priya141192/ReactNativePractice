import React ,{ Component } from 'react';
import {
    View,Text,StyleSheet,Image, FlatList
} from 'react-native';
import CustomRow from './customrow';

const styles = StyleSheet.create({
    container : {
        flex : 1
    }
});

const CustomListView = ({itemList}) => {
    <View style = {styles.container}>
        <FlatList
        data = {itemList}
        renderItem = {({item}) => <CustomRow
        title = {item.title} 
        description = {item.description}
        image_url = {item.image_url} /> }/>

    </View>
};

export default CustomListView;


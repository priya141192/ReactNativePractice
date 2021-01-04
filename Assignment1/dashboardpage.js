import React,{ Component } from 'react';
import { AppRegistry, View, TextInput, SafeAreaView,StyleSheet,Image,Text,TouchableOpacity,Button } from 'react-native'; 

export class DashboardPage extends Component
{
    render()
    {
        return(
            <SafeAreaView>
               <View style={styles.firstcontainer}>
                    <Text style={styles.textstyles}>DASHBOARD</Text>
                    <View style={styles.dashboardcontainer}>
                        <TouchableOpacity
                            activeOpacity={0.8}
                            style={styles.dashboardButtonContainer}>
                            <Text>Profile</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            activeOpacity={0.8}
                            style={styles.dashboardButtonContainer}>
                            <Text>My Account</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.dashboardcontainer}>
                        <TouchableOpacity
                            activeOpacity={0.8}
                            style={styles.dashboardButtonContainer}>
                            <Text>My Orders</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            activeOpacity={0.8}
                            style={styles.dashboardButtonContainer}>
                            <Text>My Cart</Text>
                        </TouchableOpacity>
                    </View>
               </View>
               <View style={styles.secondcontainer}>
                <TouchableOpacity
                    activeOpacity={0.8}
                    style={styles.appButtonContainer}>
                    <Text>Home</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    activeOpacity={0.8}
                    style={styles.appButtonContainer}>
                    <Text>About Us</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    activeOpacity={0.8}
                    style={styles.appButtonContainer}>
                    <Text>Settings</Text>
                </TouchableOpacity>
               </View>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    firstcontainer : {
        justifyContent : 'flex-start',
        alignItems:'center',
        height:'85%',
        width : '100%'
    },
    secondcontainer : {
        justifyContent : 'flex-start',
        alignItems:'center',
        height:'15%',
        width : '100%',
        flexDirection:'row'
    },
    dashboardcontainer : {
        flex:1,
        justifyContent : 'flex-start',
        alignItems:'center',
        width : '100%',
        flexDirection:'row'
    },
    dashboardButtonContainer: {
        elevation: 1,
        borderRadius:5,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius:20,
        marginTop:30,
        alignSelf:'center',
        flex:1,
        height:'80%',
        padding:5,
        margin:5,
        alignItems:'center',
        justifyContent:'center'
    },
    appButtonContainer: {
        elevation: 1,
        borderColor: 'black',
        borderWidth: 1,
        marginTop:30,
        alignSelf:'center',
        height:'70%',
        width:'35%',
        alignItems:'center',
        justifyContent:'center'
    },
    textstyles : {
        color : 'black',
        fontSize : 15,
        padding : 20,
        alignSelf:'center',
    }
});
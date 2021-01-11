/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import { PasswordView } from './components/PasswordView';
import { ButtonView } from './components/ButtonView';
import { FlexView } from './components/FlexView';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Switch,
} from 'react-native';
import MapView from 'react-native-maps';  
import { Marker } from 'react-native-maps';  
import { FlatListView } from './components/flatlistview';
import { CustomListView } from './components/customlistview';
import UselessTextInputMultiline from './components/multilinetextinput';
import ActivityIndicatorDemo from './components/activityindicator';
import SwitchExample from './components/nativepicker';
import  SplashScreen  from './Assignment1/splashscreen';
import WelcomePage from './Assignment1/welcomepage';
import  DashboardPage  from './Assignment1/dashboardpage';
import SwitchView from './components/switchview';
import ProgressBarView from './components/progressbarview';
import ProgressBarView1 from './components/progressbarview1';
import WebView1 from './components/webview1';
import WebView2 from './components/webview2';
import { HomeScreen } from './components/homescreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const App = () =>{  
 
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="splashscreen">
        <Stack.Screen name="welcomepage"
        component={WelcomePage}
        options={{
          headerShown : false
        }}/>
        <Stack.Screen name="splashscreen"
        component={SplashScreen}
        options={{
          headerShown : false
        }}/>
        <Stack.Screen name="dashbaordpage"
        component={DashboardPage}
        options={{
          headerShown : false
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
  ); 
}  
  
const styles = StyleSheet.create({  
  MainContainer: {  
    position: 'absolute',  
    top: 0,  
    left: 0,  
    right: 0,  
    bottom: 0,  
    alignItems: 'center',  
    justifyContent: 'flex-end',  
  },  
  mapStyle: {  
    position: 'absolute',  
    top: 0,  
    left: 0,  
    right: 0,  
    bottom: 0,  
  },  
});  

export default App;







// import 'react-native-gesture-handler';

// import * as React from 'react';
// import { Button, View, Text } from 'react-native';

// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';

// import HomeScreen from './DBSession/HomeScreen';
// import NewContact from './DBSession/NewContact';
// import UpdateUser from './DBSession/UpdateUser';
// import ViewUser from './DBSession/ViewUser';
// import ViewAllUser from './DBSession/ViewAllUser';
// import DeleteUser from './DBSession/DeleteUser';

// const Stack = createStackNavigator();

// const App = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="HomeScreen">
//         <Stack.Screen
//           name="HomeScreen"
//           component={HomeScreen}
//           options={{
//             title: 'Home', //Set Header Title
//             headerStyle: {
//               backgroundColor: '#221eeb', //Set Header color
//             },
//             headerTintColor: '#fff', //Set Header text color
//             headerTitleStyle: {
//               fontWeight: 'bold', //Set Header text style
//             },
//           }}
//         />
//         <Stack.Screen
//           name="View"
//           component={ViewUser}
//           options={{
//             title: 'View User', //Set Header Title
//             headerStyle: {
//               backgroundColor: '#221eeb', //Set Header color
//             },
//             headerTintColor: '#fff', //Set Header text color
//             headerTitleStyle: {
//               fontWeight: 'bold', //Set Header text style
//             },
//           }}
//         />
//         <Stack.Screen
//           name="ViewAll"
//           component={ViewAllUser}
//           options={{
//             title: 'View Users', //Set Header Title
//             headerStyle: {
//               backgroundColor: '#221eeb', //Set Header color
//             },
//             headerTintColor: '#fff', //Set Header text color
//             headerTitleStyle: {
//               fontWeight: 'bold', //Set Header text style
//             },
//           }}
//         />
//         <Stack.Screen
//           name="Update"
//           component={UpdateUser}
//           options={{
//             title: 'Update User', //Set Header Title
//             headerStyle: {
//               backgroundColor: '#221eeb', //Set Header color
//             },
//             headerTintColor: '#fff', //Set Header text color
//             headerTitleStyle: {
//               fontWeight: 'bold', //Set Header text style
//             },
//           }}
//         />
//         <Stack.Screen
//           name="NewContact"
//           component={NewContact}
//           options={{
//             title: 'New Contact', //Set Header Title
//             headerStyle: {
//               backgroundColor: '#221eeb', //Set Header color
//             },
//             headerTintColor: '#fff', //Set Header text color
//             headerTitleStyle: {
//               fontWeight: 'bold', //Set Header text style
//             },
//           }}
//         />
//         <Stack.Screen
//           name="Delete"
//           component={DeleteUser}
//           options={{
//             title: 'Delete User', //Set Header Title
//             headerStyle: {
//               backgroundColor: '#221eeb', //Set Header color
//             },
//             headerTintColor: '#fff', //Set Header text color
//             headerTitleStyle: {
//               fontWeight: 'bold', //Set Header text style
//             },
//           }}
//         />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

//  export default App;


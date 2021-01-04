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
import { FlatListView } from './components/flatlistview';
import { CustomListView } from './components/customlistview';
import UselessTextInputMultiline from './components/multilinetextinput';
import ActivityIndicatorDemo from './components/activityindicator';
import SwitchExample from './components/nativepicker';
import { SplashScreen } from './Assignment1/splashscreen';
import { WelcomePage } from './Assignment1/welcomepage';
import { DashboardPage } from './Assignment1/dashboardpage';
import SwitchView from './components/switchview';
import ProgressBarView from './components/progressbarview';
import ProgressBarView1 from './components/progressbarview1';
import WebView1 from './components/webview1';
import WebView2 from './components/webview2';
import { HomeScreen } from './components/homescreen';

export default class App extends React.Component {  
  constructor(){  
      super();  
      this.state = {  
          ready: false,  
          where: {lat:null, lng:null},  
          error: null  
      }  
  }  
  componentDidMount(){  
      let geoOptions = {  
          enableHighAccuracy:false,  
          timeOut: 20000, //20 second  
        //  maximumAge: 1000 //1 second  
      };  
      this.setState({ready:false, error: null });  
      navigator.geolocation.getCurrentPosition( this.geoSuccess,  
          this.geoFailure,  
          geoOptions);  
  }  
  geoSuccess = (position) => {  
      console.log(position.coords.latitude);  

      this.setState({  
          ready:true,  
          where: {lat: position.coords.latitude,lng:position.coords.longitude }  
      })  
  }  
  geoFailure = (err) => {  
      this.setState({error: err.message});  
  }  
  render() {  
      return (  
          <View style={styles.container}>  
              { !this.state.ready && (  
                  <Text style={styles.big}>Using Geolocation in React Native.</Text>  
              )}  
              { this.state.error && (  
                  <Text style={styles.big}>Error: {this.state.error}</Text>  
              )}  
              { this.state.ready && (  
                  <Text style={styles.big}>  
                      Latitude: {this.state.where.lat}  
                      Longitude: {this.state.where.lng}  
                  </Text>  
              )}  
          </View>  
      );  
  }  
}  

const styles = StyleSheet.create({  
  container: {  
      flex: 1,  
      backgroundColor: '#fff',  
      alignItems: 'center',  
      justifyContent: 'center'  
  },  
  big: {  
      fontSize: 25  
  }  
});  

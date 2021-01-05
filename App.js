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
  render()
  {
      return(
        <DashboardPage/>
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

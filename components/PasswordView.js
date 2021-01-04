import React, {Component} from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StatusBar,
  } from 'react-native';

  export class PasswordView extends Component
  {
      state = {
        textstate : String,
        password : String,
        isPasswordVisisble : Boolean,
        toggletext : String
      };
      updatedState = () => this.setState({textstate:"This is update Statement"});
      constructor(props)
      {
          super(props);
          this.state = 
          {
              textstate :"Initial Statement",
              password :'',
              isPasswordVisisble : true,
              toggletext : 'Show Message'
          }

      }
      handletoggle = () =>
      {
        const {isPasswordVisisble} = this.state;
        if(isPasswordVisisble)
        {
            this.setState({isPasswordVisisble : false});
            this.setState({toggletext:'Hide Message'})
        }
        else{
            this.setState({isPasswordVisisble : true});
            this.setState({toggletext:'Show Message'})
        }
      };
      render()
      {
          return(
            <SafeAreaView>
                 <View>
                 <View style={{backgroundColor : 'blue',height:100}}/>
                    <Text style={{fontSize:20}} onPress={this.updatedState}>{this.state.textstate}</Text>
                    <TextInput secureTextEntry={this.state.isPasswordVisisble} style={{backgroundColor:'aqua',height:50,width:100,color:'red'}}></TextInput>
                    <TouchableOpacity onPress={this.handletoggle}>
                    <Text style={{fontSize:20}}>{this.state.toggletext}</Text>
                    </TouchableOpacity>
                 </View>
            </SafeAreaView>
          );
      }
  }

  const styles = StyleSheet.create(
      {
        container : {
            flex : 1,
            flexDirection : 'row',
            backgroundColor : 'yellow'
        }
      }
  );
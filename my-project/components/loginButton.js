import React, {Component} from 'react';
import { StyleSheet, Text, View , Image, TextInput } from 'react-native';
import { ThemeProvider ,Button } from 'react-native-elements';

class LoginButton extends Component {
    constructor(props) {
      super(props);
      this.state = { text: 'Login' };
    }
  
    render() {
      return (
        <Button
        title= {this.state.text}
        buttonStyle={{backgroundColor: '#d71a20', marginTop: 30}}
        />
        
        // <View style={[{ height: "90%",width: "90%", margin: 10, backgroundColor: "red" }]}>
        // <Button
        // //   onPress={this.buttonClickListener}
        //   title= {this.state.text}

        //   //Red TrendMicroColor
        //   color="#d71a20"
        // />
    //   </View>
      );
    }
  }

export default LoginButton;
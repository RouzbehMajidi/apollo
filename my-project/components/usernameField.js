import React, {Component} from 'react';
import { StyleSheet, Text, View , Image, TextInput } from 'react-native';

class UsernameField extends Component {
    constructor(props) {
      super(props);
      this.state = { text: '' };
    }
  
    render() {
      return (
        <View style={{flexDirection: 'row'}}>
          <Text>Username: </Text>
          <TextInput
            style={{width: '80%',height: 30, borderColor: 'gray', borderWidth: 1}}
            onChangeText={(text) => this.setState({text})}
            value={this.state.text}
          />
        </View>
      );
    }
  }

export default UsernameField;
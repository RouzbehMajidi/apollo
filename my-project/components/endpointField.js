import React, {Component} from 'react';
import { StyleSheet, Text, View , Image, TextInput } from 'react-native';
import { Input } from 'react-native-elements';

class EndpointField extends Component {
    constructor(props) {
      super(props);
      this.state = { text: '' };
    }
  
    render() {
      return (
        <View style={{width: '80%',flexDirection: 'row'}}>
          {/* <Text>Endpoint: </Text> */}
          {/* <TextInput
            style={{width: '80%',height: 30, borderColor: 'gray', borderWidth: 1}}
            onChangeText={(text) => this.setState({text})}
            value={this.state.text}
          /> */}
          <Input
          placeholder='Endpoint'
           />
        </View>
      );
    }
  }

export default EndpointField;
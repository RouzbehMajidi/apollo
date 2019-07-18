import React,{ Component} from 'react';
import { StyleSheet, Text, View , Image, TextInput } from 'react-native';
import {Button} from 'react-native-elements';
import UsernameField from './usernameField';
import PasswordField from './passwordField';
import EndpointField from './endpointField';
import TenantNameField from './tenantNameField';

let pic = {
    uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Trend-Micro-Logo.svg/1280px-Trend-Micro-Logo.svg.png'
};

class Login extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image source={pic} style={{marginTop: 100, marginBottom: 50, alignItems: 'stretch', width: 300, height: 100,}}/>
                <EndpointField />
                <TenantNameField />
                <UsernameField />
                <PasswordField />
                <Button title= "Login" onPress={this.props.handler} buttonStyle={{backgroundColor: '#d71a20', marginTop: 20}}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fbf7f5',
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
  });

export default Login;
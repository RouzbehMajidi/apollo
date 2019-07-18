import React,{ Component} from 'react';
import { StyleSheet, Text, View , Image, TextInput } from 'react-native';
import { Button, Input } from 'react-native-elements';
var api = require("../api.js");

let pic = {
    uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Trend-Micro-Logo.svg/1280px-Trend-Micro-Logo.svg.png'
};

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { username: null, password: null, endpoint: null, tenant: null };
    }

    handleLogin = () => {
        var endpoint = this.state.endpoint;
        var tenant = this.state.tenant;
        var username = this.state.username;
        var password = this.state.password;

        if( tenant == "" || username == "" || password == "") {
          return;
        }

        api.signIn(tenant,username,password).then(data => {
          this.props.handler(data.secretKey)
        });

//get api key goes here, callback below

                   
    }
    
    render() {
        return (
            <View style={styles.container}>
                <Image source={pic} style={{marginTop: 100, marginBottom: 50, alignItems: 'stretch', width: 300, height: 100,}}/>
                <View style={{width: '80%',flexDirection: 'row'}}>
                    <Input placeholder='Endpoint' value={this.state.endpoint}/>
                </View>
                <View style={{width: '80%',flexDirection: 'row'}}>
                    <Input placeholder='Tenant Name' value={this.state.tenant}/>
                </View>
                <View style={{width: '80%',flexDirection: 'row'}}>
                    <Input placeholder='Username' value={this.state.username}/>
                </View>
                <View style={{width: '80%',flexDirection: 'row'}}>
                    <Input placeholder='Password' secureTextEntry={true} value={this.state.password}/>
                </View>
                <Button title= "Login!" onPress={this.props.handler} buttonStyle={{backgroundColor: '#d71a20', marginTop: 20}}/>
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
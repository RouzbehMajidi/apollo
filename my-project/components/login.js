import React,{ Component} from 'react';
import { StyleSheet, Text, View , Image, TextInput, AsyncStorage, Button, Alert } from 'react-native';
import { Input } from 'react-native-elements';
var api = require("../api.js");

let pic = {
    uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Trend-Micro-Logo.svg/1280px-Trend-Micro-Logo.svg.png'
};

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            username: '', 
            password: '', 
            endpoint: '', 
            tenant: ''
        };
    }

    _handleLogin = () => {
        // try{

            api.signIn(this.state.tenant,this.state.username,this.state.password).then(value => {
                this.props.handler(value)
            });
            
            // .then(data => {
            //     if(typeof data == 'string'){
            //         this.props.handler(data)
            //     }
            //     else{
            //         Alert.alert("credentials failed")
            //     }
            // });  
        // }
        // catch(err){
        //     Alert.alert(err.data.message)
        // }
    }
    
    render() {
        return (
            <View style={styles.container}>
                <Image source={pic} style={{marginTop: 100, marginBottom: 50, alignItems: 'stretch', width: 300, height: 100,}}/>
                <View style={{width: '80%',flexDirection: 'row'}}>
                    <TextInput placeholder='Endpoint' value={this.state.endpoint}/>
                </View>
                <View style={{width: '80%',flexDirection: 'row'}}>
                    <TextInput placeholder='Tenant Name' onChangeText={(tenant) => this.setState({tenant: tenant})} value={this.state.tenant}/>
                </View>
                <View style={{width: '80%',flexDirection: 'row'}}>
                    <TextInput placeholder='Username' onChangeText={(username) => this.setState({username: username})} value={this.state.username}/>
                </View>
                <View style={{width: '80%',flexDirection: 'row'}}>
                    <TextInput placeholder='Password' secureTextEntry={true} onChangeText={(password) => this.setState({password: password})} value={this.state.password}/>
                </View>
                <Button title= "Login!" onPress={this._handleLogin} buttonStyle={{backgroundColor: '#d71a20'}}/>
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
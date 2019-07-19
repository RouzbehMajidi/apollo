import React,{ Component} from 'react';
import { StyleSheet, Text, View , Image, TextInput, AsyncStorage, Button, Alert } from 'react-native';
var api = require("../api.js");
// import { Input, Text } from 'react-native-elements';
import * as Font from 'expo-font';
import Icon from 'react-native-vector-icons/FontAwesome';

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
            tenant: '',
            frontLoaded: false
        };
    }

    async componentDidMount() {
        await Font.loadAsync({
          'overpass-regular': require('../assets/fonts/Overpass-Regular.ttf'),
        });
        this.setState({ fontLoaded: true });
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

    ProductTitle = () => {
        if(this.state.fontLoaded) {
            return (
                <Text style={{ fontFamily: 'overpass-regular', fontSize: 30 }}>Trend Micro Deep Security</Text>
            );
        }else{
            return (
                <Text style={{ fontSize: 30 }}>Trend Micro Deep Security</Text>
            );
        } 
    };
    
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.product}>
                    <View style={styles.productLogo}>
                        <Image source={require("../assets/trendmicro.png")} style={styles.image}/>
                    </View>
                    <this.ProductTitle/>
                </View>
                <TextInput style={styles.textInput} placeholder='Endpoint' value={this.state.endpoint}/>
                <TextInput style={styles.textInput} placeholder='Tenant Name' onChangeText={(tenant) => this.setState({tenant: tenant})} value={this.state.tenant}/>
                <TextInput style={styles.textInput} placeholder='Username' onChangeText={(username) => this.setState({username: username})} value={this.state.username}/>
                <TextInput style={styles.textInput} placeholder='Password' secureTextEntry={true} onChangeText={(password) => this.setState({password: password})} value={this.state.password}/>
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
    product:{
        marginTop: 50, 
        marginBottom: 30, 
        justifyContent: 'center',
        alignItems: 'center'
    },
    productLogo: {
        height: 150,
        width: 150
    },
    image: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'contain',
        marginBottom: 20
    },
    textInput: {
        width: '100%',
        flexDirection: 'row'
    }
  });

export default Login;
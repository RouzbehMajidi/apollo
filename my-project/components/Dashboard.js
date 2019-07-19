import React,{ Component} from 'react';
import { StyleSheet, Text, View , Image, TextInput, Alert } from 'react-native';
import {Button} from 'react-native-elements';
var api = require("../api.js");

class Dashboard extends Component {//use this.props.apiKey
    constructor(props) {
        super(props);
        this.state = {
            // apiKey: this.props.apiKey,
            computers: ''
        }
    }

    componentDidMount() {
        Alert.alert(this.props.apiKey)
        api.listComputers(this.props.apiKey).then((response) => {Alert.alert(response)});
      }

    render() {
        return (
            <View style={styles.container}>
                <Button title= "Logout" onPress={this.props.handler} buttonStyle={{backgroundColor: '#d71a20', marginTop:20}}/>
                <Text>{this.state.computers}</Text>
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
      marginTop: 30
    },

  });

export default Dashboard;
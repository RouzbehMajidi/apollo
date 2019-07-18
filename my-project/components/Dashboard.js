import React,{ Component} from 'react';
import { StyleSheet, Text, View , Image, TextInput } from 'react-native';
import {Button} from 'react-native-elements';

class Dashboard extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Button title= "Logout" onPress={this.props.handler} buttonStyle={{backgroundColor: '#d71a20', marginTop:20}}/>
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
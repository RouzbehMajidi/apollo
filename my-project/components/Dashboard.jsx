import React,{ Component} from 'react';
import { StyleSheet, Text, View , Image, TextInput } from 'react-native';

class Dashboard extends View {

    render() {
        return (
            <View style={styles.container}>
                <Image source={pic} style={{marginTop: 50, marginBottom: 50, alignItems: 'stretch', width: 300, height: 100,}}/>
                <UsernameField />
                <PasswordField />
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
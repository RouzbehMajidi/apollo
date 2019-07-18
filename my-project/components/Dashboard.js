import React,{ Component} from 'react';
import { StyleSheet, Text, View , Image, TextInput, SectionList } from 'react-native';
import {Button} from 'react-native-elements';

class Dashboard extends Component {

    render() {
        return (
            <View >
                <View style={styles.newContainer}>
                <SectionList
          sections={[
            {title: 'Name', data: ['ec2-34-211-54-73.us-west-2.compute.amazonaws.com']},
            // {title: 'Description', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie','Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie','Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
            {title: 'Description', data: ["This computer is a demonstration of Deep Security's capabilities. Open a browser to http://ec2-34-211-54-73.us-west-2.compute.amazonaws.com for more information."]},
            {title: 'Platform', data: ['Amazon Linux (64 bit) (4.14.62-65.117.amzn1.x86_64)']},
            {title: 'Policy', data: ['Demo']},
            {title: 'Status', data: ['[Yellow Circle] Security Update: Pattern Update on Agents/Appliances Failed']},
            {title: 'Maintenance', data: ['N/A']},
            {title: 'Send Policy Successful', data: ['3 Hours Ago']},
            
        
        
        
        
        ]}
          renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
          renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
          keyExtractor={(item, index) => index}
        />
        </View>
        <View>
                <Button title= "Logout" onPress={this.props.handler} buttonStyle={{backgroundColor: '#d71a20', marginTop:30, padding: 20}}/>
        </View>
            
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
      marginBottom: 30
    },
    newContainer: {
        marginTop: 40,
        alignItems: 'flex-start',
        backgroundColor: '#fbf7f5',
        marginBottom: 20,
    },
    sectionHeader: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        // backgroundColor: '#2196F3',
        borderColor: '#fbf7f5',
        borderWidth: 1,
        borderBottomColor: '#d71a20',
        paddingTop: 2,
        paddingLeft: 10,
        paddingBottom: 2,
        paddingRight: '25%',
        fontSize: 20,
        fontWeight: 'bold',
        // backgroundColor: 'rgba(0,255,255,1.0)',
      },
      item: {
        padding: 10,
        // marginBottom: 25,
        marginRight: '85%',
        fontSize: 14,
        
        width: '125%',
      },

  });

export default Dashboard;
import React,{ Component} from 'react';
import { StyleSheet, Text, View , Image, TextInput, SectionList } from 'react-native';
import {Button, ListItem} from 'react-native-elements';

list = [
  {
    name: 'Name',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'one'
  },
  {
    name: 'Description',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'two'
  },
  {
    name: 'Platform',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'two'
  },
  {
    name: 'Policy',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'two'
  },
  {
    name: 'Status',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'two'
  },
  {
    name: 'Maintenance',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'two'
  },
  {
    name: 'Send Policy Successful',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'two'
  },

]

// const list = this.props.computer


class Description extends Component {
    constructor(props) {
        super(props);
        // this.state = { username: null, password: null, endpoint: null, tenant: null };
        // this.list = this.props.computer;
    }

    // list[0]["subtitle"] = this.props.computer.name;

    render() {
        // list[0]["subtitle"] = this.props.computer.name;
        // list[1]["subtitle"] = this.props.computer.subtitle;

        list[0]["subtitle"] = this.props.computer.hostName;
        list[1]["subtitle"] = this.props.computer.description;
        list[2]["subtitle"] = this.props.computer.platform;
        list[3]["subtitle"] = this.props.computer.policyID;
        list[4]["subtitle"] = this.props.computer.agentStatus + " " + this.props.computer.agentStatusMessages;
        list[5]["subtitle"] = this.props.computer.maintenance;
        list[6]["subtitle"] = this.props.computer.lastSendPolicySuccess;
        return (
            <View >
              <View style={styles.newContainer}>
                {
                  list.map((l, i) => (
                    <ListItem
                      // leftAvatar={{ source: { uri: l.avatar_url } }}
                    //   leftAvatar={{source: require('../assets/warning/warning.png')}}
                      title={l.name}
                      subtitle={l.subtitle}
                      onPress={() => alert(this.props.computer.name)}
                      bottomDivider={true}
                    />
                  ))
                }
            </View>
        <View>
            <Button title= "Back" onPress={this.props.handler} buttonStyle={{backgroundColor: '#d71a20', marginTop:15, padding: 20}}/>
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
        borderBottomColor: '#d71a20',
        borderBottomWidth: 1,
        // alignItems: 'flex-start',
        // backgroundColor: '#fbf7f5',
        // marginBottom: 20,
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

export default Description;
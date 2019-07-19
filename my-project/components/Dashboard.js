import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TextInput, Alert, SectionList } from 'react-native';
import { Button, ListItem } from 'react-native-elements';
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
        // Alert.alert(this.props.apiKey)
        api.listComputers(this.props.apiKey).then((response) => { Alert.alert(response) });
    }

    render() {
        return (

            <View >
                <View style={styles.newContainer}>


                    {
                        list1.map((l, i) => (

                            <ListItem
                                key={i}
                                // leftAvatar={{source: require( `../assets/${l.agentStatus}/${l.agentStatus}.png` )}}
                                leftAvatar={{ source: require("../assets/managed/managed.png") }}
                                // leftAvatar={{source: require( l.agentStatusIcon )}}  

                                title={l.hostName}
                                subtitle={l.platform}
                                onPress={l => this.props.descriptionHandler(list1[i])}
                                bottomDivider={true}
                            />
                        ))
                    }
                </View>
                <View>
                    <Button title="Logout" onPress={this.props.handler} buttonStyle={{ backgroundColor: '#d71a20', marginTop: 20 }} />
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

export default Dashboard;
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Login from "./components/login";
import Dashboard from "./components/Dashboard";

export default function App() {

  return (
    <PageSwapper></PageSwapper>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fbf7f5',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});

class PageSwapper extends React.Component {
  constructor(props) {
    super(props)
    this.handler = this.handler.bind(this)
    this.logoutHandler = this.logoutHandler.bind(this)
    this.state = {currentPage: "login", apiKey: null}
  }

  handler(apiKey) {
    this.setState({
      apiKey: apiKey,
      currentPage: "dashboard"
    });
  }

  logoutHandler() {
    this.setState({
      currentPage: "login"
    });
  }

  render() {
    var content = {}
    if(this.state.currentPage == "login"){
      content = <Login handler={this.handler}></Login>
    }
    else if(this.state.currentPage == "dashboard"){
      content = <Dashboard handler={this.logoutHandler}></Dashboard>
    }
    return <View style={styles.container}>
      {content}
    </View>
  }
}
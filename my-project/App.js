import React from 'react';
import { StyleSheet, Text, View, Button, AsyncStorage, Alert } from 'react-native';
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
    alignItems: 'center',
    justifyContent: 'center',
  },
});

class PageSwapper extends React.Component {
  constructor(props) {
    super(props)
    this.loginHandler = this.loginHandler.bind(this)
    this.logoutHandler = this.logoutHandler.bind(this)
    this.state = { 
      apiKey: ''
    }
  }

  // componentDidMount() {
  //   AsyncStorage.getItem("apiKey", (errs,result) => {
  //     if (!errs) {
  //         if (result !== null) {
  //             this.setState({apiKey: result});
  //         }
  //      }
  // })
  // }

  loginHandler(apiKey) {
    // AsyncStorage.setItem("apiKey",apiKey, () => {
      this.setState({
        "apiKey": apiKey
      });
    // });
  }

  logoutHandler() {
    // AsyncStorage.removeItem("apiKey", () => {
      this.setState({
        "apiKey": ''
      });
    // });
  }


  render() {
    var content = {}
    if (this.state.apiKey) {
      content = <Dashboard handler={this.logoutHandler} apiKey={this.state.apiKey}></Dashboard>
    }
    else{
      content = <Login handler={this.loginHandler}></Login>
    }
    return <View style={styles.container}>
      {content}
    </View>
  }
}
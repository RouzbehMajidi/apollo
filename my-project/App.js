import React, {Component} from 'react';
import { StyleSheet, Text, View , Image, TextInput } from 'react-native';

// class Greeting extends Component {
//   render() {
//     return (
//       <View style={{alignItems: 'stretch'}}>
//         <Text>Hello {this.props.name}!</Text>
//       </View>
//     );
//   }
// }

class Username extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }

  render() {
    return (
      <View style={{flexDirection: 'row'}}>
        <Text>Username: </Text>
        <TextInput
          style={{width: '80%',height: 30, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
        />
      </View>
    );
  }
}

class Password extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }

  render() {
    return (
      <View style={{flexDirection: 'row'}}>
        <Text>Password: </Text>
        <TextInput
          style={{width: '80%',height: 30, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
        />
      </View>
    );
  }
}


export default function App() {

  let pic = {
    uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Trend-Micro-Logo.svg/1280px-Trend-Micro-Logo.svg.png'
    
  };

  return (
    <View style={styles.container}>
      {/* <Text>BRUHHHHHHH IT WORKS!!!</Text> */}
      <Image source={pic} style={{marginTop: 50, marginBottom: 50, alignItems: 'stretch', width: 300, height: 100,}}/>
      {/* <Greeting name='Rouzbeh' />
      <Greeting name='Alex' />
      <Greeting name='Guilluame' /> */}
      <Username />
      <Password />
    </View>
  );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fbf7f5',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});

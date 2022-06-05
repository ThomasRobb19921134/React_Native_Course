import PresentationalComponent from './PresentationalComponent';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import List from './List.js'

export default class App extends React.Component {
  state = {
    myState: 'Lorem ipsum dolor site amet'
  }
  updateState = () => this.setState ({
    myState: 'The State is updated'
  })
  render(){
    return (
      <View>
        <PresentationalComponent myState = {this.state.myState} updateState = {this.updateState}/>
        <List/>
      </View>
    );
  }
}

const styles = StyleSheet.create ({
  container: {
    margin: 19
  },
  text: {
    color: 'red'
  }
})

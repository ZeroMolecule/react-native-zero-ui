import React from 'react';
import { StyleSheet } from 'react-native';
import { Button, Input, Text, View } from 'react-native-zero-ui';

export default class App extends React.Component {
  render() {
    return (
      <View styleName="flex center padding-horizontal-l padding-vertical">
        <Text styleName="h5 center">Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
        <Input placeholder="popuši ga"/>
        <Button title="E ne budem!"/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

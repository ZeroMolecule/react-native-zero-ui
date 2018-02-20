import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-zero-ui';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text styleName="h2 center">Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
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

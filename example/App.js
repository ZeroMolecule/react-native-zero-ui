import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Touchable } from 'react-native-zero-ui';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Touchable style={{
          backgroundColor: 'red',
          padding: 100,
        }}
        >
          <Text>Probaj</Text>
        </Touchable>
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

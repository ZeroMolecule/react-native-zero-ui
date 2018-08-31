import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Theme } from 'react-native-zero-ui';

const theme = {
  '.zero.ui.Button': {
    '#titleStyle': { color: 'yellow' },
    '.primary': {
      backgroundColor: 'cyan',
      borderRadius: 4,
      '#titleStyle': {
        fontSize: 20,
      },
    },
    '.secondary': {
      backgroundColor: 'transparent',
      '#titleStyle': { color: 'red' },
    },
  },
};

export default class App extends React.Component {
  render() {
    return (
      <Theme.Provider value={theme}>
        <View style={styles.container}>
          <Text>Open up App.js to start working on your app!</Text>
          <Button
            className="primary"
            onPress={() => null}
            title="Đe si"
          />
        </View>
      </Theme.Provider>
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

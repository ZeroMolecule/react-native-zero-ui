import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Theme } from 'react-native-zero-ui';

const theme = {
  '#Button': {
    _titleStyle: { color: 'yellow' },
    backgroundColor: 'red',
  },
};

export default class App extends React.Component {
  render() {
    return (
      <Theme.Provider value={theme}>
        <View style={styles.container}>
          <Text>Open up App.js to start working on your app!</Text>
          <Button
            onPress={() => null}
            title="Đe si"
          />
          <Button
            style={{
              margin: 24,
              width: '90%',
              backgroundColor: 'magenta',
              borderRadius: 2,
            }}
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

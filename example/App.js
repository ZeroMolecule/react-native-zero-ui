import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, ImageButton, Theme } from 'react-native-zero-ui';

const theme = {
  '#Button': {
    _titleStyle: { color: 'yellow' },
    backgroundColor: 'red',
  },
};

const icon = { uri: 'https://image.flaticon.com/icons/png/128/126/126471.png' };

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
            mode="highlight"
            style={{
              margin: 24,
              width: '90%',
              backgroundColor: 'magenta',
              borderRadius: 2,
            }}
            onPress={() => null}
            title="Đe si"
          />
          <View style={{
            width: '70%',
            height: 200,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            <ImageButton
              onPress={() => alert('kifla')}
              source={icon}
            />
          </View>
        </View>
      </Theme.Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#afa',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

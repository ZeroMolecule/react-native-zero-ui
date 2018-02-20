import React from 'react';
import { Button, Input, Text, View } from 'react-native-zero-ui';

const styles = {
  spacingVertical: {
    marginVertical: 18
  },
  spacingVerticalBig: {
    marginVertical: 32,
  }
};
export default class App extends React.Component {
  render() {
    return (
      <View styleName="flex center padding-horizontal-l padding-vertical">
        <Text style={styles.spacingVertical} styleName="h5 center">Open up App.js to start working
          on your app!</Text>
        <Text styleName="center" style={styles.spacingVertical}>Changes you make will automatically
          reload.</Text>
        <Text styleName="center" style={styles.spacingVertical}>Shake your phone to open the
          developer menu.</Text>
        <Input styleName="center" style={styles.spacingVerticalBig}
               placeholder="Write something here"/>
        <Button styleName="round fill " title="E ne budem!"/>
      </View>
    );
  }
}

import React from 'react';
import { Button, Text, TextInput, View } from 'react-native-zero-ui';
import StyleProvider from '@shoutem/theme/src/StyleProvider';

const style = {
  'zero.ui.Text': {
    defaultProps: {
      selectable: true,
    },
  },
};

const styles = {
  spacingVertical: {
    marginVertical: 18,
  },
  spacingVerticalBig: {
    marginVertical: 32,
  },
};
export default class App extends React.Component {
  render() {
    return (
      <StyleProvider style={style}>
        <View animation="bounceIn" styleName="flex center padding-horizontal-l padding-vertical">
          <Text
            style={styles.spacingVertical}
            styleName="h5 center"
          >
            Open up App.js to start working
            on your app!
          </Text>
          <Text animation="slideInRight" styleName="center" style={styles.spacingVertical}>Changes
            you make will
            automatically
            reload.
          </Text>
          <Text animation="slideInLeft" styleName="center" style={styles.spacingVertical}>Shake your
            phone to open the
            developer menu.
          </Text>
          <View styleName="fill-width">
            <TextInput
              style={styles.spacingVerticalBig}
              placeholder="Write something here"
            />
          </View>
          <Button
            animation="fadeInDown"
            styleName="round fill"
            title="E ne budem!"
            onPress={() => alert('Press')}
          />
        </View>
      </StyleProvider>
    );
  }
}

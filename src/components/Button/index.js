// @flow
import React, { PureComponent } from 'react';
import { StyleSheet, Text, Vibration } from 'react-native';
import Touchable from '../Touchable';
import styles from './styles';
import type { Style } from '../../types';
import withTheme from '../../styling/Theme/withTheme';


type Props = {
  onPress: () => void,
  title: string,
  titleStyle?: Style,
  style?: Style,
  hapticDuration?: number,
}

class Button extends PureComponent<Props> {
  static defaultProps = {
    titleStyle: null,
    style: null,
    hapticDuration: 60,
  };

  onPress = () => {
    const { onPress, hapticDuration } = this.props;
    Vibration.vibrate(hapticDuration);
    onPress();
  };

  render() {
    const {
      title,
      titleStyle,
      style,
      ...props
    } = this.props;
    return (
      <Touchable
        {...props}
        onPress={this.onPress}
        style={StyleSheet.flatten([styles.button, style])}
      >
        <Text style={StyleSheet.flatten([styles.title, titleStyle])}>
          {title}
        </Text>
      </Touchable>
    );
  }
}

export default withTheme('zero.ui.Button')(Button);

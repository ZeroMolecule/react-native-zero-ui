import React from 'react';
import { TextInput } from 'react-native';
import { connectStyle } from '@shoutem/theme';
import styles from './Input.style';

class ZeroInput extends TextInput {

}

ZeroInput.defaultProps = {
  ...ZeroInput.defaultProps,
  autoCorrect: false,
  underlineColorAndroid: 'transparent',
};

export default connectStyle('zero.ui.Input', styles)(ZeroInput);

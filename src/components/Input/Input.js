import React from 'react';
import { TextInput } from 'react-native';
import { connectStyle } from '@shoutem/theme';
import styles from './Input.style';

const ZeroInput = props => (
  <TextInput
    autoCorrect={false}
    underlineColorAndroid="transparent"
    {...props}
  />
);

const StyledInput = connectStyle('zero.ui.Input', styles)(ZeroInput);

export default StyledInput;

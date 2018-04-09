import React from 'react';
import { TextInput } from 'react-native';
import { connectStyle } from '@shoutem/theme';
import styles from './Input.style';
import ViewPropTypes from '../../config/ViewPropTypes';

const ZeroInput = ({ style = {}, ...props }) => {
  const { defaultProps, ...restStyle } = style;
  return (
    <TextInput
      autoCorrect={false}
      underlineColorAndroid="transparent"
      {...defaultProps}
      {...props}
      style={restStyle}
    />
  );
};
ZeroInput.propTypes = {
  style: ViewPropTypes.style,
};
ZeroInput.defaultProps = {
  style: {},
};

const StyledInput = connectStyle('zero.ui.Input', styles)(ZeroInput);
export default StyledInput;

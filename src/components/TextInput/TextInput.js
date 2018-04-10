import React from 'react';
import PropTypes from 'prop-types';
import { TextInput } from 'react-native';
import { connectStyle } from '@shoutem/theme';
import styles from './TextInput.style';

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
  style: PropTypes.object,
};
ZeroInput.defaultProps = {
  style: {},
};

const StyledInput = connectStyle('zero.ui.TextInput', styles)(ZeroInput);
export default StyledInput;

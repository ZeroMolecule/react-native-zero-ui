import React from 'react';
import { Text } from 'react-native';
import { connectStyle } from '@shoutem/theme';
import styles from './Text.style';

const ZeroText = ({ style = {}, ...props }) => {
  const { defaultProps, ...restStyle } = style;
  return (
    <Text
      {...defaultProps}
      {...props}
      style={restStyle}
    />
  );
};

const StyledText = connectStyle('zero.ui.Text', styles)(ZeroText);

export default StyledText;

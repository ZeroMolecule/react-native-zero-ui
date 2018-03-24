import React from 'react';
import { connectStyle } from '@shoutem/theme/index';
import { View } from 'react-native';
import styles from './View.style';

const ZeroView = ({ style = {}, ...props }) => {
  const { defaultProps, ...restStyle } = style;
  return (
    <View
      {...defaultProps}
      {...props}
      style={restStyle}
    />
  );
};

const StyledView = connectStyle('zero.ui.View', styles)(ZeroView);

export default StyledView;

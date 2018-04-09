import React from 'react';
import { Text } from 'react-native';
import { connectStyle } from '@shoutem/theme';
import styles from './Text.style';
import ViewPropTypes from '../../config/ViewPropTypes';

const ZeroText = ({ style, ...props }) => {
  const { defaultProps, ...restStyle } = style;
  return (
    <Text
      {...defaultProps}
      {...props}
      style={restStyle}
    />
  );
};
ZeroText.propTypes = {
  style: ViewPropTypes.style,
};
ZeroText.defaultProps = {
  style: {},
};

const StyledText = connectStyle('zero.ui.Text', styles)(ZeroText);
export default StyledText;

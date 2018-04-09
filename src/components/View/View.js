import React from 'react';
import { connectStyle } from '@shoutem/theme/index';
import { View } from 'react-native';
import styles from './View.style';
import ViewPropTypes from '../../config/ViewPropTypes';

const ZeroView = ({ style, ...props }) => {
  const { defaultProps, ...restStyle } = style;
  return (
    <View
      {...defaultProps}
      {...props}
      style={restStyle}
    />
  );
};
ZeroView.propTypes = {
  style: ViewPropTypes.style,
};
ZeroView.defaultProps = {
  style: {},
};

const StyledView = connectStyle('zero.ui.View', styles)(ZeroView);
export default StyledView;

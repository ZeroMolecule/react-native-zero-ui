import React from 'react';
import { connectStyle } from '@shoutem/theme';
import styles from './Button.style';
import ButtonCore from './ButtonCore/ButtonCore';
import ViewPropTypes from '../../config/ViewPropTypes';

const ZeroButton = ({ style, ...props }) => {
  const { defaultProps, ...restStyle } = style;
  return (
    <ButtonCore
      {...defaultProps}
      {...restStyle}
      {...props}
    />
  );
};
ZeroButton.propTypes = {
  style: ViewPropTypes.style,
};
ZeroButton.defaultProps = {
  style: {},
};

const StyledButton = connectStyle('zero.ui.Button', styles)(ZeroButton);
export default StyledButton;

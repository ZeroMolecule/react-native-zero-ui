import PropTypes from 'prop-types';
import React from 'react';
import { connectStyle } from '@shoutem/theme';
import styles from './Button.style';
import ButtonCore from './ButtonCore/ButtonCore';

const ZeroButton = ({ style, ...props }) => {
  const { defaultProps = {}, ...restStyle } = style;
  const obj = {
    ...restStyle,
    ...defaultProps,
    ...props,
  };
  return (
    <ButtonCore
      {...obj}
      style={undefined}
    />
  );
};
ZeroButton.propTypes = {
  style: PropTypes.object,
};
ZeroButton.defaultProps = {
  style: {},
};

const StyledButton = connectStyle('zero.ui.Button', styles)(ZeroButton);
export default StyledButton;


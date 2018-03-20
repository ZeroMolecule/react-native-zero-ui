import React from 'react';
import { Button } from 'react-native-elements';
import { connectStyle } from '@shoutem/theme';
import styles from './Button.style';

const ZeroButton = ({ style, ...props }) => (
  <Button
    {...style}
    {...props}
  />
);

const StyledButton = connectStyle('zero.ui.Button', styles)(ZeroButton);

export default StyledButton;

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { TextInput } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { connectStyle } from '@shoutem/theme';
import styles from './TextInput.style';

const AnimatedInput = Animatable.createAnimatableComponent(TextInput);

class ZeroInput extends PureComponent {
  render() {
    const { style, ...props } = this.props;
    const { defaultProps, ...restStyle } = style;
    return (
      <AnimatedInput
        autoCorrect={false}
        underlineColorAndroid="transparent"
        {...defaultProps}
        {...props}
        style={restStyle}
      />
    );
  }
}

ZeroInput.propTypes = {
  style: PropTypes.object,
};
ZeroInput.defaultProps = {
  style: {},
};

const StyledInput = connectStyle('zero.ui.TextInput', styles)(ZeroInput);
export default StyledInput;

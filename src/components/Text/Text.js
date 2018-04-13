import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { Text } from 'react-native-animatable';
import { connectStyle } from '@shoutem/theme';
import styles from './Text.style';


class ZeroText extends PureComponent {
  render() {
    const { style, ...props } = this.props;
    const { defaultProps, ...restStyle } = style;
    return (
      <Text
        {...defaultProps}
        {...props}
        style={restStyle}
      />
    );
  }
}

ZeroText.propTypes = {
  style: PropTypes.object,
};
ZeroText.defaultProps = {
  style: {},
};

const StyledText = connectStyle('zero.ui.Text', styles)(ZeroText);
export default StyledText;

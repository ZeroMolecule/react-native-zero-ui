import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { connectStyle } from '@shoutem/theme/index';
import { View } from 'react-native-animatable';
import styles from './View.style';

class ZeroView extends PureComponent {
  render() {
    const { style, ...props } = this.props;
    const { defaultProps, ...restStyle } = style;
    return (
      <View
        {...defaultProps}
        {...props}
        style={restStyle}
      />
    );
  }
}

ZeroView.propTypes = {
  style: PropTypes.object,
};
ZeroView.defaultProps = {
  style: {},
};

const StyledView = connectStyle('zero.ui.View', styles)(ZeroView);
export default StyledView;

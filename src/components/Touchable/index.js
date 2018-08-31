// @flow
import React, { PureComponent } from 'react';
import {
  Platform,
  TouchableNativeFeedback,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import type { SingleChild, Style } from '../../types';

type Props = {
  children: SingleChild,
  style?: ?Style,
  foreground?: any,
  background?: any,
  fallback?: any, // todo set component type
};

/**
 * Select TouchableComponent once on start
 */
let TouchableComponent;
if (Platform.OS === 'android') {
  TouchableComponent = Platform.Version <= 20 ? TouchableOpacity : TouchableNativeFeedback;
} else {
  TouchableComponent = TouchableOpacity;
}
let {
  SelectableBackground,
  SelectableBackgroundBorderless,
  Ripple,
  canUseNativeForeground,
} = TouchableNativeFeedback;
if (TouchableComponent !== TouchableNativeFeedback) {
  SelectableBackground = () => ({});
  SelectableBackgroundBorderless = () => ({});
  Ripple = () => ({});
  canUseNativeForeground = () => false;
}

export default class Touchable extends PureComponent<Props> {
  static defaultProps = {
    style: null,
    foreground: SelectableBackgroundBorderless(),
    background: null,
    fallback: null,
  };
  static SelectableBackground = SelectableBackground;
  static SelectableBackgroundBorderless = SelectableBackgroundBorderless;
  static Ripple = Ripple;
  static canUseNativeForeground = canUseNativeForeground;

  render() {
    const {
      children,
      style,
      foreground,
      background,
      fallback,
      ...props
    } = this.props;
    if (TouchableComponent === TouchableNativeFeedback) {
      const shouldUseForeground = foreground && TouchableNativeFeedback.canUseNativeForeground();
      if (shouldUseForeground && background) {
        console.warn('Specified foreground and background for Touchable, only one can be used at a time. Defaulted to foreground.');
      }
      return (
        <TouchableNativeFeedback
          {...props}
          useForeground={shouldUseForeground}
          background={(shouldUseForeground && foreground) || background}
        >
          <View style={style}>
            {children}
          </View>
        </TouchableNativeFeedback>
      );
    }
    if (TouchableComponent === TouchableWithoutFeedback) {
      return (
        <TouchableWithoutFeedback {...props}>
          <View style={style}>
            {children}
          </View>
        </TouchableWithoutFeedback>
      );
    }
    const TouchableFallback = fallback || TouchableComponent;
    return (
      <TouchableFallback {...props} style={style}>
        {children}
      </TouchableFallback>
    );
  }
}

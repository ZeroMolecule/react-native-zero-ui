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
  useForeground?: boolean,
};

let TouchableComponent;

if (Platform.OS === 'android') {
  TouchableComponent =
    Platform.Version <= 20 ? TouchableOpacity : TouchableNativeFeedback;
} else {
  TouchableComponent = TouchableOpacity;
}

if (TouchableComponent !== TouchableNativeFeedback) {
  TouchableComponent.SelectableBackground = () => ({});
  TouchableComponent.SelectableBackgroundBorderless = () => ({});
  TouchableComponent.Ripple = () => ({});
  TouchableComponent.canUseNativeForeground = () => false;
}

export default class Touchable extends PureComponent<Props> {
  static SelectableBackground = TouchableComponent.SelectableBackground;
  static SelectableBackgroundBorderless = TouchableComponent.SelectableBackgroundBorderless;
  static Ripple = TouchableComponent.Ripple;
  static canUseNativeForeground = TouchableComponent.canUseNativeForeground;

  render() {
    const {
      children,
      style,
      foreground,
      background,
      useForeground,
      ...props
    } = this.props;
    if (TouchableComponent === TouchableNativeFeedback) {
      const shouldUseForeground =
        foreground && TouchableNativeFeedback.canUseNativeForeground();
      if (shouldUseForeground && background) {
        console.warn('Specified foreground and background for Touchable, only one can be used at a time. Defaulted to foreground.');
      }
      return (
        <TouchableComponent
          {...props}
          useForeground={shouldUseForeground}
          background={(shouldUseForeground && foreground) || background}
        >
          <View style={style}>
            {children}
          </View>
        </TouchableComponent>
      );
    } else if (TouchableComponent === TouchableWithoutFeedback) {
      return (
        <TouchableWithoutFeedback {...props}>
          <View style={style}>
            {children}
          </View>
        </TouchableWithoutFeedback>
      );
    }
    const TouchableFallback = this.props.fallback || TouchableComponent;
    return (
      <TouchableFallback {...props} style={style}>
        {children}
      </TouchableFallback>
    );
  }
}

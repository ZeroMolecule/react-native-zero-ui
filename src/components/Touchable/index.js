// @flow
import React, { PureComponent } from 'react';
import {
  Platform,
  TouchableHighlight,
  TouchableNativeFeedback,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Vibration,
  View,
} from 'react-native';
import type { SingleChild, Style } from '../../types';

type Props = {
  children: SingleChild,
  onPress?: () => void,
  style?: ?Style,
  foreground?: any,
  background?: any,
  fallback?: any, // todo set component type
  hapticDuration?: number,
  mode?: 'native' | 'opacity' | 'highlight' | 'none',
};

/**
 * Select default native component once on start
 */
const TouchableNative = Platform.select({
  android: Platform.Version <= 20 ? TouchableOpacity : TouchableNativeFeedback,
  ios: TouchableOpacity,
});
let {
  SelectableBackground,
  SelectableBackgroundBorderless,
  Ripple,
  canUseNativeForeground,
} = TouchableNativeFeedback;
if (TouchableNative !== TouchableNativeFeedback) {
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
    hapticDuration: 0,
    onPress: undefined,
    mode: 'native',
  };
  static SelectableBackground = SelectableBackground;
  static SelectableBackgroundBorderless = SelectableBackgroundBorderless;
  static Ripple = Ripple;
  static canUseNativeForeground = canUseNativeForeground;

  onPress = () => {
    const { onPress, hapticDuration } = this.props;
    if (hapticDuration) {
      Vibration.vibrate(hapticDuration);
    }
    return onPress;
  };

  pickTouchableComponent() {
    const { mode } = this.props;
    switch (mode) {
      case 'native':
        return TouchableNative;
      case 'highlight':
        return TouchableHighlight;
      case 'opacity':
        return TouchableOpacity;
      default:
        return TouchableWithoutFeedback;
    }
  }

  render() {
    const {
      children,
      style,
      foreground,
      background,
      fallback,
      onPress,
      hapticDuration,
      mode,
      ...props
    } = this.props;
    const TouchableComponent = this.pickTouchableComponent();
    if (TouchableComponent === TouchableNativeFeedback) {
      const shouldUseForeground = foreground && TouchableNativeFeedback.canUseNativeForeground();
      return (
        <TouchableNativeFeedback
          {...props}
          onPress={this.onPress}
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
        <TouchableWithoutFeedback {...props} onPress={this.onPress}>
          <View style={style}>
            {children}
          </View>
        </TouchableWithoutFeedback>
      );
    }
    const TouchableFallback = fallback || TouchableComponent;
    return (
      // $FlowFixMe todo: Update when Flow type definition updates
      <TouchableFallback {...props} style={style} onPress={this.onPress}>
        {children}
      </TouchableFallback>
    );
  }
}

import React from 'react';
import {
  ActivityIndicator,
  Platform,
  StyleSheet,
  TouchableHighlight,
  TouchableNativeFeedback,
  View,
} from 'react-native';
import PropTypes from 'prop-types';
import styles, { stylesObject } from './ButtonCore.style';
import Text from '../../Text/Text';
import colors from '../../../styling/colors';

const Button = (props) => {
  const {
    Component,
    activityIndicatorStyle,
    allowFontScaling,
    backgroundColor,
    buttonStyle,
    borderRadius,
    containerViewStyle,
    color,
    disabled,
    disabledStyle,
    disabledTextStyle,
    fontFamily,
    fontSize,
    fontWeight,
    icon,
    iconRight,
    large,
    loading,
    loadingRight,
    outline,
    raised,
    rounded,
    textEllipsizeMode,
    textNumberOfLines,
    textStyle,
    title,
    transparent,
    underlayColor,
    ...attributes
  } = props;
  let { rightIcon, leftIcon } = props;

  let leftIconElement;
  if (!leftIcon && icon) {
    leftIcon = icon;
  }
  if (leftIcon) {
    const Icon = icon;
    leftIconElement = (
      <Icon
        {...leftIcon}
        color={leftIcon.color || 'white'}
        size={leftIcon.size || (large ? 26 : 18)}
        style={[styles.icon, leftIcon.style && leftIcon.style]}
      />
    );
  }
  let rightIconElement;
  if (iconRight || rightIcon) {
    if (!rightIcon) {
      rightIcon = iconRight;
    }
    const Icon = icon;
    rightIconElement = (
      <Icon
        {...rightIcon}
        color={rightIcon.color || 'white'}
        size={rightIcon.size || (large ? 26 : 18)}
        style={[styles.iconRight, rightIcon.style && rightIcon.style]}
      />
    );
  }
  let loadingElement;
  if (loading) {
    loadingElement = (
      <ActivityIndicator
        animating
        style={[styles.activityIndicatorStyle, activityIndicatorStyle]}
        color={color || 'white'}
        size={(large && 'large') || 'small'}
      />
    );
  }

  if (Platform.OS === 'android' && (borderRadius && !attributes.background)) {
    if (Platform.Version >= 21) {
      attributes.background = TouchableNativeFeedback.Ripple(
        'ThemeAttrAndroid',
        true,
      );
    } else {
      attributes.background = TouchableNativeFeedback.SelectableBackground();
    }
  }

  const baseFont = {
    color: (textStyle && textStyle.color) || color || stylesObject.text.color,
    size:
    (textStyle && textStyle.fontSize) ||
    fontSize ||
    (!large && stylesObject.smallFont.fontSize) ||
    stylesObject.text.fontSize,
  };

  const textOptions = {};
  if (textNumberOfLines) {
    textOptions.numberOfLines = textNumberOfLines;
    if (textEllipsizeMode) {
      textOptions.ellipsizeMode = textEllipsizeMode;
    }
  }

  return (
    <View
      style={[
        styles.container,
        raised && styles.raised,
        containerViewStyle,
        borderRadius && { borderRadius },
      ]}
    >
      <Component
        {...attributes}
        underlayColor={underlayColor}
        disabled={disabled}
      >
        <View
          pointerEvents="box-only"
          style={[
            styles.button,
            backgroundColor && { backgroundColor },
            borderRadius && { borderRadius },
            !large && styles.small,
            rounded && {
              borderRadius: baseFont.size * 3.8,
              paddingHorizontal: !large
                ? stylesObject.small.padding * 1.5
                : stylesObject.button.padding * 1.5,
            },
            outline && {
              borderWidth: 1,
              backgroundColor: 'transparent',
              borderColor: baseFont.color,
            },
            transparent && {
              borderWidth: 0,
              backgroundColor: 'transparent',
            },
            buttonStyle && buttonStyle,
            disabled && { backgroundColor: colors.disabled },
            disabled && disabledStyle,
          ]}
        >
          {(icon && !iconRight) || leftIconElement ? leftIconElement : null}
          {loading && !loadingRight && loadingElement}
          <Text
            style={StyleSheet.flatten([
              styles.text,
              color && { color },
              !large && styles.smallFont,
              fontSize && { fontSize },
              textStyle && textStyle,
              fontWeight && { fontWeight },
              fontFamily && { fontFamily },
              disabled && disabledTextStyle,
            ])}
            {...textOptions}
            allowFontScaling={allowFontScaling}
          >
            {title}
          </Text>
          {loading && loadingRight && loadingElement}
          {(icon && iconRight) || rightIconElement ? rightIconElement : null}
        </View>
      </Component>
    </View>
  );
};

Button.propTypes = {
  Component: PropTypes.any,
  activityIndicatorStyle: PropTypes.object,
  allowFontScaling: PropTypes.bool,
  background: PropTypes.any,
  backgroundColor: PropTypes.string,
  borderRadius: PropTypes.number,
  buttonStyle: PropTypes.object,
  color: PropTypes.string,
  containerViewStyle: PropTypes.object,
  disabled: PropTypes.bool,
  disabledStyle: PropTypes.object,
  disabledTextStyle: PropTypes.object,
  fontFamily: PropTypes.string,
  fontSize: PropTypes.any,
  fontWeight: PropTypes.string,
  icon: PropTypes.object,
  iconRight: PropTypes.object,
  large: PropTypes.bool,
  leftIcon: PropTypes.object,
  loading: PropTypes.bool,
  loadingRight: PropTypes.bool,
  onPress: PropTypes.any,
  outline: PropTypes.bool,
  raised: PropTypes.bool,
  rightIcon: PropTypes.object,
  rounded: PropTypes.bool,
  textEllipsizeMode: PropTypes.string,
  textNumberOfLines: PropTypes.number,
  textStyle: PropTypes.object,
  title: PropTypes.string,
  transparent: PropTypes.bool,
  underlayColor: PropTypes.string,
};

export default Button;

Button.defaultProps = {
  Component: Platform.select({
    ios: TouchableHighlight,
    android: TouchableNativeFeedback,
  }),
  disabled: false,
  loading: false,
  loadingRight: false,
  activityIndicatorStyle: undefined,
  allowFontScaling: false,
  background: undefined,
  backgroundColor: undefined,
  borderRadius: 0,
  buttonStyle: undefined,
  color: stylesObject.text.color,
  containerViewStyle: undefined,
  disabledStyle: undefined,
  disabledTextStyle: undefined,
  fontFamily: undefined,
  fontSize: stylesObject.text.fontSize,
  fontWeight: undefined,
  icon: undefined,
  iconRight: undefined,
  large: false,
  leftIcon: undefined,
  outline: false,
  raised: false,
  rightIcon: undefined,
  rounded: false,
  textEllipsizeMode: undefined,
  textNumberOfLines: undefined,
  textStyle: undefined,
  title: undefined,
  transparent: false,
  underlayColor: 'transparent',
  onPress: () => console.warn('onPress not implemented'),
};

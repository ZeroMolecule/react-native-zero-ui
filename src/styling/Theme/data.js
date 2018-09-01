// @flow
import { StyleSheet } from 'react-native';

function getComponentTheme(key: string, appTheme: ?Object): Object {
  if (appTheme) {
    return appTheme[key] || {};
  }
  return {};
}

function getStyles(componentTheme: Object): Object {
  const props = { style: {} };
  Object.keys(componentTheme)
    .forEach((key) => {
      if (key.startsWith('_')) {
        props[key.substr(1)] = componentTheme[key];
      } else {
        props.style[key] = componentTheme[key];
      }
    });
  return props;
}

function mergeStyles(themeStyles: Object = {}, props: Object = {}) {
  const merged = {};
  Object.keys(themeStyles)
    .forEach((key) => {
      merged[key] = StyleSheet.flatten([themeStyles[key], props[key]]);
    });
  return merged;
}

export default {
  getComponentTheme,
  getStyles,
  mergeStyles,
};

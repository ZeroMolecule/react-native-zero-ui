// @flow
import { StyleSheet } from 'react-native';

function getComponentTheme(key: string, appTheme: ?Object): Object {
  if (appTheme) {
    return appTheme[key] || {};
  }
  return {};
}

function getStyles(source: Object): Object {
  const props = { style: {} };
  Object.keys(source)
    .forEach((key) => {
      if (key.startsWith('_')) {
        props[key.substr(1)] = source[key];
      } else if (!key.startsWith('.')) {
        props.style[key] = source[key];
      }
    });
  return props;
}

function getClassNames(styleName: string): string[] {
  return styleName.trim()
    .split(/\s+/);
}

function getClasses(componentTheme: Object, classNames: string[]): Object[] {
  return classNames
    .map(className => componentTheme[`.${className}`])
    .filter(aClass => !!aClass)
    .map(aClass => getStyles(aClass));
}

function getAllStyles(componentTheme: Object, classes: string[]): Object {
  const full = {};
  const mainStyle: Object = getStyles(componentTheme);
  const classStyles: Object[] = getClasses(componentTheme, classes);
  [mainStyle, ...classStyles]
    .forEach((style) => {
      Object.keys(style)
        .forEach((key) => {
          if (!full[key]) {
            full[key] = [];
          }
          full[key].push(style[key]);
        });
    });
  return full;
}

function mergeAllStyles(componentTheme: Object, classes: string[], props: Object = {}) {
  const allStyles = getAllStyles(componentTheme, classes);
  const merged = {};
  Object.keys(allStyles)
    .forEach((key) => {
      merged[key] = StyleSheet.flatten([StyleSheet.flatten(allStyles[key]), props[key]]);
    });
  return merged;
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
  getClassNames,
  getStyles,
  mergeStyles,
  mergeAllStyles,
};

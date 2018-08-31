import { StyleSheet } from 'react-native';

function extractComponentTheme(key, theme) {
  return theme[key];
}

function extractVariants(componentTheme) {
  return Object.keys(componentTheme)
    .map(k => (k.startsWith('.') ? k : undefined));
}

function purifyTheme(theme) {
  const variants = {};
  const otherStyles = {};
  const pureStyle = {};
  Object.keys(theme)
    .forEach((k) => {
      if (k.startsWith('#')) {
        otherStyles[k.substr(1)] = theme[k];
      } else if (k.startsWith('.')) {
        variants[k.substr(1)] = purifyTheme(theme[k]);
      } else {
        pureStyle[k] = theme[k];
      }
    });
  return {
    variants,
    otherStyles,
    pureStyle,
  };
}

const extractStyles = (purified, variants = [], defaultStyle) => {
  const style = [defaultStyle];
  const other = {};
  style.push(purified.pureStyle);
  Object.keys(purified.otherStyles)
    .forEach((k) => {
      const otherStyle = other[k] || [];
      otherStyle.push(purified.otherStyles[k]);
      other[k] = otherStyle;
    });
  variants.forEach((v) => {
    const variant = purified.variants[v];
    if (variant) {
      style.push(variant.pureStyle);
      Object.keys(variant.otherStyles)
        .forEach((k) => {
          const otherStyle = other[k] || [];
          otherStyle.push(variant.otherStyles[k]);
          other[k] = otherStyle;
        });
    }
  });
  const grouped = { style, ...other };
  const result = {};
  Object.keys(grouped)
    .forEach((k) => {
      result[k] = StyleSheet.flatten(grouped[k]);
    });
  return result;
};

export default {
  purifyTheme,
  extractVariants,
  extractComponentTheme,
  extractStyles,
};

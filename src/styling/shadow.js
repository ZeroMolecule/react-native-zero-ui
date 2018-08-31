import { Platform } from 'react-native';

function createShadow(x = 0, y = 3, blur = 6, color = '#00000033', alpha = 1, overflow = null) {
  return Platform.select({
    ios: {
      overflow,
      shadowColor: color,
      shadowOffset: {
        width: x,
        height: y,
      },
      shadowRadius: blur,
      shadowOpacity: alpha,
    },
    android: {
      elevation: y,
    },
  });
}

export default {
  createShadow,
  button: createShadow(),
};

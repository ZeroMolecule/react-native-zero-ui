// @flow
import { Platform } from 'react-native';
import type { Color } from '../types';

function createShadow(
  x: number = 0,
  y: number = 3,
  blur: number = 6,
  color: Color = '#00000033',
  alpha: number = 1,
  overflow: ?string = null,
) {
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
  button: createShadow(0, 2, 4),
};

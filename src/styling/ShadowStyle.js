// @flow
import { Platform } from 'react-native';
import type { Color } from '../types';

export default class ShadowStyle {
  +x: number;
  +y: number;
  +blur: number;
  +color: Color;
  +alpha: number;
  +overflow: ?string;

  constructor(
    x?: number = 0,
    y?: number = 3,
    blur?: number = 6,
    color?: Color = '#00000033',
    alpha?: number = 1,
    overflow?: ?string = null,
  ) {
    this.x = x;
    this.y = y;
    this.blur = blur;
    this.color = color;
    this.alpha = alpha;
    this.overflow = overflow;
  }

  get androidValue() {
    return {
      elevation: this.y,
    };
  }

  get iosValue() {
    return {
      overflow: this.overflow,
      shadowColor: this.color,
      shadowOffset: {
        width: this.x,
        height: this.y,
      },
      shadowRadius: this.blur,
      shadowOpacity: this.alpha,
    };
  }

  get value() {
    return Platform.select({
      ios: this.iosValue,
      android: this.androidValue,
    });
  }
}

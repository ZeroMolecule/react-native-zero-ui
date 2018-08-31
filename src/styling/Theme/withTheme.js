// @flow
import React, { PureComponent } from 'react';
import Theme from './index';
import util from './util';
import type { Style } from '../../types';

type Props = {
  className?: ?string,
  style?: ?Style,
};

export default (
  key: string,
) => (Component: any) => {
  class HOC extends PureComponent<Props> {
    static defaultProps = {
      className: null,
      style: null,
    };
    extractStyles = (source: Object) => {
      const { className, style } = this.props;
      let variants = [];
      if (className) {
        variants = className.split(' ');
      }
      return util.extractStyles(source, variants, style);
    };

    fillProps = (theme: Object) => {
      const componentThemeKey = `.${key}`;
      if (theme) {
        const componentTheme = theme[componentThemeKey];
        if (componentTheme) {
          const purified = util.purifyTheme(componentTheme);
          const extracted = this.extractStyles(purified);
          return extracted;
        }
      }
      return {};
    };

    render() {
      const {
        style,
        ...props
      } = this.props;
      return (
        <Theme.Consumer>
          {theme => (
            <Component
              {...this.fillProps(theme)}
              {...props}
            />
          )}
        </Theme.Consumer>
      );
    }
  }

  return HOC;
};

// @flow
import React, { PureComponent } from 'react';
import Theme from './index';
import util from './util';

export default (
  key: string,
) => (Component: any) => {
  class HOC extends PureComponent<{}> {
    extractStyles = (source: Object) => {
      const variants = this.props.className.split(' ') || [];
      console.log('variants', variants);
      return util.extractStyles(source, variants, this.props.style);
    };

    fillProps = (theme: Object) => {
      const componentThemeKey = `.${key}`;
      if (theme) {
        const componentTheme = theme[componentThemeKey];
        if (componentTheme) {
          const purified = util.purifyTheme(componentTheme);
          const extracted = this.extractStyles(purified);
          console.log({ extracted });
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

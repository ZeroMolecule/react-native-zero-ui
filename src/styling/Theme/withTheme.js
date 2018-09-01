// @flow
import React, { PureComponent } from 'react';
import Theme from './index';
import type { Style } from '../../types';
import data from './data';

type Props = {
  className?: ?string,
  style?: ?Style,
  forwardedRef?: ?any,
};

export default (
  key: string,
) => (Component: any) => {
  class HOC extends PureComponent<Props> {
    static defaultProps = {
      className: null,
      style: null,
      forwardedRef: null,
    };

    mapToProps = (theme: Object) => {
      console.log('Theme: ', theme);
      const componentTheme = data.getComponentTheme(key, theme);
      console.log('Component theme', componentTheme);
      const themeStyles = data.getStyles(componentTheme);
      console.log('Theme styles', themeStyles);
      const merged = data.mergeStyles(themeStyles, this.props);
      console.log('Merged: ', merged);
      return merged;
    };

    render() {
      const {
        style,
        // $FlowFixMe todo: Update when Flow type definition updates
        forwardedRef,
        ...props
      } = this.props;
      return (
        <Theme.Consumer>
          {theme => (
            <Component
              ref={forwardedRef}
              {...this.mapToProps(theme)}
              {...props}
            />
          )}
        </Theme.Consumer>
      );
    }
  }

  // $FlowFixMe todo: Update when Flow type definition updates
  return React.forwardRef((props, ref) => (
    <HOC {...props} forwardedRef={ref} />
  ));
};

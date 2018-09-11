// @flow
import React, { PureComponent } from 'react';
import hoistStatics from 'hoist-non-react-statics';
import Theme from './index';
import type { Style } from '../../types';
import util from './util';

type Props = {
  className?: ?string,
  style?: ?Style,
  forwardedRef?: ?any,
  styleName?: string,
};

export default (
  key: string,
) => (Component: any) => {
  class HOC extends PureComponent<Props> {
    static defaultProps = {
      className: null,
      style: null,
      forwardedRef: null,
      styleName: '',
    };

    mapToProps = (theme: Object) => {
      const { styleName, ...props } = this.props;
      const componentTheme = util.getComponentTheme(key, theme);
      let classNames = [];
      if (styleName) {
        classNames = util.getClassNames(styleName);
      }
      return util.mergeAllStyles(componentTheme, classNames, props);
    };

    render() {
      const {
        style,
        // $FlowFixMe todo: Update when Flow type definition updates
        forwardedRef,
        styleName,
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

  const HOCWithStatistics = hoistStatics(HOC, Component);
  // $FlowFixMe todo: Update when Flow type definition updates
  return React.forwardRef((props, ref) => (
    <HOCWithStatistics {...props} forwardedRef={ref} />
  ));
};

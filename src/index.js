module.exports = {
  get Text() {
    return require('./components/Text/Text').default;
  },
  get View() {
    return require('./components/View/View').default;
  },
  /**
   * @deprecated use `TextInput` instead
   */
  get Input() {
    return require('./components/TextInput/TextInput').default;
  },
  get TextInput() {
    return require('./components/TextInput/TextInput').default;
  },
  get Button() {
    return require('./components/Button/Button').default;
  },
};

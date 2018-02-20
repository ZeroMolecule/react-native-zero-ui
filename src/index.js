module.exports = {
  get Text() {
    return require('./components/Text/Text').default;
  },
  get View() {
    return require('./components/View/View').default;
  },
  get Input() {
    return require('./components/Input/Input').default;
  }
};

module.exports = {
  get Touchable() {
    return require('./components/Touchable').default;
  },
  get Button() {
    return require('./components/Button').default;
  },
  get ImageButton() {
    return require('./components/ImageButton').default;
  },
  get withTheme() {
    return require('./styling/Theme/withTheme').default;
  },
  get Theme() {
    return require('./styling/Theme').default;
  }
};

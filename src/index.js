module.exports = {
  get Touchable() {
    return require('./components/Touchable').default;
  },
  get Button() {
    return require('./components/Button').default;
  },
  get Theme() {
    return require('./styling/Theme').default;
  }
};

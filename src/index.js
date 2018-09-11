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
  get ShadowStyle() {
    return require('./styling/ShadowStyle').default;
  },
};

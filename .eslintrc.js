module.exports = {
  env: {
    browser: true,
    node: true,
  },
  parser: 'babel-eslint',
  extends: 'airbnb',
  rules: {
    'global-require': 'off',
    'react/no-array-index-key': 'off',
    'react/jsx-filename-extension': 'off',
    'react/forbid-prop-types': 'off',
    'lines-between-class-members': 'off',
  },
};

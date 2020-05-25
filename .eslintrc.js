module.exports = {
  root: true,
  env: {
    node: true,
  },
  plugins: [
    'babel',
  ],
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warning' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'class-methods-use-this': 'off',
    'no-param-reassign': ['error', { props: false }],
    'no-alert': 'off',
    'no-return-assign': 'off',
    'no-restricted-globals': 'off',
    'babel/semi': 1,
    'quote-props': 'off',
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};

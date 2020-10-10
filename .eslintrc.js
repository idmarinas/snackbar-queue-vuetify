module.exports = {
  root: true,

  env: {
    node: true
  },

  extends: [
    'plugin:vue/strongly-recommended',
    '@vue/standard',
    '@vue/typescript/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2020
  },

  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'arrow-parens': ['error', 'as-needed'],
    'brace-style': ['error', 'allman', { allowSingleLine: true }],
    'spaced-comment': ['error', 'always', { markers: ['--'], exceptions: ['-'] }],
    'vue/attributes-order': 'error',
    'vue/html-quotes': [
      'error',
      'double'
    ],
    'vue/no-v-html': 'error',
    'vue/order-in-components': 'error',
    'vue/this-in-template': 'error',
    'vue/object-curly-spacing': ['error', 'always'],
    'vue/array-bracket-spacing': 'error',
    'vue/arrow-spacing': 'warn',
    'vue/match-component-file-name': 'error',
    'vue/padding-line-between-blocks': 'error',
    'vue/component-tags-order': ['error', {
      order: [['script', 'template'], 'style']
    }],
    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: 3,
        multiline: {
          max: 4,
          allowFirstLine: false
        }
      }
    ],
    '@typescript-eslint/camelcase': ['error',
      {
        properties: 'never'
      }
    ]
  }
}

module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    indent: ['warn', 2],
    '@typescript-eslint/no-unused-vars': ['off', { vars: 'local' }],
    'prefer-const': 'warn',
    quotes: ['warn', 'single'],
    semi: ['warn', 'always'],
    'space-infix-ops': 'warn',
  },

}

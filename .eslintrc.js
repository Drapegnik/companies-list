module.exports = {
  root: true,
  extends: [
    // choose and enable needed configs
    './node_modules/@realtby/codestyle/eslint/prettier', // prettier first!
    './node_modules/@realtby/codestyle/eslint/base',
    './node_modules/@realtby/codestyle/eslint/typescript',
    './node_modules/@realtby/codestyle/eslint/import',
    './node_modules/@realtby/codestyle/eslint/react',
  ],
  overrides: [
    {
      files: ['./*.{js,ts}', '{pages,api,@types}/**/*.{ts,tsx}'],
      rules: {
        'import/no-default-export': 'off',
      },
    },
  ],
  rules: {
    // import
    'import/order': [
      'error',
      {
        groups: [
          ['builtin', 'external'],
          'internal',
          ['parent', 'sibling'],
          'index',
          'object',
          'type',
        ],
        'newlines-between': 'always',
      },
    ],
  },
};

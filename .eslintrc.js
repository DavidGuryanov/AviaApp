module.exports = {
  env: {
    browser: true,
    es2020: true,
    jest: true,
  },
  extends: ['airbnb', 'airbnb/hooks', 'eslint-config-prettier', 'prettier/react'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    curly: ['error'],
    'max-depth': ['warn', 4],
    'id-length': ['warn', { exceptions: ['i', 'j'], min: 2 }],
    'no-lonely-if': ['error'],
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    'no-restricted-syntax': 'off',
    'class-methods-use-this': 'off',
    'jsx-a11y/href-no-hash': ['off'],
    'jsx-a11y/anchor-is-valid': ['off'],
    'jsx-a11y/label-has-associated-control': [
      'error',
      {
        assert: 'either',
      },
    ],
    'react/state-in-constructor': ['off'],
    'react/jsx-props-no-spreading': ['off'],
    'react/static-property-placement': 'off',
  },
  settings: {
    react: {
      pragma: 'React',
      version: 'detect',
    },
  },
};
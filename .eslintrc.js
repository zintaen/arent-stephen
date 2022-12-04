module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    parserOptions: { ecmaFeatures: { jsx: true } },
    settings: {
        react: {
            version: 'detect',
        },
    },
    extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
    ],
    rules: {
        'no-console': 'warn',
        'no-debugger': 'warn',
        'react/prop-types': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-empty-function': 'off',
        'react/display-name': 'off',
    },
};

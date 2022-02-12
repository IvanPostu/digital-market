module.exports = {
    env: {
        browser: true,
        es2021: true,
        amd: true,
        node: true,
    },
    extends: ['eslint:recommended', 'plugin:prettier/recommended'],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    rules: {
        'prettier/prettier': [
            'warn',
            {
                endOfLine: 'auto',
            },
        ],
        'prefer-const': 'warn',
    },
}

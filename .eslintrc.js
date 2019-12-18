const {resolve} = require('path');

module.exports = {
    parser: 'babel-eslint',
    extends: ['airbnb'],
    plugins: ['react', 'import', 'prettier'],
    env: {
        browser: true,
        jest: true,
    },

    settings: {
        'import/resolver': {
            webpack: {
                config: resolve(__dirname, '../webpack.config.js'),
            },
            node: {
                paths: ['src'],
            },
        },
    },
    globals: {
        jest: true,
        test: true,
        expect: true,
        describe: true,
        afterEach: true,
        afterAll: true,
        beforeEach: true,
        beforeAll: true,
        isNaN: true,
        window: true,
    },
    rules: {
        'max-depth': ['error', 4], // глубина вложенностей в блоках
        'max-lines': ['error', {max: 500, skipComments: true}],
        'max-len': [
            'error',
            140,
            2,
            {
                ignoreUrls: true,
                ignoreComments: false,
                ignoreRegExpLiterals: true,
                ignoreStrings: true,
                ignoreTemplateLiterals: true,
            },
        ],
        'react/destructuring-assignment': 'off',
        'object-curly-newline': 'off',
        'max-params': ['error', 3],
        'max-statements': ['error', 100],
        'class-methods-use-this': 'off',
        'no-debugger': 'warn',

        // imports
        'import/no-named-as-default': 'off',
        'import/no-unresolved': ['error', {commonjs: true, caseSensitive: true, ignore: ['controls']}],
        'import/no-extraneous-dependencies': ['off'], //можно включить тока нужно резолвы разрулить
        'import/extensions': [
            'error',
            {
                js: 'never',
                jsx: 'never',
            },
        ],

        // Styles
        'linebreak-style': ['off'],
        semi: ['error', 'always', {omitLastInOneLineBlock: true}],
        'object-curly-spacing': ['error', 'never'],
        'no-underscore-dangle': ['off'],
        indent: [
            'error',
            4,
            {
                SwitchCase: 1,
                VariableDeclarator: 1,
                outerIIFEBody: 1,
                FunctionDeclaration: {
                    parameters: 1,
                    body: 1,
                },
                FunctionExpression: {
                    parameters: 1,
                    body: 1,
                },
            },
        ],
        'no-continue': 'off',
        'no-restricted-syntax': 'off',
        'import/extensions': 'off',
        camelcase: ['error', {properties: 'never', ignoreDestructuring: true}],
        'no-return-assign': ['off'],
        'no-trailing-spaces': ['error', {skipBlankLines: true}],
        'eol-last': ['error', 'always'],
        'arrow-body-style': 'off',
        'jsx-a11y/no-static-element-interactions': 'off',
        'jsx-a11y/click-events-have-key-events': 'off',
        'react/jsx-one-expression-per-line': 'off',
        // ES6
        'consistent-return': 'off',
        'array-callback-return': 'off',
        'prefer-template': 'off',
        'arrow-parens': ['error', 'always'],
        'padded-blocks': [
            'error',
            {
                blocks: 'never',
                classes: 'never',
                switches: 'never',
            },
        ],

        // Errors
        'comma-dangle': ['warn', 'always-multiline'],

        // React
        'react/sort-comp': 'off',
        'react/require-default-props': 'off',
        'react/jsx-filename-extension': ['error', {extensions: ['.js']}],
        'react/jsx-first-prop-new-line': ['error', 'multiline-multiprop'],
        'react/jsx-indent': ['error', 4],
        'react/jsx-indent-props': ['error', 4],
        'react/forbid-prop-types': ['error', {forbid: ['any']}],
        'jsx-a11y/href-no-hash': 'off',
        'jsx-a11y/anchor-is-valid': ['warn', {aspects: ['invalidHref']}],
    },
};

module.exports = {
    'env': {
        'browser': true,
        'jest': true,
        'es6': true,
        'node': true,
    },
    'extends': [
        'airbnb',
        'prettier',
    ],
    'plugins': [
        'prettier',
    ],
    'rules': {
        'prettier/prettier': ['error', {
            'singleQuote': true,
            'trailingComma': 'es5'
        }],
    },
    'parserOptions': {
        'ecmaFeatures': {
            'jsx': true,
        }
    },
    // add your custom rules here
    rules: {
        'react/forbid-prop-types': false,
        'react/jsx-wrap-multilines': false,
        'no-underscore-dangle': ['error', {
            'allow': ['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__', '__REDUX_DEVTOOLS_EXTENSION__', '__initialState__']
        }]
    }
}

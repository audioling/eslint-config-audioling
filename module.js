const { resolve } = require('node:path');

const project = resolve(process.cwd(), 'tsconfig.json');

module.exports = {
    extends: ['./index.js'],
    parserOptions: {
        project,
    },
    env: {
        browser: false,
        commonjs: true,
        es6: true,
        node: true,
        commonjs: true,
    },
};

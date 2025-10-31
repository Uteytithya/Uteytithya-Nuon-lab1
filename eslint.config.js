// eslint.config.js (CommonJS version)
const js = require("@eslint/js");
const globals = require("globals");

module.exports = [
  js.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: 12,
      globals: {
        ...globals.node,
        ...globals.mocha,
      },
    },
    rules: {},
  },
];

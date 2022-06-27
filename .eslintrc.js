// import { defineConfig } from 'eslint-define-config';
const { defineConfig } = require("eslint-define-config");

module.exports = defineConfig({
  env: {
    es6: true,
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    parser: "@typescript-eslint/parser",
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  overrides: [
    {
      files: ["*.vue"],
      parser: "vue-eslint-parser",
      parserOptions: {
        parser: "@typescript-eslint/parser",
        sourceType: "module",
        ecmaVersion: "latest",
      },
    },
  ],
  extends: [
    "eslint:recommended",
    // "plugin:vue/vue3-recommended",
    // 'plugin:@typescript-eslint/recommended',
    "prettier",
    "plugin:prettier/recommended",
  ],
  rules: {},
});

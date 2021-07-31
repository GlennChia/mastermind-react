module.exports = {
  parser: "babel-eslint",
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    "plugin:react/recommended",
    "plugin:jest/all",
    "plugin:prettier/recommended",
    "prettier/react",
  ],
  plugins: ["react", "react-hooks"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    "react/prop-types": 0,
    "react/jsx-boolean-value": [1, "always"],
    "import/prefer-default-export": 0,
    "jest/no-hooks": 0,
    "jest/lowercase-name": 0,
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "error",
    "no-duplicate-imports": "error",
    "react/display-name": "off",
  },
  overrides: [
    {
      files: ["**/*.test.jsx", "storybook/**/*.js*"],
      rules: {
        "jest/prefer-strict-equal": "off",
        "react/no-unescaped-entities": 0,
      },
    },
  ],
  settings: {
    react: {
      version: "detect",
    },
  },
};

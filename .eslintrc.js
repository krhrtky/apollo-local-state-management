/**
 * @type { import("eslint").Linter.Config }
 */
module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:prettier/recommended",
    "prettier/@typescript-eslint",
    "plugin:react/recommended",
    "airbnb",
  ],
  plugins: ["react", "@typescript-eslint"],
  parser: "@typescript-eslint/parser",
  env: { node: true, es6: true, browser: true },
  parserOptions: {
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    quotes: ["error", "double"],
    semi: ["error", "always"],
    "prettier/prettier": [
      "error",
      { semi: true, trailingComma: "all", arrowParens: "avoid" },
    ],
    "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
    "@typescript-eslint/explicit-function-return-type": ["off"],
    "react/prop-types": "off",
    "react/jsx-filename-extension": [1, { extensions: [".tsx", ".jsx"] }],
    "react/jsx-one-expression-per-line": "off",
    "react/jsx-props-no-spreading": "off",
    "react/jsx-curly-newline": "off",
    "import/prefer-default-export": "off",
    "import/extensions": "off",
    indent: "off",
    "implicit-arrow-linebreak": "off",
    "arrow-parens": ["error", "as-needed"],
  },
  settings: {
    react: {
      createClass: "createReactClass",
      pragma: "React",
      version: "16.13.1",
    },
    "import/resolver": "webpack",
  },
};

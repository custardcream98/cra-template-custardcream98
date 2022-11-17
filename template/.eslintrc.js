module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
  ],
  overrides: [],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: [
    "react",
    "react-hooks",
    "@typescript-eslint",
    "prettier",
    "import",
  ],
  rules: {
    "linebreak-style": 0,
    "prettier/prettier": 0,

    // import
    "import/extensions": 0,
    "import/prefer-default-export": 0,
    "import/no-unresolved": "error",
    "import/no-extraneous-dependencies": 0,
    //

    "no-use-before-define": ["off"],
    "@typescript-eslint/no-use-before-define": ["error"],
    "react/jsx-filename-extension": [
      "warn",
      { extensions: [".tsx"] },
    ],

    "no-shadow": 0,
    "react/prop-types": 0,
    "jsx-a11y/no-noninteractive-element-interactions": 0,
  },
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },
    "import/resolver": {
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
  "lint-staged": {
    "*": ["prettier --write"],
    "*.js|*.jsx|*.ts|*.tsx": ["eslint --fix"],
  },
  husky: {
    hooks: {
      "pre-commit": "lint-staged",
    },
  },
  compilerOptions: {
    noEmit: true,
  },
};

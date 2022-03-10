module.exports = {
  extends: ["airbnb", "prettier", "eslint-config-prettier"],
  plugins: ["prettier"],
  rules: {
    "react/jsx-filename-extension": [
      1,
      {
        extensions: [".js", ".jsx"],
      },
    ],
    "react/prop-types": 0,
    "no-underscore-dangle": 0,
    "import/imports-first": ["error", "absolute-first"],
    "import/newline-after-import": "error",
    "prettier/prettier": [
      "error",
      {
        tabWidth: 2,
        semi: true,
        trailingComma: "es5",
        singleQuote: false,
        printWidth: 125,
        endOfLine: "auto",
      },
    ],
  },
  globals: {
    window: true,
    document: true,
    localStorage: true,
    FormData: true,
    FileReader: true,
    Blob: true,
    navigator: true,
  },
  parser: "@babel/eslint-parser",
  parserOptions: {
    requireConfigFile: false,
  },
};

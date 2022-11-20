module.exports = {
  root: true,
  extends: "@react-native-community",
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  overrides: [
    {
      files: ["*.ts", "*.tsx", "*.js", "*.jsx"],
      rules: {
        semi: "off",
        "@typescript-eslint/no-shadow": ["error"],
        "@typescript-eslint/no-unused-vars": "off",
        "react-hooks/exhaustive-deps": "off",
        "react-native/no-inline-styles": "off",
        "no-shadow": "off",
        "no-undef": "off",
      },
    },
  ],
};

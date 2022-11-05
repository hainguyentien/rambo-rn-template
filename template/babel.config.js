module.exports = {
  presets: ["module:metro-react-native-babel-preset"],
  plugins: [
    [
      "module-resolver",
      {
        alias: {
          "@Assets": "./src/assets",
          "@Components": "./src/components",
          "@Configs": "./src/configs",
          "@Locales": "./src/locales",
          "@Mock": "./src/mock",
          "@Redux": "./src/redux",
          "@Routes": "./src/routes",
          "@Screens": "./src/screens",
          "@Services": "./src/services",
          "@Types": "./src/types",
          "@Utils": "./src/utils",
        },
        extensions: [".js", ".jsx", ".ts", ".tsx", ".png"],
      },
    ],
    [
      "module:react-native-dotenv",
      {
        moduleName: "@env",
        path: ".env",
        safe: false,
        allowUndefined: false,
      },
    ],
    "react-native-reanimated/plugin",
  ],
};

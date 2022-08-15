module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      "react-native-reanimated/plugin",
      [
        "module-resolver",
        {
          root: ["."],
          alias: {
            "~": "./src",
            "~navigation": "./src/navigation",
            "~screens": "./src/screens",
            "~constants": "./src/constants",
            "~components": "./src/components",
            "~assets": "./assets",
          },
        },
      ],
    ],
  };
};

import { Config } from "@jest/types";

// By default, all files inside `node_modules` are not transformed. But some 3rd party
// modules are published as untranspiled, Jest will not understand the code in these modules.
// To overcome this, exclude these modules in the ignore pattern.
const untranspiledModulePatterns = [
  "(jest-)?react-native",
  "@react-native",
  "@react-native-community",
  "expo(nent)?",
  "@expo(nent)?/.*",
  "react-navigation",
  "@react-navigation/.*",
  "@unimodules/.*",
  "unimodules",
  "sentry-expo",
  "native-base",
  "react-native-svg",
];

const config: Config.InitialOptions = {
  preset: "jest-expo",
  transformIgnorePatterns: [
    `node_modules/(?!${untranspiledModulePatterns.join("|")})`,
  ],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
  setupFilesAfterEnv: [
    "@testing-library/jest-native/extend-expect",
    "./jest-setup.js",
  ],
};

export default config;

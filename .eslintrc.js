module.exports = {
  plugins: ["prettier"],
  extends: "universe/native",
  ignorePatterns: ["metro.config.js", "**/generated/*.ts"],
  rules: {
    "@typescript-eslint/no-unused-vars": ["error"],
    "@typescript-eslint/ban-ts-comment": [
      "error",
      {
        "ts-ignore": "allow-with-description",
      },
    ],
  },
};

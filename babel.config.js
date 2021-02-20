module.exports = {
  presets: [
    [
      "@babel/env",
      {
        targets: { node: "current" },
        useBuiltIns: "usage",
        corejs: {
          version: 3,
          proposals: true,
        },
      },
    ],
    [
      // Upgrade to new JSX Transform
      // No need for: import React from "react";
      "@babel/react",
      {
        runtime: "automatic",
      },
    ],
    "@babel/typescript",
  ],
  plugins: [
    "@babel/transform-runtime",
    "@babel/proposal-class-properties",
    [
      "module-resolver",
      {
        root: ["./"],
        alias: {
          "&components": "./src/components",
          "&images": "./src/images",
          "&sass": "./src/sass",
          "&src": "./src",
          __tests__: "./__tests__",
        },
      },
    ],
  ],
};

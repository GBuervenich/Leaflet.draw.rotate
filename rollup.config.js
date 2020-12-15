import babel from "rollup-plugin-babel";
const moduleFormat = "umd";

export default [
  {
    input: "src/js/Edit.Rectangle.Rotate.js",
    output: [
      {
        dir: "dist",
        format: moduleFormat,
        globals: {
          "@babel/runtime/regenerator": "regeneratorRuntime",
        },
      },
    ],
    plugins: [babel({ exclude: "node_modules/**" })],
  },
  {
    input: "src/js/L.Path.Transform.js",
    output: [
      {
        dir: "dist",
        format: moduleFormat,
        globals: {
          "@babel/runtime/regenerator": "regeneratorRuntime",
        },
      },
    ],
    plugins: [babel({ exclude: "node_modules/**" })],
  }
];

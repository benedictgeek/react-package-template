import typescript from "rollup-plugin-typescript2";

export default {
  input: "src/index.tsx",
  output: [
    {
      file: "dist/index.js",
      format: "cjs",
      exports: "named",
      strict: false,
    },
  ],
  plugins: [typescript({ objectHashIgnoreUnknownHack: false })],
  external: ["react", "react-dom", "react/jsx-runtime"],
};

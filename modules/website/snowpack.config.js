/** @type {import("snowpack").SnowpackUserConfig } */
export default {
  exclude: [
  ],
  alias: {
    "@komore/element": "../modules/element/src/index.ts",
    "@komore/website": "../modules/website/src/index.ts",
    "@komore/website/layout": "../modules/website/layout/src/index.ts",
    "@komore/website/layout/footer": "../modules/website/layout/footer/src/index.ts"
  },
  mount: {
    "./src": {
      url: "/"
    }
  },
  plugins: [
    ["./komore-element-plugin.js", {}]
  ],
  packageOptions: {
    /* ... */
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    out: "../../dist/website"
    /* ... */
  },
};

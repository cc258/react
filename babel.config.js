const presets = [
  [
    "@babel/preset-env",
    {
      targets: {
        edge: "17",
        firefox: "60",
        chrome: "67",
        safari: "11.1",
        node: "current"
      },
      useBuiltIns: "entry"  // entry | usage
    }
  ]
];

module.exports = { presets };

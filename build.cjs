require("esbuild")
  .build({
    entryPoints: ["src/index.js"],
    outfile: "build/app.js",
    bundle: true,
    minify: true,
    sourcemap: false,
    loader: {
      ".js": "jsx",
    },
  })
  .catch(() => process.exit(1));

require("esbuild")
  .serve(
    {
      servedir: "build",
      port: 3000,
    },
    {
      entryPoints: ["src/index.js"],
      outfile: "build/app.js",
      bundle: true,
      minify: false,
      sourcemap: true,
      loader: {
        ".js": "jsx",
      },
    }
  )
  .then(() => console.log(" Running on http://localhost:3000 "));

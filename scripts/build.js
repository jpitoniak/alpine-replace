const esbuild = require("esbuild")

esbuild.build({
    entryPoints: ["./src/cdn.js"],
    outfile: "./dist/cdn.js",
    bundle: true,
    platform: "browser"
})

esbuild.build({
    entryPoints: ["./src/cdn.js"],
    outfile: "./dist/cdn.min.js",
    bundle: true,
    minify: true,
    platform: "browser",
})

esbuild.build({
    entryPoints: ["./src/replace.js"],
    outfile: "./dist/module.esm.js",
    bundle: true,
    platform: "neutral",
    mainFields: ["module", "main"]
})

esbuild.build({
    entryPoints: ["./src/replace.js"],
    outfile: "./dist/module.cjs.js",
    bundle: true,
    platform: "node",
    target: ['node10.4']
})

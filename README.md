## simple-bundler
A simple FE assets bundler

## Resources
1. Taobao: https://registry.npm.taobao.org
2. AST Tool: https://astexplorer.net  
3. Webpack Runtime: https://webpack.js.org/concepts/manifest/#runtime
4. Acorn Parser: https://github.com/acornjs/acorn

## Webpack Version
version: ^4.7.0

The above can see generated resources, like chunks & bundles

## Webpack Modules Explanation
Modules refers to module system, like AMD, CJS, ESM, Assets(image, font, video, audio, json).

## Chunks & Bundles
1. Chunks are the output in the middle of the build process.
```js
eg: entry: {
  index: 'xxx.js',
  search: 'xxx.js',
  list: 'xxx.js'
}

index, search, list are called chunks
```

2. Bundles are the output of the whole webpack build process


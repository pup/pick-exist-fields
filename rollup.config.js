export default {
  input: "./src/index.js", // 指定入口文件的路径
  output: {
    file: "./dist/bundle.js", // 指定输出文件的路径
    format: "umd", // 指定输出的模块格式，可以是 'umd', 'es', 'cjs', 'iife' 等
    name: "pickExistFields", // 指定name，会将其挂载到window上
  },
};

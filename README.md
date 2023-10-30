# 项目构建

`yarn create react-app react-app-i --template typescript`
内置webpack,配置需要注入修改

One of your dependencies, babel-preset-react-app, is importing the "@babel/plugin-proposal-private-property-in-object" package without declaring it in its dependencies. This is currently working because "@babel/plugin-proposal-private-property-in-object" is already in your dependencies, but it's not recommended.

craco 增加配置
`module.exports = {
  babel: {
    plugins: [["@babel/plugin-proposal-class-properties", { loose: true }]],
  },
};`

Files successfully emitted, waiting for typecheck results...
这个提示是来自TypeScript编译器。它表示编译器已经成功生成了输出文件，并且正在等待类型检查结果。

在TypeScript的编译过程中，它会先进行语法检查，然后再进行类型检查。当语法检查通过后，编译器会生成输出文件，然后继续进行类型检查。

这个提示通常出现在编译过程中，特别是在较大的项目中，类型检查可能需要一些时间来完成。它意味着编译器已经完成了输出文件的生成，并且正在进行类型检查。您可以等待一段时间，直到类型检查完成，或者检查是否有其他编译错误或警告信息输出。

# 配置路由

安装react-router-dom
view文件夹增加内容,配置routes
import * from './config
无法导入

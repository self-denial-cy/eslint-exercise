module.exports = {
    // 当前目录为根目录，不再向上查找配置
    root: true,
    // 解析器的配置参数，具体参数需要查看各个解析器的文档
    parserOptions: {
        // 解析器：eslint 的默认解析器是 espree，配合核心规则只支持最新的 ECMAScript 标准
        // 对于一些实验性的语法或者是新特性，需要 @babel/eslint-parser 来解析，@babel/eslint-plugin 来补充规则，这样 eslint 就能对这些高级语法或新特性进行检测
        // 对于 TypeScript，需要 @typescript-eslint/parser 来解析，@typescript-eslint/eslint-plugin 来补充规则，这样 eslint 就能对 TypeScript 进行检测
        parser: 'espree', // vue-plugin-vue 需要使用 vue-eslint-parser 解析 .vue 文件，因此只能在 parserOptions 中设置自定义 parser
        // 是否启用 ESM
        sourceType: 'module',
        // es 版本号
        // 支持 ES6 语法与支持 ES6 全局变量不同，对于 ES6 全局变量需要在 env 中启用 es6
        ecmaVersion: 6,
        ecmaFeatures: {
            // 是否允许在全局作用域下使用 return 语句
            globalReturn: false,
            // 是否启用全局严格模式
            impliedStrict: false,
            // 是否启用 JSX（启用 JSX 语法不等于支持 React，React 将特定语义应用在 JSX 上以至 eslint 无法识别，使用 eslint-plugin-react 支持 React）
            jsx: false
        }
    },
    // eslint 会检测未声明的变量并发出警告，但有些变量是引入的库声明的
    globals: {
        // 如果项目中引入了 jQuery，声明 $ 为全局变量
        // true 表示该变量 writable | false 表示 readonly
        // '$': false
    },
    // 在 globals 中一个一个的声明全局变量未免有点繁琐，在 env 中可以对一个环境中的一组全局变量进行预设
    // 预设的数据来源：https://github.com/eslint/eslint/blob/v6.0.1/conf/environments.js 和 https://github.com/sindresorhus/globals/blob/main/globals.json
    env: {
        es6: true,
        browser: true,
        // node: true,
        // jquery: true
    },
    // eslint 附带有大量的规则（https://zh-hans.eslint.org/docs/latest/rules/）
    // 每一条规则都可以接受参数
    rules: {
        // quotes: [
        //     // off | 0 关闭规则
        //     // warn | 1 开启规则，warn 级别错误（不会导致程序退出）
        //     // error | 2 开启规则，error 级别错误（触发时，程序退出）
        //     'error',
        //     // 规则配置项 1，具体见规则文档
        //     'single',
        //     // 规则配置项 2，具体见规则文档
        //     {
        //         avoidEscape: true
        //     }
        // ]
    },
    // 扩展就是直接使用已经封装好的规则列表，一般支持三种类型
    // eslint: 开头的是官方封装好的，只有两个 recommended，all
    // plugin: 开头的是插件类型，在扩展中引入插件
    // eslint-config- 开头的就是普通的扩展包，官方规定扩展必须以 eslint-config- 开头，使用时可以省略这个头部
    extends: [
        'eslint:recommended',
        'plugin:vue/recommended',
        'plugin:prettier/recommended'
    ],
    // 虽然官方提供了上百种的规则可供选择，但是这不够，因为官方的规则只能检查标准的 JavaScript 语法
    // 如果是 JSX 或 Vue 单文件组件，就束手无策了
    // 这时候需要安装 eslint 插件，来定制一些特定规则
    // 官方规定插件必须以 eslint-plugin- 开头，使用时可以省略这个头部
    // 或者是在扩展中引入插件，`plugin:${pluginName}/${configName}`
    plugins: []
};

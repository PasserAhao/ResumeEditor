module.exports = {
  root: true,
  // 设置我们的运行环境为浏览器 + es2021 + node ,否则eslint在遇到 Promise，window等全局对象时会报错
  "env": {
    "browser": true,
    // "es2021": true,
    "node": true,
    'vue/setup-compiler-macros': true
  },
  "extends": [
    "eslint:recommended",
    "plugin:vue/essential",
    '@vue/prettier',
    '@vue/prettier/@typescript-eslint',
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended"
  ],
  // 支持ts的最新语法
  'parser': 'vue-eslint-parser',
  "parserOptions": {
    "ecmaVersion": "latest",
    "parser": {
      "ts": "@typescript-eslint/parser",
      "js": "@typescript-eslint/parser",
      "<template>": "espree"
    },
    "sourceType": "module",
    "requireConfigFile": false,
  },
  plugins: [
    'vue',
    '@typescript-eslint',
    'prettier'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    "prettier/prettier": "off",
    // 允许有不规则的空格
    "no-irregular-whitespace": "off"
    // '@typescript-eslint/no-unused-vars': 'error',
    // // 允许非空断言
    // '@typescript-eslint/no-non-null-assertion': 'off',
    // // 允许自定义模块和命名空间
    // '@typescript-eslint/no-namespace': 'off',
    // // 允许对this设置alias
    // '@typescript-eslint/no-this-alias': 'off',
    // // 允许使用any类型
    // '@typescript-eslint/no-explicit-any': ['off'],
  }
}

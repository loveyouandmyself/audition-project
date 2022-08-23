module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    // project: 'tsconfig.json',
    sourceType: 'module',
  },
  env: {
    node: true,
    es6: true,
    jest: true,
  },
  extends: [
    'airbnb-base/legacy',
    'prettier',
    'plugin:@typescript-eslint/recommended',
  ],
  plugins: [
    '@typescript-eslint',
    'typescript',
    'prettier',
    'import',
  ],
  rules: {
    'quotes': [1, 'single'],
    'class-methods-use-this': 0,
    'no-underscore-dangle': 0,
    'new-cap': ['error', { 'properties': false, 'capIsNew': false }],
    'import/no-extraneous-dependencies': [
      2,
      {
        optionalDependencies: true,
        devDependencies: ['**/tests/**.js', '/mock/**/**.js', '**/**.test.js', '**/**.spec.ts', '**/**.e2e-spec.ts'],
      },
    ],
    'linebreak-style': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/no-unused-vars': ['error', {
      'args': 'after-used',
    }],
    'semi': [2, 'always'],
    // 大括号内是否允许不必要的空格
    'object-curly-spacing': [2, 'always'],
    // always-multiline：多行模式必须带逗号，单行模式不能带逗号
    'comma-dangle': [2, 'always-multiline'],
    // 逗号前后空格
    'comma-spacing': [2, {
      'before': false,
      'after': true,
    }],
    // 控制逗号出现在行首还是行位
    'comma-style': [2, 'last'],
    // 不允许出现console语句
    'no-console': 2,
    // key后面添加空格
    'key-spacing': ['error', { 'afterColon': true }],
    // 外部作用域中的变量不能与它所包含的作用域中的变量或参数同名
    'no-shadow': 'off',
    // 函数定义的时候不允许出现重复的参数
    'no-dupe-args': 2,
    // 对象中不允许出现重复的键
    'no-dupe-keys': 2,
    // switch语句中不允许出现重复的case标签
    'no-duplicate-case': 2,
    // 不允许出现不规则的空格
    'no-irregular-whitespace': 2,
    // 大括号风格
    'brace-style': [2, '1tbs', { 'allowSingleLine': false }],
    // 强制驼峰命名规则
    'camelcase': [2, { 'properties': 'never' }],
  },
};
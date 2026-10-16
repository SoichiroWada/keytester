import vue from 'eslint-plugin-vue'

export default [
  { ignores: ['dist/**', 'dist.legacy-2018/**', 'node_modules/**'] },
  ...vue.configs['flat/essential'],
  {
    files: ['**/*.{js,mjs,vue}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module'
    },
    rules: {
      'no-debugger': 'error',
      'no-console': 'error'
    }
  }
]

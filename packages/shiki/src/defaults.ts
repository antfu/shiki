import { languages } from './languages'

export const defaultLanguageIds = [
  'c',
  'css',
  'diff',
  'graphql',
  'html',
  'javascript',
  'json',
  'jsonc',
  'jsx',
  'less',
  'markdown',
  'php',
  'postcss',
  'pug',
  'python',
  'rust',
  'scss',
  'shellscript',
  'sql',
  'stylus',
  'toml',
  'ts',
  'tsx',
  'typescript',
  'vue-html',
  'vue',
  'xml',
  'yaml'
]

export const defaultLangs = languages.filter(i => defaultLanguageIds.includes(i.id))

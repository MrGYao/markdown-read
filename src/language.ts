export const LANGUAGES = [
  'apache',
  'shell',
  'text',
  'clike',
  'clike',
  'clike',
  'clojure',
  'cobol',
  'coffeescript',
  'crystal',
  'css',
  'd',
  'dart',
  'diff',
  'django',
  'dockerfile',
  'elixir',
  'elm',
  'erlang',
  'fortran',
  'gherkin',
  'graphql',
  'go',
  'groovy',
  'handlebars',
  'haskell',
  'html',
  'htmlmixed',
  'clike',
  'javascript',
  'javascript',
  'jsx',
  'julia',
  'clike',
  'stex',
  'commonlisp',
  'lua',
  'markdown',
  'mathematica',
  'octave',
  'sql',
  'ntriples',
  'nginx',
  'nim',
  'clike',
  'mllike',
  'pascal',
  'perl',
  'php',
  'powershell',
  'python',
  'r',
  'riscv',
  'ruby',
  'rust',
  'sass',
  'clike',
  'smalltalk',
  'solidity',
  'sparql',
  'sql',
  'stylus',
  'swift',
  'tcl',
  'toml',
  'turtle',
  'js',
  'javascript',
  'jsx',
  'twig',
  'vb',
  'verilog',
  'vhdl',
  'vue',
  'xquery',
  'yaml',
  'yml'
]


export function detectLanguage (className: string): string {
  const languageMatch = className.match(/(?:language|lang)-(\S+)/)
  if (languageMatch) {
    return languageMatch[1]
  }

  for (const lang of LANGUAGES) {
    if (new RegExp(`\\b${lang}\\b`).test(className)) {
      return lang
    }
  }
  return ''
}

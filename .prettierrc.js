export default {
  printWidth: 120,
  singleQuote: true,
  trailingComma: 'all',
  arrowParens: 'avoid',
  semi: true,
  jsonRecursiveSort: true,
  plugins: ['prettier-plugin-tailwindcss', 'prettier-plugin-sort-json'],
  tailwindStylesheet: './src/index.css',
  tailwindFunctions: ['cva', 'twMerge'],
};

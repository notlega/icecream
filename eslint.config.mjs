// @ts-check

import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import globals from 'globals';
import astro from 'eslint-plugin-astro';
import prettier from "eslint-plugin-prettier/recommended"
import simpleImportSort from 'eslint-plugin-simple-import-sort'

export default [
  {
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      ...astro.configs['jsx-a11y-recommended'],
      prettier,
    ],
    plugins: {
      "simple-import-sort": simpleImportSort,
    },
    languageOptions: {
      globals: globals.browser
    },
  },
]

import js from '@eslint/js';
import globals from 'globals';
import { defineConfig } from 'eslint/config';
import prettierRecommended from 'eslint-plugin-prettier/recommended';

export default defineConfig([
  { ignores: ['node_modules/**', 'dist/**', 'build/**', 'out/**'] },
  {
    files: ['**/*.{js,mjs,cjs}'],
    extends: [js.configs.recommended],
    languageOptions: {
      ecmaVersion: 'latest',
      globals: { ...globals.browser, ...globals.node },
    },
    rules: {
      'no-unused-vars': 'warn',
      'no-undef': 'error',
      'no-console': 'warn',
      eqeqeq: 'error',
    },
  },
  prettierRecommended,
]);

import globals from "globals";
import pluginJs from "@eslint/js";

export default [
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        process: 'readonly',
        __dirname: 'readonly',
        module: 'readonly',
        jasmine: 'readonly', 
        describe: 'readonly',
        it: 'readonly',
        expect: 'readonly',
      },
    },
  },
  pluginJs.configs.recommended,
];

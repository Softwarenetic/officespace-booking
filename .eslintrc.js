module.exports = {
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "project": "./tsconfig.eslint.json",
    "tsconfigRootDir": __dirname,
  },
  "extends": [
    "eslint:recommended",
    "standard",
    "prettier",
    "plugin:@typescript-eslint/recommended",
    "airbnb",
    "airbnb-typescript"
  ],
  "plugins": ["@typescript-eslint"],
  "env": {
    "es6": true,
    "node": true
  },
  "ignorePatterns": ["dist", "node_modules", "examples", "scripts", "build"],
  "rules": {
    "class-methods-use-this": "off",
    "import/no-extraneous-dependencies": "off",
    "semi": ["error", "always"],
    "curly": ["error", "all"],
    "brace-style": ["error", "stroustrup"]
  }
}

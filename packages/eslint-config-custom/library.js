
/*
 * This is a custom ESLint configuration for use with
 * typescript packages.
 *
 * This config extends the Vercel Engineering Style Guide.
 * For more information, see https://github.com/vercel/style-guide
 *
 */

module.exports = {
  parserOptions: {},
  globals: {
    React: true,
    JSX: true,
  },
  settings: {
    "import/resolver": {},
  },
  ignorePatterns: ["node_modules/", "dist/"],
};

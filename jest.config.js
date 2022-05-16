const config = {
  // Set up Babel config in jest-preprocess.js
  transform: {
    "^.+\\.js$": "<rootDir>/test-utils/jest-preprocess.js",
  },
  testRegex: "(/test/.*(test|spec))\\.js$",
  moduleDirectories: ["node_modules", __dirname],
  // Works like webpack rules. Tells Jest how to handle imports
  moduleNameMapper: {
    // Mock static file imports and assets which Jest can’t handle
    // stylesheets use the package identity-obj-proxy
    "@spectrum-css/.*": "identity-obj-proxy",
    "@adobe/prism-adobe": "identity-obj-proxy",
    "\\.css$": "identity-obj-proxy",
    // Manual mock other files using file-mock.js
    ".+\\.(jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/__mocks__/file-mock.js",
    "^gatsby-page-utils/(.*)$": `gatsby-page-utils/dist/$1`,
  },
  moduleFileExtensions: ["js", "json", "node"],
  testPathIgnorePatterns: ["node_modules", ".cache", "public"],
  // Gatsby includes un-transpiled ES6 code. Exclude the gatsby module.
  transformIgnorePatterns: ["node_modules/(?!(gatsby)/)"],
  globals: {
    __PATH_PREFIX__: "",
    window: {},
  },
  collectCoverageFrom: [
    "src/**/*.{js,jsx,ts,tsx}",
    "!<rootDir>/src/**/*.stories.js",
    "!<rootDir>/src/**/test/**/*",
    "!<rootDir>/src/components/**/index.js",
    "!<rootDir>/node_modules/",
    "!<rootDir>/test-utils/",
  ],
  testURL: "http://localhost",
  setupFiles: ["<rootDir>/test-utils/loadershim.js", "jest-localstorage-mock"],
  setupFilesAfterEnv: ["<rootDir>/test-utils/setup-test-env.js"],
};

module.exports = config;

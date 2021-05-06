const path = require("path")

exports.onCreateWebpackConfig = ({ actions, getConfig, stage }) => {
  const config = getConfig()

  const coreJs2config = config.resolve.alias["core-js"]
  delete config.resolve.alias["core-js"]
  config.resolve.alias[`core-js/modules`] = `${coreJs2config}/modules`
  try {
    config.resolve.alias[`core-js/es`] = path.dirname(
      require.resolve("core-js/es")
    )
  } catch (err) {}
  config.resolve.fallback = {
    http: require.resolve("stream-http"),
    https: require.resolve("https-browserify"),
    stream: require.resolve("stream-browserify")
  }
  actions.replaceWebpackConfig(config)
}

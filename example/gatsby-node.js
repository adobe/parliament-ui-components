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
  actions.replaceWebpackConfig(config)
}

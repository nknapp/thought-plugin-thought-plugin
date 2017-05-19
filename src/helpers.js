var files = require('customize/helpers-io').files

module.exports = {
  thoughtPluginConfig,
  codeBlock
}

/**
 * Create a [markdown code-block](http://daringfireball.net/projects/markdown/syntax#code) with enough backticks
 *
 * The surrounding fences of a code-block must have more backticks than the maximum number of
 * consecutive backticks in the contents (escaping backticks https://github.com/github/markup/issues/363).
 * This block-helper creates enough and at least three.
 *
 * @return {Promise<string>} the string containing the
 * @example
 * {{#codeBlock}}hbs
 * Some markdown hbs template
 * {{/codeBlock}}
 */
function codeBlock (options) {
  return Promise.resolve(options.fn(this))
    .then(contents => {
      var backticks = contents.match(/`+/g) || []
      // Minimum of three ticks, but more than the ticks in contents
      var maxTicks = backticks.reduce((max, next) => max.length > next.length ? max : '`' + next, '```')
      return `${maxTicks}${contents}${maxTicks}`
    })
}

/**
 * Continue with the thought-configuration of the current plugin
 *
 * The helper loads the thought-configuration from the plugin in the current
 * working directory and passed the resulting JSON as context to
 * the content-block.
 * @param options
 * @returns {Promise}
 * @access public
 */
function thoughtPluginConfig (options) {
  // Load from current working directory (makes it easier to extract this functionality
  // into its only plugin
  var plugin = require(process.cwd())
  return require('customize')()
    .registerEngine('handlebars', docEngine)
    .load(plugin)
    .buildConfig()
    .then((config) => {
      return options.fn(config)
    })
}

/**
 * This engine converts the configuration into a format that may be passed used in the handlebars template
 * for documentation
 * @access private
 */
var docEngine = {
  defaultConfig: {},
  defaultWatched: [],
  preprocessConfig: function (config) {
    return {
      templates: files(config.templates),
      partials: files(config.partials),
      preprocessor: config.preprocessor,
      helpers: config.helpers
    }
  },

  run: function (config) {
    return config
  }
}

/*!
 * thought-plugin-jsdoc <https://github.com/nknapp/thought-plugin-jsdoc>
 *
 * Copyright (c) 2017 Nils Knappmeier.
 * Released under the MIT license.
 */

const path = require('path')

/**
 * Describe your module here
 * @public
 */
module.exports = function thoughtPluginJsdoc (customize) {
  return customize
    .load(require('thought-plugin-jsdoc'))
    .merge({
      handlebars: {
        helpers: require.resolve('./helpers.js'),
        partials: path.join(__dirname, 'partials'),
        templates: path.join(__dirname, 'templates')
      }
    })
}

module.exports.package = require('../package')

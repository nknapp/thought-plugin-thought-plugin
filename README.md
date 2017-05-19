# thought-plugin-thought-plugin 

[![NPM version](https://badge.fury.io/js/thought-plugin-thought-plugin.svg)](http://badge.fury.io/js/thought-plugin-thought-plugin)[![Travis Build Status](https://travis-ci.org/nknapp/thought-plugin-thought-plugin.svg?branch=master)](https://travis-ci.org/nknapp/thought-plugin-thought-plugin)[![Coverage Status](https://img.shields.io/coveralls/nknapp/thought-plugin-thought-plugin.svg)](https://coveralls.io/r/nknapp/thought-plugin-thought-plugin)
> A thought plugin for thought plugins

This plugin is a thought plugin for thought plugins.
It generated the documentation that is usually required for thought-plugins:

* Helpers API
* Partials-Configuration
* Generics about installation and usage
In order to use this plugin for [thought](https://npmjs.com/package/thought),
first add it to the dev-dependencies of your project

```bash
npm install --save-dev thought-plugin-thought-plugin
```

## Usage

You can then add a file `.thought/config.js` to your 
project, with the following contents.

```js
module.exports = {
  plugins: [
    require('thought-plugin-thought-plugin')
  ]
}
```

## Example

There is no example for this plugin. The example
use of this plugin is the plugin itself.


## API (Partials and Helpers)

see [docs/api.md](docs/api.md)

# License

`thought-plugin-thought-plugin` is published under the MIT-license.

See [LICENSE.md](LICENSE.md) for details.


# Release-Notes
 
For release notes, see [CHANGELOG.md](CHANGELOG.md)
 
# Contributing guidelines

See [CONTRIBUTING.md](CONTRIBUTING.md).
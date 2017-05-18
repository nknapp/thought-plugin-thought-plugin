/*!
 * thought-plugin-thought-plugin <https://github.com/nknapp/thought-plugin-thought-plugin>
 *
 * Copyright (c) 2017 Nils Knappmeier.
 * Released under the MIT license.
 */

/* eslint-env mocha */

const thoughtPluginThoughtPlugin = require('../')
const chai = require('chai')
chai.use(require('dirty-chai'))
const expect = chai.expect

describe('thought-plugin-thought-plugin:', function () {
  it("should be executed", function () {
    expect(thoughtPluginThoughtPlugin()).to.equal('thoughtPluginThoughtPlugin')
  })
})

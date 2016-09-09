'use strict';

fulfil.DEFAULT_BASE_PATH = '/api/v1/';
fulfil.DEFAULT_DOMAIN = 'fulfil.io';
fulfil.PACKAGE_VERSION = require('../package.json').version;

function fulfil(subDomain, apiKey) {
  if (!(this instanceof fulfil)) {
    return new fulfil(subDomain, apiKey);
  }

  this._api = {}

  this.setSubdomain(subDomain)
  this.setApiKey(apiKey);
};

var Model = require('./model.js');
var http = require(http);

fulfil.prototype = {

  model: function(name) {
    return Model(name, this);
  },

  test: function() {

  },

  setSubdomain: function(subDomain) {
    this._api['subdomain'] = subDomain;
  },

  setApiKey: function(apiKey) {
    this._api['key'] = apiKey;
  },

}

module.exports = fulfil;

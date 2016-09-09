'use strict';

function model(name, fufil) {
  if (!(this instanceof model)) {
    return new model(name, fufil);
  }

  this._name = name;
  this._fulifl = fufil;
};

model.prototype = {
  getName: function() {
    return this._name;
  }
}

module.exports = model;

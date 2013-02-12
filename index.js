
/**
 * Module dependencies
 */
var Resource       = require('deployd/lib/resource'),
    util           = require('util'),
    random         = require('random');

/**
 * Module setup.
 */
function Random( options ) {
  Resource.apply(this, arguments);
}

util.inherits( Random, Resource );

Random.prototype.clientGeneration = true;

Random.basicDashboard = {
  settings: [
    {
      name        : 'length',
      type        : 'number',
      description : 'Length of the random string. Defaults to 10.'
    }
  ]
};

/**
 * Module methodes
 */
Random.prototype.handle = function ( ctx, next ) {
  var options = {
    len: this.config.length || 10
  };
  var randomCallback = function(string){
    ctx.done( null, string[0]);
  }
  var errorCallback = function(type, code, string){
    ctx.done("RANDOM.ORG Error: Type: "+type+", Status Code: "+code+", Response Data: "+string);
  }
  random.generateStrings(randomCallback, options, errorCallback);
};

/**
 * Module export
 */
module.exports = Random;
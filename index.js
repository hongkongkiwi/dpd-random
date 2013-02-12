
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

  Resource.apply( this, arguments );
}
util.inherits( Random, Resource );


/**
 * Module methodes
 */

Random.prototype.handle = function ( ctx, next ) {

  random.strings({
    "length": 10,
    "number": 1,
    "upper": false,
    "digits": false
  },
  function( err, response ) {
    if ( err ) {
      return ctx.done( err );
    }
    ctx.done( null, { message : response[0] } );
  });
};

/**
 * Module export
 */

module.exports = Random;
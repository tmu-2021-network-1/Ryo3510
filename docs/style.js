$( document ).ready( function () {

  var parameters = ( function ( src ) {
    var params = {};
    return params;
  })( location.search );

  // PARAMETER: *s* is the speed of the automatic timeout animation.
  // var s = parameters.s || 3;

  // PARAMETER: *n* is the number of segments.
  var n = ~~parameters.n || 6;
  var tiles = '';
  if ( n ) {
    for ( var i = 0; i <= n * 14; i++ ) {
      tiles += [ '<div class="tile t', i, '"><div class="image"></div></div>' ].join( '' );
    }
  }

  var mykaleidescope = $( '.kaleidoscope' )
    .addClass( 'n' + n )
    .append( tiles );

  var myimage = mykaleidescope.find( '.image' );

  // PARAMETER: *src* is the URL for an alternate image.
  var src = parameters.src;
  if ( src ) {
    myimage.css( 'background-image', [ 'url(', decodeURIComponent( src ), ')' ].join( '' ) );
  }

  // Project changes in cursor (x, y) onto the image background position.
  mykaleidescope.mousemove( function ( e ) {
    var nx = e.pageX, ny = e.pageY;
    move( nx, ny );
  });

  function move( x, y ) {
    myimage.css( 'background-position', [ x + "px", y + "px" ].join( ' ' ) );
  }

});
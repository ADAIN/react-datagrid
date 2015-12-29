/**
 * 제작 : emirue, emirue@adain.kr
 * 날짜 : 2015. 12. 28.
 * 내용 :
 */

getInstantiatorFunction = function() {
  var fns = {};

  return function(len){

    if ( ! fns [len ] ) {

      var args = [];
      var i    = 0;

      for (; i < len; i++ ) {
        args.push( 'a[' + i + ']');
      }

      fns[len] = new Function(
          'c',
          'a',
          'return new c(' + args.join(',') + ')'
      );
    }

    return fns[len];
  }
};
/**
 * 제작 : emirue, emirue@adain.kr
 * 날짜 : 2015. 12. 27.
 * 내용 :
 */

var prefixes = ["ms", "Moz", "Webkit", "O"];

var ELEMENT;
var PREFIX;

ReactStyleNormalizerGetPrefix = function(key){

  if (PREFIX !== undefined){
    return PREFIX;
  }

  ELEMENT = ELEMENT || ReactStyleNormalizerEl();

  var i = 0;
  var len = prefixes.length;
  var tmp;
  var prefix;

  for (; i < len; i++){
    prefix = prefixes[i];
    tmp = prefix + ReactStyleNormalizerToUpperFirst(key);

    if (typeof ELEMENT.style[tmp] != 'undefined'){
      return PREFIX = prefix;
    }
  }

  return PREFIX;
};
/**
 * 제작 : emirue, emirue@adain.kr
 * 날짜 : 2015. 12. 27.
 * 내용 :
 */

var MEMORY = {};
var STYLE;
var ELEMENT;

var PREFIX;

ReactStyleNormalizerGetStylePrefixed = function(key, value){

  ELEMENT = ELEMENT || ReactStyleNormalizerEl();
  STYLE   = STYLE   || ELEMENT.style;

  var k = key;// + ': ' + value

  if (MEMORY[k]){
    return MEMORY[k];
  }

  var prefix;
  var prefixed;

  if (!(key in STYLE)){//we have to prefix

    // if (PREFIX){
    //     prefix = PREFIX
    // } else {
    prefix = ReactStyleNormalizerGetPrefix('appearance');

    //     if (prefix){
    //         prefix = PREFIX = prefix.toLowerCase()
    //     }
    // }

    if (prefix){
      prefixed = prefix + ReactStyleNormalizerToUpperFirst(key);

      if (prefixed in STYLE){
        key = prefixed;
      }
    }
  }

  MEMORY[k] = key;

  return key;
};
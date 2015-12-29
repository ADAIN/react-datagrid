/**
 * 제작 : emirue, emirue@adain.kr
 * 날짜 : 2015. 12. 27.
 * 내용 :
 */

var MEMORY = {};
var STYLE;
var ELEMENT;

ReactStyleNormalizerGetCssPrefixedValue = function(key, value, force){

  ELEMENT = ELEMENT || ReactStyleNormalizerEl();
  STYLE   = STYLE   ||  ELEMENT.style;

  var k = key + ': ' + value;

  if (MEMORY[k]){
    return MEMORY[k];
  }

  var prefix;
  var prefixed;
  var prefixedValue;

  if (force || !(key in STYLE)){

    prefix = ReactStyleNormalizerGetPrefix('appearance');

    if (prefix){
      prefixed = forcePrefixed(key, value);

      prefixedValue = '-' + prefix.toLowerCase() + '-' + value;

      if (prefixed in STYLE){
        ELEMENT.style[prefixed] = '';
        ELEMENT.style[prefixed] = prefixedValue;

        if (ELEMENT.style[prefixed] !== ''){
          value = prefixedValue;
        }
      }
    }
  }

  MEMORY[k] = value;

  return value;
};
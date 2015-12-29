/**
 * 제작 : emirue, emirue@adain.kr
 * 날짜 : 2015. 12. 27.
 * 내용 :
 */

'use strict';

/**
 * Returns the given key prefixed, if the property is found in the prefixProps map.
 *
 * Does not test if the property supports the given value unprefixed.
 * If you need this, use './getPrefixed' instead
 */
ReactStyleNormalizerForcePrefixed = function(key, value){

  if (!ReactStyleNormalizerPrefixProps[key]){
    return key;
  }

  var prefix = ReactStyleNormalizerGetPrefix(key);

  return prefix?
  prefix + ReactStyleNormalizerToUpperFirst(key):
      key;
};
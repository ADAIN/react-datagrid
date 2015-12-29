/**
 * 제작 : emirue, emirue@adain.kr
 * 날짜 : 2015. 12. 27.
 * 내용 :
 */

ReactStyleNormalizerGetPrefixed = function(key, value) {
  if (!ReactStyleNormalizerPrefixProps[key]){
    return key;
  }

  return ReactStyleNormalizerGetStylePrefixed(key, value);
};
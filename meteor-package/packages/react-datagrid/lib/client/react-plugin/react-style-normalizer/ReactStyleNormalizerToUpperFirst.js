/**
 * 제작 : emirue, emirue@adain.kr
 * 날짜 : 2015. 12. 27.
 * 내용 :
 */

ReactStyleNormalizerToUpperFirst = function(str) {
  return str?
  str.charAt(0).toUpperCase() + str.slice(1):
      '';
};
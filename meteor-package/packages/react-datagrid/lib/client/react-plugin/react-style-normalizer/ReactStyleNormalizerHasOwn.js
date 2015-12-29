/**
 * 제작 : emirue, emirue@adain.kr
 * 날짜 : 2015. 12. 27.
 * 내용 :
 */

ReactStyleNormalizerHasOwn = function(obj, prop){
  return Object.prototype.hasOwnProperty.call(obj, prop);
};
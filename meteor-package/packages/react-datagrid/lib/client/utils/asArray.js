/**
 * 제작 : emirue, emirue@adain.kr
 * 날짜 : 2015. 12. 27.
 * 내용 :
 */

asArray = function asArray(x){
  if (!x){
    x = [];
  }

  if (!_.isArray(x)){
    x = [x];
  }

  return x;
};
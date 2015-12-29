/**
 * 제작 : emirue, emirue@adain.kr
 * 날짜 : 2015. 12. 27.
 * 내용 :
 */

findIndexByName = function findIndexByName(arr, name){
  return findIndexBy(arr, function(info){
    return info.name === name;
  });
};
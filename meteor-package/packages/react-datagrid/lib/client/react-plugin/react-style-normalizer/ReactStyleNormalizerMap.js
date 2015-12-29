/**
 * 제작 : emirue, emirue@adain.kr
 * 날짜 : 2015. 12. 27.
 * 내용 :
 */

ReactStyleNormalizerMap = function(fn, item){

  if (!item){
    return;
  }

  if (Array.isArray(item)){
    return item.map(fn).filter(function(x){
      return !!x;
    })
  } else {
    return fn(item);
  }
};
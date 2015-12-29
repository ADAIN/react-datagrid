/**
 * 제작 : emirue, emirue@adain.kr
 * 날짜 : 2015. 12. 27.
 * 내용 :
 */

var el;
ReactStyleNormalizerEl = function() {
  //if(!el && !!global.document){
  //  el = global.document.createElement('div');
  //}

  if (!el){
    el = {style: {}};
  }

  return el;
};
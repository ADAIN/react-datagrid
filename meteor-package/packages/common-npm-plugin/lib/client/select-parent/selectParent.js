/**
 * 제작 : emirue, emirue@adain.kr
 * 날짜 : 2015. 12. 28.
 * 내용 :
 */

var matches;

selectParent = curry(function(selector, node){

  matches = matches || nativeMatches;

  while (node = node.parentElement){
    if (matches.call(node, selector)){
      return node;
    }
  }
});
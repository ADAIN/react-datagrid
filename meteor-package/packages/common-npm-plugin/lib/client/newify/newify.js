/**
 * 제작 : emirue, emirue@adain.kr
 * 날짜 : 2015. 12. 28.
 * 내용 : npm plugin newify
 * URL : https://github.com/radubrehar/newify
 */

newify = function(fn, args) {
  return getInstantiatorFunction(args.length)(fn, args);
};
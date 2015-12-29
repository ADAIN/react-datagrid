/**
 * 제작 : emirue, emirue@adain.kr
 * 날짜 : 2015. 12. 28.
 * 내용 :
 */

inherits = function(ctor, superCtor) {
  ctor.super_ = superCtor;
  ctor.prototype = Object.create(superCtor.prototype, {
    constructor: {
      value       : ctor,
      enumerable  : false,
      writable    : true,
      configurable: true
    }
  });
};
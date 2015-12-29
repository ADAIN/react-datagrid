/**
 * 제작 : emirue, emirue@adain.kr
 * 날짜 : 2015. 12. 28.
 * 내용 :
 */

var proto = Element.prototype;

nativeMatches = proto.matches ||
    proto.mozMatchesSelector ||
    proto.msMatchesSelector ||
    proto.oMatchesSelector ||
    proto.webkitMatchesSelector;
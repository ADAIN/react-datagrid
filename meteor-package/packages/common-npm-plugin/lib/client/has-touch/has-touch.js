/**
 * 제작 : emirue, emirue@adain.kr
 * 날짜 : 2015. 12. 28.
 * 내용 : npm plugin has-touch
 * URL : https://github.com/radubrehar/has-touch
 */

//hasTouch = !!('ontouchstart' in global || (global.DocumentTouch && document instanceof DocumentTouch));
hasTouch = !!('ontouchstart' in window);
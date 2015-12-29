/**
 * 제작 : emirue, emirue@adain.kr
 * 날짜 : 2015. 12. 28.
 * 내용 :
 */

var Region = region;

ReactMenusGetMenuOffset = function(domNode) {
  var menuRegion = Region.from(selectParent('.z-menu', domNode));
  var thisRegion = Region.from(domNode);

  return {
    // pageX : thisRegion.left,
    // pageY : thisRegion.top,

    left  : thisRegion.left - menuRegion.left,
    top   : thisRegion.top  - menuRegion.top,
    width : thisRegion.width,
    height: thisRegion.height
  };
};
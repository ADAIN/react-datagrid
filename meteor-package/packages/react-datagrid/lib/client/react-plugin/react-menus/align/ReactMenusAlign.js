/**
 * 제작 : emirue, emirue@adain.kr
 * 날짜 : 2015. 12. 28.
 * 내용 :
 */

var Region = region;
var getConstrainRegion = ReactMenusGetConstrainRegion;

ReactMenusAlign = function(props, subMenuRegion, targetAlignRegion, constrainTo) {
  var constrainRegion = getConstrainRegion.call(this, constrainTo);

  if (!constrainRegion){
    return;
  }

  if (typeof props.alignSubMenu === 'function'){
    props.alignSubMenu(subMenuRegion, targetAlignRegion, constrainRegion);
  } else {
    var pos = subMenuRegion.alignTo(targetAlignRegion, [
      //align to right
      'tl-tr','bl-br',

      //align to left
      'tr-tl', 'br-bl'
    ], { constrain: constrainRegion });

    //  1: align downwards, -1: align upwards
    return (pos == 'tl-tr' || pos == 'tr-tl') ? 1 : -1;
  }
};
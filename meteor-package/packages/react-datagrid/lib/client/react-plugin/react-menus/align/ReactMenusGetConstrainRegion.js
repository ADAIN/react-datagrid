/**
 * 제작 : emirue, emirue@adain.kr
 * 날짜 : 2015. 12. 28.
 * 내용 :
 */

var Region = region;

var findDOMNode = ReactDOM.findDOMNode;

ReactMenusGetConstrainRegion = function(constrainTo) {
  var constrainRegion;

  if (constrainTo === true){
    constrainRegion = Region.getDocRegion();
  }

  if (!constrainRegion && typeof constrainTo === 'string'){
    var parent = selectParent(constrainTo, findDOMNode(this));
    constrainRegion = Region.from(parent);
  }

  if (!constrainRegion && typeof constrainTo === 'function'){
    constrainRegion = Region.from(constrainTo());
  }

  return constrainRegion;
};
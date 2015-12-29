/**
 * 제작 : emirue, emirue@adain.kr
 * 날짜 : 2015. 12. 28.
 * 내용 :
 */

validate = function(region) {
  var isValid = true;

  if (region.right < region.left){
    isValid = false;
    region.right = region.left;
  }

  if (region.bottom < region.top){
    isValid = false;
    region.bottom = region.top;
  }

  return isValid;
};
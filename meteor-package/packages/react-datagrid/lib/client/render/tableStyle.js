/**
 * 제작 : emirue, emirue@adain.kr
 * 날짜 : 2015. 12. 27.
 * 내용 :
 */

var normalize = ReactStyleNormalizer;

var colors = [
  'blue',
  'red',
  'magenta'
];

tableStyle = function (props){
  if (!normalize) {
    normalize = ReactStyleNormalizer;
  }

  var scrollTop  = props.virtualRendering?
      -(props.topOffset || 0):
      props.scrollTop;

  return normalize({
    transform: 'translate3d(' + -props.scrollLeft + 'px, ' + -scrollTop + 'px, 0px)'
  });
};

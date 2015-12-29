/**
 * 제작 : emirue, emirue@adain.kr
 * 날짜 : 2015. 12. 28.
 * 내용 :
 */

ReactMenusPropTypes = {
  items      : React.PropTypes.array,
  columns    : React.PropTypes.array,
  onMount    : React.PropTypes.func,

  defaultRowActiveStyle: React.PropTypes.object,
  defaultRowOverStyle  : React.PropTypes.object,
  defaultRowStyle      : React.PropTypes.object,

  rowActiveStyle: React.PropTypes.object,
  rowOverStyle  : React.PropTypes.object,
  rowStyle      : React.PropTypes.object,

  cellStyle  : React.PropTypes.object
};
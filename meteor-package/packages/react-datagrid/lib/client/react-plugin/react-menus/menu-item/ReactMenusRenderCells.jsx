/**
 * 제작 : emirue, emirue@adain.kr
 * 날짜 : 2015. 12. 28.
 * 내용 : ReactMenusRenderCells component react class
 */

var renderCell = ReactMenusRenderCell;

ReactMenusRenderCells = function(props) {
  return props.columns.map(renderCell.bind(null, props))
};
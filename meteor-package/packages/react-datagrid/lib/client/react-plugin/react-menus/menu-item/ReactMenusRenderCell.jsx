/**
 * 제작 : emirue, emirue@adain.kr
 * 날짜 : 2015. 12. 28.
 * 내용 : ReactMenusRenderCell component react class
 */

var MenuItemCell = ReactMenusMenuItemCell;

ReactMenusRenderCell = function(props, column) {
  var style = _.extend({}, props.defaultCellStyle, props.cellStyle);

  return <MenuItemCell style={style}>{props.data[column]}</MenuItemCell>;
};
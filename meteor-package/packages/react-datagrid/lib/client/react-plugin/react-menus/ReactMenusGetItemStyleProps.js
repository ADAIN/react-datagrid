/**
 * 제작 : emirue, emirue@adain.kr
 * 날짜 : 2015. 12. 28.
 * 내용 :
 */

ReactMenusGetItemStyleProps = function(props, state) {
  var itemStyle         = _.extend({}, props.defaultItemStyle, props.itemStyle);
  var itemOverStyle     = _.extend({}, props.defaultItemOverStyle, props.itemOverStyle);
  var itemActiveStyle   = _.extend({}, props.defaultItemActiveStyle, props.itemActiveStyle);
  var itemDisabledStyle = _.extend({}, props.defaultItemDisabledStyle, props.itemDisabledStyle);
  var itemExpandedStyle = _.extend({}, props.defaultItemExpandedStyle, props.itemExpandedStyle);
  var cellStyle         = _.extend({}, props.defaultCellStyle, props.cellStyle);

  return {
    itemStyle        : itemStyle,
    itemOverStyle    : itemOverStyle,
    itemActiveStyle  : itemActiveStyle,
    itemDisabledStyle: itemDisabledStyle,
    itemExpandedStyle: itemExpandedStyle,
    cellStyle        : cellStyle
  };
};
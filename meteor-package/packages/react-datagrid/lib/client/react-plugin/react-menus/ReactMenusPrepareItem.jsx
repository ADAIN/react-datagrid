/**
 * 제작 : emirue, emirue@adain.kr
 * 날짜 : 2015. 12. 28.
 * 내용 : ReactMenusPrepareItem component react class
 */

var renderCells     = ReactMenusRenderCells;
var MenuItem        = ReactMenusMenuItem;
var MenuItemFactory = React.createFactory(MenuItem);
var MenuSeparator   = ReactMenusMenuSeparator;

ReactMenusPrepareItem = function(props, state, item, index) {

  var expandedIndex = state.itemProps?
      state.itemProps.index:
      -1;

  if (item === '-'){
    return <MenuSeparator key={index}/>
  }

  var className   = [props.itemClassName, item.cls, item.className]
      .filter(x => !!x)
      .join(' ');

  var itemProps = _.extend({
    className  : className,
    key        : index,
    data       : item,
    columns    : props.columns,
    expanded   : index === expandedIndex,
    disabled   : item.disabled,
    onClick    : item.onClick || item.fn
  }, props.itemStyleProps);

  itemProps.children = renderCells(itemProps);

  if (item.items){
    var Menu = ReactMenusMenu;
    itemProps.children.push(<Menu items={item.items}/>);
  }

  return (props.itemFactory || MenuItemFactory)(itemProps);
};
/**
 * 제작 : emirue, emirue@adain.kr
 * 날짜 : 2015. 12. 28.
 * 내용 : ReactMenusRenderSubMenu component react class
 */

var Region = region;
var cloneElement = React.cloneElement;
var getPositionStyle = ReactMenusGetSubMenuPositionStyle;

ReactMenusRenderSubMenu = function(props, state) {
  var menu = state.menu;

  if (menu && this.didMount){

    var style = getPositionStyle.call(this, props, state);

    menu = cloneElement(menu, _.extend({
      ref          : 'subMenu',
      subMenu      : true,
      parentMenu   : this,
      maxHeight    : state.subMenuMaxHeight,
      onActivate   : this.onSubMenuActivate,
      onInactivate : this.onSubMenuInactivate,
      scrollerProps: props.scrollerProps,
      constrainTo  : props.constrainTo,
      expander     : props.expander,
      theme        : props.theme,
      themes       : props.themes || this.constructor.themes
    }, props.itemStyleProps));

    return <div ref="subMenuWrap" style={style}
                onMouseEnter={this.handleSubMenuMouseEnter}
                onMouseLeave={this.handleSubMenuMouseLeave}
    >{menu}</div>;
  }
};
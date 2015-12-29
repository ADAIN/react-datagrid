/**
 * 제작 : emirue, emirue@adain.kr
 * 날짜 : 2015. 12. 27.
 * 내용 : renderMenu component react class
 */

renderMenu = function (props){
  if (!props.menu){
    return;
  }

  return props.menu({
    className : 'z-header-menu-column',
    gridColumns: props.columns
  });
};
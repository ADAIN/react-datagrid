/**
 * 제작 : emirue, emirue@adain.kr
 * 날짜 : 2015. 12. 28.
 * 내용 : ReactMenus component react class
 * URL : https://github.com/zippyui/react-menus
 */

_.extend(ReactMenusMenu, {
  Item: ReactMenusMenuItem,
  ItemCell: ReactMenusMenuItemCell,
  Separator: ReactMenusMenuSeparator
});

_.extend(ReactMenusMenu.Item, {
  Cell: ReactMenusMenuItemCell
});

ReactMenus = ReactMenusMenu;
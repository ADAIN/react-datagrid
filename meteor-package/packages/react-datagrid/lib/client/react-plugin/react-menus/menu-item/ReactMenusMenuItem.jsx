/**
 * 제작 : emirue, emirue@adain.kr
 * 날짜 : 2015. 12. 28.
 * 내용 : ReactMenusMenuItem component react class
 */

var normalize = ReactStyleNormalizer;

var findDOMNode = ReactDOM.findDOMNode;

var getMenuOffset = ReactMenusGetMenuOffset;

var prepareChildren = ReactMenusPrepareChildren;

var Menu = ReactMenusMenu;
var MenuItemCell = ReactMenusMenuItemCell;

function toUpperFirst(s){
  return s?
          s.charAt(0).toUpperCase() + s.substring(1):
          '';
}

ReactMenusMenuItem = React.createClass({
  displayName: 'ReactMenuItem',

  getInitialState: function() {
    return {};
  },

  getDefaultProps: function() {
    return {
      isMenuItem: true,
      interactionStyles: true,

      defaultStyle: {
        cursor    : 'pointer',
        userSelect: 'none',
        boxSizing : 'border-box'
      },

      expander: '›'
    };
  },

  render: function() {
    var props = this.prepareProps(this.props, this.state);

    return <tr {...props} />;
  },

  componentDidMount: function() {
    this.didMount = true;
  },

  prepareProps: function(thisProps, state) {
    var props = {};

    _.extend(props, thisProps);

    props.theme = this.prepareTheme(props);

    props.mouseOver = !!state.mouseOver;
    props.active    = !!state.active;
    props.disabled    = !!props.disabled;

    props.style     = this.prepareStyle(props);
    props.className = this.prepareClassName(props);

    props.children  = this.prepareChildren(props);

    props.onClick      = this.handleClick.bind(this, props);
    props.onMouseEnter = this.handleMouseEnter.bind(this, props);
    props.onMouseLeave = this.handleMouseLeave.bind(this, props);
    props.onMouseDown  = this.handleMouseDown;
    props.onMouseMove  = this.handleMouseMove;

    return props;
  },

  prepareTheme: function(props){
    var THEMES = props.themes = props.themes || this.constructor.theme || THEME;
    var theme  = props.theme;

    if (typeof theme == 'string'){
      theme = THEMES[theme];
    }

    return theme || THEMES.default;
  },

  handleClick: function(props, event) {

    if (props.disabled){
      event.stopPropagation();
      return;
    }

    (this.props.onClick || this.props.fn || emptyFn)(event, props, props.index);
  },

  handleMouseMove: function(event){

  },

  handleMouseDown: function(event) {

    var mouseUpListener = function(){
      this.setState({
        active: false
      });
      window.removeEventListener('mouseup', mouseUpListener);
    }.bind(this);

    window.addEventListener('mouseup', mouseUpListener);

    this.setState({
      active: true
    });
  },

  showMenu: function(menu, props) {

    props.showMenu(menu, offset);
  },

  handleMouseEnter: function(props, event) {

    if (props.disabled){
      return;
    }

    var offset = {
      x: event.pageX,
      y: event.pageY
    };

    this.setState({
      mouseOver: true
    });

    if (props.onMenuItemMouseOver){

      var menuOffset;

      if (props.menu){
        // console.log(props);
        menuOffset = getMenuOffset(findDOMNode(this));
      }

      // console.log(menuOffset, offset);
      props.onMenuItemMouseOver(props, menuOffset, offset);
    }
  },

  handleMouseLeave: function(props, event) {

    if (props.disabled){
      return;
    }

    var offset = {
      x: event.pageX,
      y: event.pageY
    };

    if (this.didMount){
      this.setState({
        active: false,
        mouseOver: false
      });
    }

    if (props.onMenuItemMouseOut){
      props.onMenuItemMouseOut(props, offset);
    }
  },

  prepareChildren: prepareChildren,

  prepareClassName: function(props) {
    var className = props.className || '';

    className += ' menu-row';

    if (props.disabled){
      className += ' disabled ' + (props.disabledClassName || '');
    } else {

      if (props.mouseOver){
        className += ' over ' + (props.overClassName || '');
      }

      if (props.active){
        className += ' active ' + (props.activeClassName || '');
      }

      if (props.expanded){
        className += ' expanded ' + (props.expandedClassName || '');
      }
    }

    return className;
  },

  prepareDefaultStyle: function(props){
    var defaultStyle = _.extend({}, props.defaultStyle);

    if (props.disabled){
      _.extend(defaultStyle, props.defaultDisabledStyle);
    }

    return defaultStyle;
  },

  prepareComputedStyleNames: function(props){
    var names = ['style'];

    if (props.disabled){
      names.push('disabledStyle');

      return names;
    }

    if (props.expanded){
      names.push('expandedStyle');
    }

    //names is something like ['style','expandedStyle']
    //
    //now we add over and active styles

    var overNames;
    if (props.mouseOver){
      overNames = names.map(function(name){
        return 'over' + toUpperFirst(name);
      });
    }

    var activeNames;
    if (props.active){
      activeNames = names.map(function(name){
        return 'active' + toUpperFirst(name);
      })
    }

    overNames   && names.push.apply(names, overNames);
    activeNames && names.push.apply(names, activeNames);

    return names;
  },

  prepareStyle: function(props) {
    var style = _.extend({}, this.prepareDefaultStyle(props));

    var styleNames = this.prepareComputedStyleNames(props);
    var theme      = props.theme;
    var THEMES     = props.themes;


    if (theme){
      //apply default theme first
      if (props.applyDefaultTheme && theme != THEMES.default && THEMES.default){
        styleNames.forEach(function(styleName){
          _.extend(style, THEMES.default[styleName]);
        });
      }

      //then apply theme
      styleNames.forEach(function(styleName){
        _.extend(style, theme[styleName]);
      })
    }

    (props.onThemeStyleReady || emptyFn)(style, props);

    //now apply non-theme
    styleNames.forEach(function(styleName){
      _.extend(style, props[styleName]);
    });

    (props.onStyleReady || emptyFn)(style, props);

    return normalize(style);


    // _.extend(style, props.defaultStyle, props.style)

    // if (props.disabled){

    //     _.extend(style, props.defaultDisabledStyle, props.disabledStyle)

    // } else {

    //     if (props.interactionStyles){
    //         if (props.expanded){
    //             _.extend(style, props.defaultExpandedStyle, props.expandedStyle)
    //         }

    //         if (props.mouseOver){
    //             _.extend(style, props.defaultOverStyle, props.overStyle)
    //         }

    //         if (props.active){
    //             _.extend(style, props.defaultActiveStyle, props.activeStyle)
    //         }
    //     }
    // }

    // return normalize(style)
  }
});
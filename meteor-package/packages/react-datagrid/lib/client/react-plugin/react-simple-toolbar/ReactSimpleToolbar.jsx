/**
 * 제작 : emirue, emirue@adain.kr
 * 날짜 : 2015. 12. 27.
 * 내용 : ReactSimpleToolbar component react class
 * URL : https://github.com/zippyui/react-simple-toolbar
 */
var DISPLAY_NAME = 'ReactToolbar';

function isRegion(child){
  return child && child.props && child.props.isToolbarRegion;
}

function toAlign(index, regions){
  if (index == 0){
    return 'left';
  }

  if (index == regions.length - 1){
    return 'right';
  }

  return 'center';
}

var THEMES = {
  default: {
    style: {
      //theme styles
      color  : 'rgb(120, 120, 120)',
      border : '1px solid rgb(218, 218, 218)'
    }
  }
};

ReactSimpleToolbar = React.createClass({
  displayName: DISPLAY_NAME,

  getDefaultProps: function() {
    return {
      'data-display-name': DISPLAY_NAME,
      isReactToolbar: true,

      padding: 2,
      theme: 'default',

      defaultStyle  : {
        display  : 'inline-flex',
        boxSizing: 'border-box',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',

        padding: 2
      },

      defaultHorizontalStyle: {
        width       : '100%',
        flexFlow    : 'row',
        alignItems  : 'center', //so items are centered vertically
        alignContent: 'stretch'
      },

      defaultVerticalStyle: {
        height      : '100%',
        flexFlow    : 'column',
        alignItems  : 'stretch',
        alignContent: 'center'
      }
    }
  },

  getInitialState: function(){
    return {};
  },

  render: function(){

    var state = this.state;
    var props = this.prepareProps(this.props, state);

    // this.prepareContent(props)

    return <div {...props} />;
  },

  prepareContent: function(props){

    // var style = {
    // 	display : 'inline-flex',
    // 	position: 'relative',
    // 	overflow: 'hidden',
    // 	flex    : '1 0 0',
    // 	padding : props.style.padding
    // }

    // props.style.padding = 0
  },

  prepareProps: function(thisProps, state) {
    var props = _.extend({}, thisProps);

    props.vertical = props.orientation == 'vertical';
    props.style    = this.prepareStyle(props, state);
    props.children = this.prepareChildren(props, state);

    return props
  },

  prepareStyle: function(props, state) {

    var defaultOrientationStyle = props.defaultHorizontalStyle;
    var orientationStyle = props.horizontalStyle;

    if (props.vertical){
      defaultOrientationStyle = props.defaultVerticalStyle;
      orientationStyle = props.verticalStyle;
    }

    var themes     = ReactSimpleToolbar.themes || {};
    var theme      = themes[props.theme];
    var themeStyle = theme? theme.style: null;

    var style = _.extend({}, props.defaultStyle, defaultOrientationStyle, themeStyle, props.style, orientationStyle);

    return ReactStyleNormalizer(style);
  },

  prepareChildren: function(props) {

    var regionCount = 0;

    var children = [];
    var regions  = [];

    React.Children.forEach(props.children, function(child){
      if (isRegion(child)){
        regions.push(child);
        regionCount++
      }
    }, this);


    var regionIndex = -1;
    React.Children.forEach(props.children, function(child){
      if (isRegion(child)){
        regionIndex++;
        child = this.prepareRegion(child, regionIndex, regions);
      }

      children.push(child);
    }, this);

    if (!regionCount){
      return this.prepareRegion(
          <ReactSimpleToolbar.Region>
            {children}
          </ReactSimpleToolbar.Region>
      );
    }

    return children;
  },

  prepareRegion: function(region, index, regions) {
    index   = index   || 0;
    regions = regions || [];

    var props = this.props;
    var regionStyle = _.extend({}, props.defaultRegionStyle, props.regionStyle);

    if (props.padding){
      regionStyle.padding = props.padding;
    }

    var style = _.extend({}, regionStyle, region.props.style);
    var align = region.props.align || toAlign(index, regions);

    return _.clone(region, {
      style: style,
      align: align
    })
  }
});

ReactSimpleToolbar.Region = ReactSimpleToolbarRegion;
ReactSimpleToolbar.themes = THEMES;
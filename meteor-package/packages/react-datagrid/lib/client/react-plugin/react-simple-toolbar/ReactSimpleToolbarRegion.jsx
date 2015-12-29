/**
 * 제작 : emirue, emirue@adain.kr
 * 날짜 : 2015. 12. 27.
 * 내용 : ReactSimpleToolbarRegion component react class
 */

var DISPLAY_NAME   = 'ReactToolbarRegion';

var JUSTIFY_MAP = {
  start: 'flex-start',
  left: 'flex-start',

  end: 'flex-end',
  right: 'flex-end'
};

var TEXT_ALIGN = {
  start: 'left',
  left : 'left',

  right: 'right',
  end  :'right'
};

ReactSimpleToolbarRegion = React.createClass({
  displayName: DISPLAY_NAME,

  getDefaultProps: function(){
    return {
      'data-display-name': DISPLAY_NAME,

      isToolbarRegion: true,

      flex: 1,
      flexShrink: null,
      flexBasis : null,

      defaultStyle: {
        boxSizing   : 'border-box',

        // alignSelf   : 'center',
        alignItems  : 'center',
        flexShrink  : 1,
        flexBasis   : 0,

        position    : 'relative',
        display     : 'inline-block',

        overflow    : 'hidden',
        whiteSpace  : 'nowrap',
        textOverflow: 'ellipsis',
      },

      defaultHorizontalStyle: {
        // display : 'inline-flex',
        flexFlow: 'row'
      },

      defaultVerticalStyle: {
        // display : 'flex',
        flexFlow: 'column'
      }
    }
  },

  render: function(){
    var props = this.prepareProps(this.props);

    return <div {...props} />;
  },


  prepareProps: function(thisProps) {
    var props = _.extend({}, thisProps);

    props.vertical = props.orientation == 'vertical';
    props.style    = this.prepareStyle(props);

    return props;
  },

  prepareStyle: function(props) {
    var alignStyle = {
      justifyContent: JUSTIFY_MAP[props.align] || 'center',
      textAlign     : TEXT_ALIGN[props.align] || 'center'
    };

    var defaultOrientationStyle = props.defaultHorizontalStyle;
    var orientationStyle = props.horizontalStyle;

    if (props.vertical){
      defaultOrientationStyle = props.defaultVerticalStyle;
      orientationStyle = props.verticalStyle;
    }

    var style = _.extend({},
        props.defaultStyle,
        defaultOrientationStyle,
        props.style,
        orientationStyle,
        alignStyle
    );

    if (props.flex !== false && props.flex != null){
      var flex;
      var flexShrink = 0;
      var flexBasis  = 0;

      if (typeof props.flex == 'number'){
        flex = props.flex + ' ' + (props.flexShrink || style.flexShrink || flexShrink) + ' ' + (props.flexBasis || style.flexBasis || flexBasis);
      } else {
        flex = props.flex;
      }

      style.flex = flex;
    }

    return ReactStyleNormalizer(style);
  }
});
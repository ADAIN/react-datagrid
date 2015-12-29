/**
 * 제작 : emirue, emirue@adain.kr
 * 날짜 : 2015. 12. 28.
 * 내용 : ReactMenusMenuSeparator component react class
 */

ReactMenusMenuSeparator = React.createClass({
  displayName: 'ReactMenuSeparator',

  getDefaultProps: function() {
    return {
      size: 1
    };
  },

  render: function() {
    var props = this.prepareProps(this.props);

    return <tr {...props}><td colSpan={10} style={{padding: 0}}></td></tr>;
  },

  prepareProps: function(thisProps) {
    var props = {};

    _.extend(props, thisProps);

    props.style = this.prepareStyle(props);
    props.className = this.prepareClassName(props);

    return props;
  },

  prepareClassName: function(props) {
    var className = props.className || '';

    className += ' menu-separator';

    return className;
  },

  prepareStyle: function(props) {
    var style = {};

    _.extend(style,
        MenuSeparator.defaultStyle,
        MenuSeparator.style,
        {
          height: MenuSeparator.size || props.size
        },
        props.style
    );

    return style;
  }
});

ReactMenusMenuSeparator.defaultStyle = {
  cursor    : 'auto',
  background: 'gray'
};

ReactMenusMenuSeparator.style = {};
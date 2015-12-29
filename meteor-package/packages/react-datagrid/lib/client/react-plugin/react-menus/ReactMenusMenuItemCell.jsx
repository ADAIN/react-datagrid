/**
 * 제작 : emirue, emirue@adain.kr
 * 날짜 : 2015. 12. 28.
 * 내용 : ReactMenusMenuItemCell component react class
 */

ReactMenusMenuItemCell = React.createClass({
  displayName: 'ReactMenuItemCell',

  getDefaultProps: function() {
    return {
      defaultStyle: {
        padding: 5,
        whiteSpace: 'nowrap'
      }
    }
  },

  render: function() {
    var props    = this.prepareProps(this.props);
    var children = props.children;

    if (props.expander){
      children = props.expander === true? '›': props.expander;
    }

    return (
        <td {...props}>
          {children}
        </td>
    );
  },

  prepareProps: function(thisProps) {
    var props = {};

    _.extend(props, thisProps);

    props.style = this.prepareStyle(props);

    return props;
  },

  prepareStyle: function(props) {
    var style = {};

    _.extend(style, props.defaultStyle, props.style);

    // if (props.itemIndex != props.itemCount - 1){
    //     style.paddingBottom = 0
    // }

    return style;
  }
});
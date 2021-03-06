/**
 * 제작 : emirue, emirue@adain.kr
 * 날짜 : 2015. 12. 29.
 * 내용 : ReactLoadMaskLoader component react class
 */

ReactLoadMaskLoader = React.createClass({
  displayName: 'Loader',
  
  getDefaultProps: function(){
    return {
      defaultStyle: {
        margin: 'auto',
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0
      },
      defaultClassName: 'loader',
      size: 40
    };
  },
  
  render: function() {
    var props = _.extend({}, this.props);
    
    this.prepareStyle(props);
    
    props.className = props.className || '';
    props.className += ' ' + props.defaultClassName;
    
    return React.DOM.div(props,
        <div className="loadbar loadbar-1" />,
        <div className="loadbar loadbar-2" />,
        <div className="loadbar loadbar-3" />,
        <div className="loadbar loadbar-4" />,
        <div className="loadbar loadbar-5" />,
        <div className="loadbar loadbar-6" />,
        <div className="loadbar loadbar-7" />,
        <div className="loadbar loadbar-8" />,
        <div className="loadbar loadbar-9" />,
        <div className="loadbar loadbar-10" />,
        <div className="loadbar loadbar-11" />,
        <div className="loadbar loadbar-12" />
    );
  },
  
  prepareStyle: function(props){
    
    var style = {};
    
    _.extend(style, props.defaultStyle);
    _.extend(style, props.style);
    
    style.width = props.size;
    style.height = props.size;
    
    props.style = style;
  }
});
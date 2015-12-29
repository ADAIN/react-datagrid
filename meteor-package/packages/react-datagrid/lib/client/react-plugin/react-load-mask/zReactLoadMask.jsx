/**
 * 제작 : emirue, emirue@adain.kr
 * 날짜 : 2015. 12. 29.
 * 내용 : ReactLoadMask component react class
 * URL : https://github.com/radubrehar/react-load-mask
 */

var Loader = ReactLoadMaskLoader;

ReactLoadMask = React.createClass({
  displayName: 'LoadMask',
  
  getDefaultProps: function(){
    
    return {
      visible: false,
      visibleDisplayValue: 'block',
      defaultStyle: {
        background: 'rgba(128, 128, 128, 0.5)',
        position: 'absolute',
        width   : '100%',
        height  : '100%',
        display : 'none',
        top: 0,
        left: 0
      }
    };
  },
  
  render: function(){
    var props = _.extend({}, this.props);
    
    props.style = this.prepareStyle(props);
    
    props.className = props.className || '';
    props.className += ' loadmask';
    
    return <div {...props}>
      <Loader size={props.size}/>
    </div>;
  },
  
  prepareStyle: function(props){
    
    var style = _.extend({}, props.defaultStyle, props.style);
    
    style.display = props.visible?
        props.visibleDisplayValue:
        'none';
    
    return style;
  }
});
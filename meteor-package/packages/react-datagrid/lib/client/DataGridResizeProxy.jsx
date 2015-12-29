/**
 * 제작 : emirue, emirue@adain.kr
 * 날짜 : 2015. 12. 27.
 * 내용 : DataGridResizeProxy component react class
 */

DataGridResizeProxy = React.createClass({

  displayName: 'ReactDataGrid.ResizeProxy',

  //propTypes: {
  //  active: React.PropTypes.bool
  //},

  getInitialState: function(){
    return {
      offset: 0
    }
  },

  render() {
    var props = _.extend({}, this.props);
    var state = this.state;

    var style  = {};
    var active = props.active;

    if (active){
      style.display = 'block';
      style.left    = state.offset;
    }

    return <div className='z-resize-proxy' style={style} />;
  }
});
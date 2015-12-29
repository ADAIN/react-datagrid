/**
 * 제작 : emirue, emirue@adain.kr
 * 날짜 : 2015. 12. 27.
 * 내용 :
 */

function getVisibleInfo(col){
  var visible = true;
  var defaultVisible;

  if (col.hidden != null){
    visible = !col.hidden;
  } else if (col.visible != null){
    visible = !!col.visible;
  } else {
    //no visible or hidden specified
    //so we look for defaultVisible/defaultHidden

    if (col.defaultHidden != null){
      defaultVisible = !col.defaultHidden;
    } else if (col.defaultVisible != null){
      defaultVisible = !!col.defaultVisible;
    }

    visible = defaultVisible;
  }

  return {
    visible: visible,
    defaultVisible: defaultVisible
  };
}

DataGridColumn = function(col, props){

  col = _.extend({}, DataGridColumn.defaults, col);

  //title
  if (!col.title){
    col.title = _.humanize(col.name);
  }

  //sortable
  if (props && !props.sortable){
    col.sortable = false;
  }
  col.sortable = !!col.sortable;

  //resizable
  if (props && props.resizableColumns === false){
    col.resizable = false;
  }
  col.resizable = !!col.resizable;

  //filterable
  if (props && props.filterable === false){
    col.filterable = false;
  }
  col.filterable = !!col.filterable;

  var visibleInfo = getVisibleInfo(col);
  var visible = visibleInfo.visible;

  if (visibleInfo.defaultVisible != null){
    col.defaultHidden  = !visibleInfo.defaultVisible;
    col.defaultVisible = visibleInfo.defaultVisible;
  }

  //hidden
  col.hidden = !visible;
  //visible
  col.visible  = visible;

  if (col.width == null && col.defaultWidth){
    col.width = col.defaultWidth;
  }

  //flexible
  col.flexible = !col.width;

  return col;
};

DataGridColumn.displayName = 'DataGridColumn';

DataGridColumn.defaults = {
  sortable  : true,
  filterable: true,
  resizable : true,
  defaultVisible: true,
  type      : 'string'
};
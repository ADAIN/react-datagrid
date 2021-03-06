/**
 * 제작 : emirue, emirue@adain.kr
 * 날짜 : 2015. 12. 29.
 * 내용 :
 */

var Region     = region;
var DragHelper = dragHelper;

DataGridSetupColumnResize = function(header, props, column, event){

  event.preventDefault();

  var columns = props.columns;
  var index = findIndexByName(columns, column.name);
  var proxyLeft = Region.from(event.target).right;

  var headerNode = header.getDOMNode();

  var constrainTo = Region.from(headerNode);

  DragHelper(event, {
    constrainTo: constrainTo,

    onDragStart: function(event, config){

      header.onResizeDragStart({
        resizing       : true,
        resizeColumn   : column,
        resizeProxyLeft: proxyLeft
      });
    },

    onDrag: function(event, config){
      var diff = config.diff.left;

      header.onResizeDrag({
        resizeProxyDiff: diff
      });
    },

    onDrop: function(event, config){

      var diff = config.diff.left;
      var columnHeaders = headerNode.querySelectorAll('.' + props.cellClassName);
      var nextColumn    = diff > 0?
          null:
          columns[index + 1];

      var columnSize = Region.from(columnHeaders[index]).width;
      var nextColumnSize;
      var firstSize  = columnSize + diff;
      var secondSize = 0;

      // if (firstSize < column.minWidth){
      //     firstSize = column.minWidth
      //     diff = firstSize - columnSize
      // }

      if (nextColumn){
        nextColumnSize = nextColumn?
            Region.from(columnHeaders[ index + 1]).width
            : 0;

        secondSize = nextColumnSize - diff;

      }

      // if (nextColumn && secondSize < nextColumn.minWidth){
      //     secondSize = nextColumn.minWidth
      //     diff = nextColumnSize - secondSize
      //     firstSize = columnSize + diff
      // }

      var resizeInfo = [{
        name: column.name,
        size: firstSize,
        diff: diff
      }];

      if (nextColumn){
        resizeInfo.push({
          name: nextColumn.name,
          size: secondSize,
          diff: -diff
        });
      }

      header.onResizeDrop({
        resizing: false,
        resizeColumn: null,
        resizeProxyLeft: null
      }, resizeInfo, event);
    }
  })
};
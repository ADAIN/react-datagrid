/**
 * 제작 : emirue, emirue@adain.kr
 * 날짜 : 2015. 12. 27.
 * 내용 : renderRow component react class
 */


renderRow = function (props, data, index, fn){
  var RowFactory = React.createFactory(DataGridRow);
  var renderCell = DataGridRow.renderCell;

  var factory     = props.rowFactory || RowFactory;
  var key         = data[props.idProperty];
  var selectedKey = key;
  var renderKey   = key;

  if (!props.groupBy){
    renderKey = index - props.startIndex;
  }

  var selected = false;

  if (typeof props.selected == 'object' && props.selected){
    selected = !!props.selected[selectedKey];
  } else if (props.selected){
    selected = selectedKey === props.selected;
  }

  var config = assign({}, props.rowProps, {
    selected : selected,

    key      : renderKey,
    data     : data,
    index    : index,

    cellFactory: props.cellFactory,
    renderCell : props.renderCell,
    renderText : props.renderText,
    cellPadding: props.cellPadding,
    rowHeight  : props.rowHeight,
    minWidth   : props.minRowWidth - props.scrollbarSize,
    columns    : props.columns,

    rowContextMenu: props.rowContextMenu,
    showMenu: props.showMenu,

    _onClick: this? this.handleRowClick: null
  });

  var style;
  var rowStyle = props.rowStyle;

  if (rowStyle){
    style = {};

    if (typeof rowStyle == 'function'){
      style = rowStyle(data, config);
    } else {
      assign(style, rowStyle);
    }

    config.style = style;
  }

  var className = props.rowClassName;

  if (typeof className == 'function'){
    className = className(data, config);
  }

  if (className){
    config.className = className;
  }

  if (typeof fn == 'function'){
    config = fn(config);
  }

  var row = factory(config);

  if (row === undefined){
    row = RowFactory(config);
  }

  if (config.selected && this){
    this.selIndex = index;
  }

  // var cached = this.rowCache && this.rowCache[renderKey]

  // if (cached){
  // return React.cloneElement(cached, {
  //     children: config.columns.map(function(col, index){
  //         return renderCell(config, col, index)
  //     })
  // })
  // }

  // if (this.rowCache){
  //     this.rowCache[renderKey] = row
  // }

  return row;
};
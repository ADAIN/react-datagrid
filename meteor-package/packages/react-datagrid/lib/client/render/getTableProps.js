/**
 * 제작 : emirue, emirue@adain.kr
 * 날짜 : 2015. 12. 27.
 * 내용 :
 */

function getData(props){

  if (!props.virtualRendering){
    return props.data
  }

  return slice(props.data, props)
}

getTableProps = function(props, rows){

  rows = rows || getData(props).map(function(data, index){
        return renderRow.call(this, props, data, index + props.startIndex)
      }, this);

  // if (props.topLoader && props.scrollTop < (2 * props.rowHeight)){
  // rows.unshift(props.topLoader)
  // }

  return {
    className: 'z-table',
    style: tableStyle(props),
    children: rows
  }
};
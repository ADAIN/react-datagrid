/**
 * 제작 : emirue, emirue@adain.kr
 * 날짜 : 2015. 12. 29.
 * 내용 :
 */

var getSelected = DataGridGetSelected;

var hasOwn = function(obj, prop){
  return Object.prototype.hasOwnProperty.call(obj, prop);
};

DataGridRowSelect = {

  findInitialSelectionIndex: function(){
    if (!getSelected) {
      getSelected = DataGridGetSelected;
    }
    var selected = getSelected(this.p, this.state);
    var index = undefined;

    if (!Object.keys(selected).length){
      return index;
    }


    var i = 0;
    var data = this.p.data;
    var len = data.length;
    var id;
    var idProperty = this.props.idProperty;

    for (; i < len; i++){
      id = data[i][idProperty];

      if (selected[id]){
        index = i;
      }
    }

    return index;
  },

  notifySelection: function(selected, data){
    if (typeof this.props.onSelectionChange == 'function'){
      this.props.onSelectionChange(selected, data);
    }

    if (!hasOwn(this.props, 'selected')){
      this.cleanCache();
      this.setState({
        defaultSelected: selected
      });
    }
  },

  handleSingleSelection: function(data, event){
    var props = this.p;

    var rowSelected = this.isRowSelected(data);
    var newSelected = !rowSelected;

    var ctrlKey = event.metaKey || event.ctrlKey;
    if (rowSelected && event && !ctrlKey){
      //if already selected and not ctrl, keep selected
      newSelected = true;
    }

    var selectedId = newSelected?
        data[props.idProperty]:
        null;

    this.notifySelection(selectedId, data);
  },


  handleMultiSelection: function(data, event, config){
    if (!getSelected) {
      getSelected = DataGridGetSelected;
    }

    var selIndex = config.selIndex;
    var prevShiftKeyIndex = config.prevShiftKeyIndex;

    var props = this.p;
    var map   = selIndex == null?
                {}:
                _.extend({}, getSelected(props, this.state));

    if (prevShiftKeyIndex != null && selIndex != null){
      var min = Math.min(prevShiftKeyIndex, selIndex);
      var max = Math.max(prevShiftKeyIndex, selIndex);

      var removeArray = props.data.slice(min, max + 1) || [];

      removeArray.forEach(function(item){
        if (item){
          var id = item[props.idProperty];
          delete map[id];
        }
      })
    }

    data.forEach(function(item){
      if (item){
        var id = item[props.idProperty];
        map[id] = item;
      }
    });

    this.notifySelection(map, data);
  },

  handleMultiSelectionRowToggle: function(data, event){
    if (!getSelected) {
      getSelected = DataGridGetSelected;
    }

    var selected   = getSelected(this.p, this.state);
    var isSelected = this.isRowSelected(data);

    var clone = assign({}, selected);
    var id    = data[this.p.idProperty];

    if (isSelected){
      delete clone[id];
    } else {
      clone[id] = data;
    }

    this.notifySelection(clone, data);

    return isSelected;
  },

  handleSelection: function(rowProps, event){

    var props = this.p;

    if (!hasOwn(props, 'selected') && !hasOwn(props, 'defaultSelected')){
      return;
    }

    var isSelected  = this.isRowSelected(rowProps.data);
    var multiSelect = this.isMultiSelect();

    if (!multiSelect){
      this.handleSingleSelection(rowProps.data, event);
      return;
    }

    if (this.selIndex === undefined){
      this.selIndex = this.findInitialSelectionIndex();
    }

    var selIndex = this.selIndex;

    //multi selection
    var index = rowProps.index;
    var prevShiftKeyIndex = this.shiftKeyIndex;
    var start;
    var end;
    var data;

    if (event.metaKey || event.ctrlKey){
      this.selIndex = index;
      this.shiftKeyIndex = null;

      var unselect = this.handleMultiSelectionRowToggle(props.data[index], event);

      if (unselect){
        this.selIndex++;
        this.shiftKeyIndex = prevShiftKeyIndex;
      }

      return;
    }

    if (!event.shiftKey){
      //set selIndex, for future use
      this.selIndex = index;
      this.shiftKeyIndex = null;

      //should not select many, so make selIndex null
      selIndex = null;
    } else {
      this.shiftKeyIndex = index;
    }

    if (selIndex == null){
      data = [props.data[index]];
    } else {
      start = Math.min(index, selIndex);
      end   = Math.max(index, selIndex) + 1;
      data  = props.data.slice(start, end);
    }

    this.handleMultiSelection(data, event, {
      selIndex: selIndex,
      prevShiftKeyIndex: prevShiftKeyIndex
    });
  },


  isRowSelected: function(data){
    var selectedMap = this.getSelectedMap();
    var id          = data[this.props.idProperty];

    return selectedMap[id];
  },

  isMultiSelect: function(){
    if (!getSelected) {
      getSelected = DataGridGetSelected;
    }

    var selected = getSelected(this.p, this.state);

    return selected && typeof selected == 'object';
  },

  getSelectedMap: function(){
    if (!getSelected) {
      getSelected = DataGridGetSelected;
    }

    var selected    = getSelected(this.p, this.state);
    var multiSelect = selected && typeof selected == 'object';
    var map;

    if (multiSelect){
      map = selected;
    } else {
      map = {};
      map[selected] = true;
    }

    return map;
  }
};

/**
 * 제작 : emirue, emirue@adain.kr
 * 날짜 : 2015. 12. 29.
 * 내용 :
 */

DataGridGetSelected = function(props, state){
  var selected = props.selected == null?
      state.defaultSelected
      :
      props.selected;

  return selected;
};
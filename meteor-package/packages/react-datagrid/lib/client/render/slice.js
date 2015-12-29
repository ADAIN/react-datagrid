/**
 * 제작 : emirue, emirue@adain.kr
 * 날짜 : 2015. 12. 27.
 * 내용 :
 */

slice = function (data, props){

  if (!props.virtualRendering){
    return data;
  }

  return data.slice(
      props.startIndex,
      props.startIndex + props.renderCount
  );
};
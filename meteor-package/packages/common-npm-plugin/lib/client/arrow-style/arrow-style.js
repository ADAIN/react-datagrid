/**
 * 제작 : emirue, emirue@adain.kr
 * 날짜 : 2015. 12. 29.
 * 내용 : npm plugin arrow-style
 * URL : https://github.com/radubrehar/arrow-style
 */

arrowStyle = function (side, config){

  var arrowSize   = config.size   || 8;
  var arrowWidth  = config.width  || arrowSize;
  var arrowHeight = config.height || arrowSize;
  var arrowColor  = config.color  || 'black';
  var includePosition = config.includePosition;

  var style;

  if (side == 'up' || side == 'down'){

    style = {
      borderLeft : arrowWidth + 'px solid transparent',
      borderRight: arrowWidth + 'px solid transparent'
    };

    if (includePosition){
      style.marginTop = -Math.round(arrowHeight/2) + 'px';
      style.position  = 'relative';
      style.top       = '50%';
    }

    style[side === 'up'? 'borderBottom': 'borderTop'] = arrowHeight + 'px solid ' + arrowColor;
  }

  if (side == 'left' || side == 'right'){

    style = {
      borderTop : arrowHeight + 'px solid transparent',
      borderBottom: arrowHeight + 'px solid transparent'
    };

    if (includePosition){
      style.marginLeft = -Math.round(arrowWidth/2) + 'px';
      style.position   = 'relative';
      style.left       = '50%';
    }

    style[side === 'left'? 'borderRight': 'borderLeft'] = arrowWidth + 'px solid ' + arrowColor;
  }

  return style;
};
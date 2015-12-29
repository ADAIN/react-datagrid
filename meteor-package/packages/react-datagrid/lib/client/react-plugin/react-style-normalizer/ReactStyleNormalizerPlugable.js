/**
 * 제작 : emirue, emirue@adain.kr
 * 날짜 : 2015. 12. 27.
 * 내용 :
 */

ReactStyleNormalizerPlugable = function(target){
  target.plugins = target.plugins || [
        (function(){
          var values = {
            'flex':1,
            'inline-flex':1
          };

          return function(key, value){
            if (key === 'display' && value in values){
              return {
                key  : key,
                value: ReactStyleNormalizerGetCssPrefixedValue(key, value, true)
              }
            }
          }
        })()
      ];

  target.plugin = function(fn){
    target.plugins = target.plugins || [];

    target.plugins.push(fn);
  };

  return target;
};
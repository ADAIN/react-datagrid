/**
 * 제작 : emirue, emirue@adain.kr
 * 날짜 : 2015. 12. 27.
 * 내용 : react npm plugin react-style-normalizer
 * URL : https://github.com/radubrehar/react-style-normalizer
 */

function plugins(key, value){

  var result = {
        key  : key,
        value: value
      };

  (RESULT.plugins || []).forEach(function(fn){

    var tmp = ReactStyleNormalizerMap(function(res){
      return fn(key, value, res)
    }, result);

    if (tmp){
      result = tmp;
    }
  });

  return result;
}

function normalize(key, value){

  var result = plugins(key, value);

  return ReactStyleNormalizerMap(function(result){
    return {
      key  : ReactStyleNormalizerGetPrefixed(result.key, result.value),
      value: result.value
    }
  }, result);

  return result;
}

var RESULT = function(style){

  var k;
  var item;
  var result = {};

  for (k in style) if (ReactStyleNormalizerHasOwn(style, k)){
    item = normalize(k, style[k]);

    if (!item){
      continue;
    }

    ReactStyleNormalizerMap(function(item){
      result[item.key] = item.value;
    }, item);
  }

  return result;
};

ReactStyleNormalizer = function(style) {
  return ReactStyleNormalizerPlugable(RESULT(style));
};
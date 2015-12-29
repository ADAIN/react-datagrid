/**
 * 제작 : emirue, emirue@adain.kr
 * 날짜 : 2015. 12. 27.
 * 내용 :
 */

getDataForGroup = function getDataForGroup(keys, data){

  if (typeof keys == 'string'){
    keys = [keys];
  }

  var groupData = data;

  if (groupData){
    if (keys){
      keys.forEach(function(key){
        if (groupData && groupData.data){
          groupData = groupData.data[key];
        } else {
          groupData = undefined;
        }
      })
    }

    //If it is undefined we can stop processing here and return
    if (!groupData){
      return groupData;
    }

    //otherwise, there are other subgroups in this group
    //so go fetch data from them all and return the result
    var getDeepData = function(group, resultArray){
      var data = group.data;
      var keys = group.keys;

      if (group.leaf && Array.isArray(data)){
        resultArray.push.apply(resultArray, data);
      } else {
        keys.forEach(function(key){
          getDeepData(data[key], resultArray);
        })
      }

      return resultArray;
    };

    return getDeepData(groupData, []);
  }
};
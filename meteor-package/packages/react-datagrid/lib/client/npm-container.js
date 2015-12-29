/**
 * 제작 : emirue, emirue@adain.kr
 * 날짜 : 2015. 12. 27.
 * 내용 :
 */

Meteor.npmRequire = function(moduleName) {
  var module = Npm.require(moduleName);
  return module;
};

Meteor.require = function(moduleName) {
  console.warn('Meteor.require is deprecated. Please use Meteor.npmRequire instead!');
  return Meteor.npmRequire(moduleName);
};
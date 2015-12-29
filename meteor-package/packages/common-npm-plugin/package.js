/**
 * 작성자 : emirue, emirue@adain.kr
 * 날짜 : 12/28/15
 * 내용 : common npm plugin package
 */
if (this.getFilesFromFolder === undefined) {
  this.getFilesFromFolder = function (packageName, folder) {
    // local imports
    var _ = Npm.require("underscore");
    var fs = Npm.require("fs");
    var path = Npm.require("path");
    // helper function, walks recursively inside nested folders and return absolute filenames
    function walk(folder) {
      var filenames = [];
      // get relative filenames from folder
      var folderContent = fs.readdirSync(folder);
      // iterate over the folder content to handle nested folders
      _.each(folderContent, function (filename) {
        // build absolute filename
        var absoluteFilename = folder + path.sep + filename;
        // get file stats
        var stat = fs.statSync(absoluteFilename);
        if (stat.isDirectory()) {
          // directory case => add filenames fetched from recursive call
          filenames = filenames.concat(walk(absoluteFilename));
        }
        else {
          // file case => simply add it
          filenames.push(absoluteFilename);
        }
      });
      return filenames;
    }

    // save current working directory (something like "/home/user/projects/my-project")
    var cwd = process.cwd();
    // chdir to our package directory
    process.chdir("packages" + path.sep + packageName);
    // launch initial walk
    var result = walk(folder);
    // restore previous cwd
    process.chdir(cwd);
    return result;
  };
}

Package.describe({
  name: 'common-npm-plugin',
  summary: 'common npm plugin',
  version: '1.0.0',
  git: ''
});

Package.onUse(function (api) {
  var packageName = 'common-npm-plugin';
  var usePackages = [
    'underscore',
    'jquery'
  ];

  api.use(usePackages, ['client']);
  api.imply(usePackages);

  //-----------------------------------------------------
  // Client
  //-----------------------------------------------------
  var files = this.getFilesFromFolder(packageName, 'lib/client');
  api.addFiles(files, 'client');

  //=====================================================
  //
  // Exports
  //
  //=====================================================

  //-----------------------------------------------------
  // Client
  //-----------------------------------------------------
  // arrow-style
  api.export('arrowStyle', 'client');
  // base64-js
  api.export('b64ToByteArray', 'client');
  api.export('uint8ToBase64', 'client');
  // buffer
  api.export('Buffer', 'client');
  // drag-helper
  api.export('once', 'client');
  api.export('dragHelper', 'client');
  // events
  api.export('events', 'client');
  // has-touch
  api.export('hasTouch', 'client');
  // hasown
  api.export('hasOwn', 'client');
  // newify
  api.export('getInstantiatorFunction', 'client');
  api.export('newify', 'client');
  // object-assign
  api.export('assign', 'client');
  // region
  api.export('inherits', 'client');
  api.export('statics', 'client');
  api.export('validate', 'client');
  api.export('region', 'client');
  // region-align
  api.export('ALIGN_TO_NORMALIZED', 'client');
  api.export('COMPUTE_ALIGN_REGION', 'client');
  // point-in-triangle
  api.export('pointInTriangle', 'client');
  // select-parent
  api.export('curry', 'client');
  api.export('nativeMatches', 'client');
  api.export('selectParent', 'client');
  // ieee754
  api.export('ieee754ToArray', 'client');
});
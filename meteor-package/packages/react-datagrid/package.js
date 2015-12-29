/**
 * 작성자 : emirue, emirue@adain.kr
 * 날짜 : 12/27/15
 * 내용 : common ui data grid package
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
  name: 'adain:react-datagrid',
  summary: 'react-datagrid',
  version: '0.0.1',
  git: 'https://github.com/ADAIN/react-datagrid/meteor-package/packages/react-datagrid'
});

Package.onUse(function (api) {

  var packageName = "common-ui-data-grid";
  var usePackages = [
    'underscore',
    'jquery',
    'react',
    'common-npm-plugin'
  ];

  api.versionsFrom('1.0');
  api.use(usePackages, ['client', 'server']);

  //=====================================================
  //
  // FILES
  //
  //=====================================================

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
  // urils
  api.export('copyIf', 'client');
  api.export('groupByFields', 'client');
  api.export('groupArrayByField', 'client');

  // react-load-mask
  api.export('ReactLoadMaskLoader', 'client');
  api.export('ReactLoadMask', 'client');

  // react-menus
  api.export('ReactMenusAlign', 'client');
  api.export('ReactMenusGetConstrainRegion', 'client');
  api.export('ReactMenusMenuItem', 'client');
  api.export('ReactMenusPrepareChildren', 'client');
  api.export('ReactMenusRenderCell', 'client');
  api.export('ReactMenusRenderCells', 'client');
  api.export('ReactMenusThemes', 'client');
  api.export('ReactMenus', 'client');
  api.export('ReactMenusGetItemStyleProps', 'client');
  api.export('ReactMenusGetMenuOffset', 'client');
  api.export('ReactMenusGetSubMenuPositionStyle', 'client');
  api.export('ReactMenusMenu', 'client');
  api.export('ReactMenusMenuItemCell', 'client');
  api.export('ReactMenusMenuSeparator', 'client');
  api.export('ReactMenusPrepareItem', 'client');
  api.export('ReactMenusPropTypes', 'client');
  api.export('ReactMenusRenderChildren', 'client');
  api.export('ReactMenusRenderSubMenu', 'client');
  api.export('ReactMenusScrollContainer', 'client');
  api.export('ReactMenusScroller', 'client');

  // react-simple-toolbar
  api.export('ReactSimpleToolbar', 'client');
  api.export('ReactSimpleToolbarRegion', 'client');

  // react-style-normalizer
  api.export('ReactStyleNormalizerEl', 'client');
  api.export('ReactStyleNormalizerForcePrefixed', 'client');
  api.export('ReactStyleNormalizerGetCssPrefixedValue', 'client');
  api.export('ReactStyleNormalizerGetPrefix', 'client');
  api.export('ReactStyleNormalizerGetPrefixed', 'client');
  api.export('ReactStyleNormalizerGetStylePrefixed', 'client');
  api.export('ReactStyleNormalizerHasOwn', 'client');
  api.export('ReactStyleNormalizerMap', 'client');
  api.export('ReactStyleNormalizerPlugable', 'client');
  api.export('ReactStyleNormalizerPrefixProps', 'client');
  api.export('ReactStyleNormalizerToUpperFirst', 'client');
  api.export('ReactStyleNormalizer', 'client');

  // react-virtual-scroller
  api.export('ExecutionEnvironment', 'client');
  api.export('isEventSupported', 'client');
  api.export('UserAgent_DEPRECATED', 'client');
  api.export('normalizeWheel', 'client');
  api.export('ReactVirtualScroller', 'client');

  // render
  api.export('getGroupedRows', 'client');
  api.export('getTableProps', 'client');
  api.export('renderMenu', 'client');
  api.export('renderRow', 'client');
  api.export('slice', 'client');
  api.export('tableStyle', 'client');

  api.export('DataGridCell');

  api.export('DataGridHeader');

  api.export('DataGridColumn');

  api.export('DataGridRow');

  api.export('DataGridWrapper');

  api.export('DataGridColumnFilter');
  api.export('DataGridGetDefaultProps');
  api.export('DataGridGetSelected');
  api.export('DataGridPaginationToolbar');
  api.export('DataGridPropTypes');
  api.export('DataGridResizeProxy');
  api.export('DataGridGetSelected');
  api.export('DataGrid');

  //-----------------------------------------------------
  // Server
  //-----------------------------------------------------

  //-----------------------------------------------------
  // Both
  //-----------------------------------------------------
});

(function(){
  var webpackify = require('broccoli-webpack'),
  pickFiles = require('broccoli-static-compiler'),
  angularTemplates = require("broccoli-angular-templates-cache"),
  path = require("path"),
  mergeTrees = require('broccoli-merge-trees'),
  dist_dir = path.join(__dirname,'../../../'),
  assets = require('rework-assets'),
  rework = require('broccoli-rework-single'),
  imprt = require('rework-import'),
  ngApp = require(dist_dir+"/ngconfig.json");

  module.exports = {
    webpack: function(){
      var app_dir = path.join(dist_dir,'/app');
      var core_dir = path.join(dist_dir,'/core');
      var vendors_dir = path.join(dist_dir,'/vendors');

      var webpack_config = require(dist_dir+'/webpack.config.js');
      return webpackify(app_dir,webpack_config);
    },
    cacheTemplates: function(){
      var templates_dir = path.join(dist_dir,'/app/templates');
      return angularTemplates(templates_dir,{
        srcDir: './',
        absolute: true,
        destDir: path.join(dist_dir,'/app'),
        minify: {
          collapseWhitespace: true,
        },
        fileName:'templates.js',
        moduleName:ngApp.app_name
      });
    },
    pickIndex: function(){
      var app_dir = path.join(dist_dir,'/app');
      return pickFiles(app_dir,{
        srcDir: './',
        files: ['index.html'],
        destDir: './'
      });
    },
    pickAssets: function(){
      var app_dir = path.join(dist_dir,'/app');
      return pickFiles(app_dir,{
        srcDir: './assets',
        destDir: './assets'
      });
    },
    vendorsCss: function(){
      var vendors_css = path.join(dist_dir,'/vendors');
      return rework(vendors_css,'./vendors.css','./vendors.css',{
        use: function(css) {
          css.use(imprt());
          css.use(assets({
            src: path.join(vendors_css,'../'),
            dest: path.join(vendors_css,'../includes'),
            prefix: 'includes/',
            onError: console.error
          }))
        }
      });
    },
    copyIncludes: function(){
      var app_dir = path.join(dist_dir,'/includes');
      return pickFiles(app_dir,{
        srcDir: './',
        destDir: './includes'
      });
    }
  }
})();

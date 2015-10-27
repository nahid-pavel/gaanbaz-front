var fs = require('fs'),
recursive = require('recursive-readdir'),
util = require('util');
var Lineup = require('lineup');
lineup = new Lineup({identifier:'fs-concatenate',showDateTime:false});

var Module = {
  writeAsModule: function(modulePath,string,cb){
    module_string = 'module.exports = '+ util.inspect(string)
    fs.writeFile(modulePath,module_string,'utf-8',function(err){
      if(err){
        cb(err,null);
      }else{
        cb(null,'created module at path '+modulePath);
      }
    });
  },
  concatenate: function(directory,ignore,modulePath){
    var self= this;
    var data = {};
    var re = /\\/g;
    var subst = '\\\\';
    recursive(directory,ignore,function (err, files){
      if(err){
        self.buildError(err);
      }
      var c=0;
      files.forEach(function(file){
        file = file.replace(re, subst);
        c++;
        fs.readFile(file,'utf-8',function(err,html){
          if (err) throw err;
          data[file]=html;
          if (0===--c) {
            self.writeAsModule(modulePath,data,function(err,message){
              if(err){
                self.buildError(err);
              }
              else{
                self.buildSuccess(message);
              }
            });
          }
        });
      });
    });
  },

  buildError: function(err){
    lineup.log.error(err);
    process.exit(1);
  },
  buildSuccess: function(success){
    lineup.log.success(success);
    process.exit(0);
  }
}

module.exports = Module;

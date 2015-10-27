(function(){
  var Promise = require("bluebird");
  var _ = require("lodash");
  var fs = require("fs");
  var path = require("path");
  var mkdirp = require("mkdirp");
  var Lineup = require("lineup");
  var snippets = require("../snippets");
  var changeCase = require("change-case");
  var lineup = new Lineup();

  var entities = {
    controller: 'controllers',
    directive: 'directives',
    filter: 'filters',
    service: 'services',
    factory: 'store',
    initializer: 'initializers'
  };

  var entities_suffix = {
    controller: 'Controller',
    directive: '',
    filter: 'Filter',
    service: 'Service',
    factory: 'Factory',
    initializer: ''
  };

  var app_path = path.join(__dirname,'../../../');

  module.exports = {

    init: function(ngconfig,args){

      var args = args;

      function getEntityName(entity,name,isCoffee){
        var entityName;
        if(entity !== 'directive'){
          entityName = name + entities_suffix[entity];
        }else{
          name = changeCase.sentenceCase(name);
          name = changeCase.camelCase(name);
          entityName = name;
        }
        if(isCoffee){
          entityName = entityName+ ".coffee";
        }else{
          entityName = entityName+ ".js";
        }
        return entityName;
      };

      function getEntityFileName(entity,name,isCoffee){
        var entityName;
        if(entity !== 'directive'){
          entityName = name;
        }else{
          name = changeCase.sentenceCase(name);
          name = changeCase.camelCase(name);
          entityName = name;
        }
        if(isCoffee){
          entityName = entityName+ ".coffee";
        }else{
          entityName = entityName+ ".js";
        }
        return entityName;
      };

      function getEntitySnippet(entity,isCoffee){
        var entitySnippet;
        entitySnippet = "content"+path.sep+entity+path.sep+entity;
        if(isCoffee){
          entitySnippet = entitySnippet + ".coffee";
        }else{
          entitySnippet = entitySnippet + ".js";
        }
        console.log(entitySnippet);
        return snippets[entitySnippet].replace(/{{name}}/g,args.name);
      };

      function getEntityTestSnippet(entity,isCoffee){
        var entitySnippet;
        entitySnippet = "content"+path.sep+entity+path.sep+"test";
        if(isCoffee){
          entitySnippet = entitySnippet + ".coffee";
        }else{
          entitySnippet = entitySnippet + ".js";
        }
        if(entity !== 'directive'){
          return snippets[entitySnippet].replace(/{{name}}/g,args.name);
        }else{
          var directiveElement = changeCase.paramCase(args.name);
          entitySnippet = snippets[entitySnippet].replace(/{{name}}/g,args.name);
          entitySnippet = entitySnippet.replace(/{{element}}/g,"<"+directiveElement+"></"+directiveElement+">");
          return entitySnippet;
        }
      };

      function generateEntity(name,file,entity,isCoffee){
        var defer = Promise.defer();

        // Grabbing entity folder
        var entity_folder = entities[entity];

        // Grabbing full path to entity one is going to create
        var entity_app_path = path.join(app_path,'app/'+entity_folder+'/'+file);

        // check if same entity exists
        var isThere = fs.existsSync(entity_app_path);
        if(isThere){
          // Throw error if entity already exists
          defer.reject("I am afraid " + file + " already exists");
        }else{
          var entity_file = getEntitySnippet(entity,isCoffee);
          fs.writeFile(entity_app_path,entity_file,function(err){
            if(err){
              defer.reject("Unable to write file at app/"+entity_folder+"/"+file);
            }else{
              lineup.action.success("create","Created " + entity + " at app/"+entity_folder+"/"+file);
              defer.resolve();
            }
          });
        }
        return defer.promise;
      };

      function generateEntityTest(name,file,entity,isCoffee){

        var defer = Promise.defer();

        if(entity !== 'initializer'){
          // Grabbing entity folder
          var entity_folder = entities[entity];

          // Grabbing full path to entity one is going to create
          var entity_app_path = path.join(app_path,'tests/spec/'+entity_folder);

          // check if same entity exists
          var entity_file = getEntityTestSnippet(entity,isCoffee);

          // create entity dir if not there
          mkdirp.sync(entity_app_path);

          fs.writeFile(entity_app_path+'/'+file,entity_file,function(err){
            if(err){
              defer.reject("Unable to write file at tests/spec/"+entity_folder+"/"+file);
            }else{
              lineup.action.success("create","Created " + entity + " test at tests/spec/"+entity_folder+"/"+file);
              defer.resolve();
            }
          });
        }else{
          defer.resolve('Skipping');
        }
        return defer.promise;
      };

      var defer = Promise.defer();
      if(args.entity_name && args.name){
        var valid_entities = ['controller','directive','filter','service','factory','initializer'];
        if(_.contains(valid_entities,args.entity_name)){

          var entity_name_to_create = getEntityName(args.entity_name,args.name,args.coffee);
          var entity_file_to_create = getEntityFileName(args.entity_name,args.name,args.coffee);

          generateEntity(entity_name_to_create,entity_file_to_create,args.entity_name,args.coffee).then(function(){
            return generateEntityTest(entity_name_to_create,entity_file_to_create,args.entity_name,args.coffee);
          })
          .then(function(){
            defer.resolve(lineup.icon('success'));
          })
          .catch(function(err){
            lineup.log.error(err);
          });
        }else{
          defer.reject(args.entity_name + " is not a valid generator");
        }
      }else{
        defer.reject('Invalid arguments to generate angular entity');
      }
      return defer.promise;
    }
  }
})();

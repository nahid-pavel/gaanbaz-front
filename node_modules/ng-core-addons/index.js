var tasks = require("./tasks/index.js");
var hooks = require("./hooks/generator.js");

module.exports = {
  hooks: [
    {
      name: 'ngcliGenerator',
      init: hooks.init,
      hook_for:'generate'
    }
  ],
  tasks: [
    {
      name: 'ngWebpack',
      init: tasks.webpack
    },
    {
      name: 'ngPickFiles',
      init: tasks.pickIndex
    },
    {
      name: 'cacheTemplates',
      init: tasks.cacheTemplates
    },
    {
      name: 'pickAssets',
      init: tasks.pickAssets
    },
    {
      name:'vendorsCss',
      init: tasks.vendorsCss
    },
    {
      name: 'copyIncludes',
      init: tasks.copyIncludes
    }
  ],
  commands:[
    {
      'name': 'generate',
      'description': 'Generate angular common entities example ng generate controller home',
      options:{
        'entity_name':{
          required: true,
          position: 1,
          description: 'Entity you want to create'
        },
        'name':{
          required: true,
          position: 2,
          description: 'Name of entity'
        },
        'coffee':{
          flag: true,
          description: 'Output coffee file'
        }
      }
    }
  ],
  afterInstall: function(commands){
  }
};

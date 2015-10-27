/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/*
	  Extends boot.js file inside core directory and initiates angular app
	  --------------------------------------------------------------------
	                            NOTICE
	  --------------------------------------------------------------------
	  To keep this file clean make sure you do not write any code inside
	  it , and use it your imports only

	  Extend your manual dependencies inside this file.

	  For example :-
	    require("angular-animate");
	    require("some-other-module");
	    boot(["angular-animate","some-other-module"]);
	*/


	var boot;
	boot = __webpack_require__(1);
	boot();

	/**
	  Uncomment when you create filters
	  require("./filters");
	*/

	/**
	  Uncomment when you create factory
	  require("./services");
	*/

	/**
	  Uncomment when you create services
	  require("./store");
	*/

	/**
	  Uncomment when you create directives
	  require("./directives");
	*/

	/**
	  Uncomment when you create templates
	  require("./templates");
	*/

	/**
	  Uncomment when you create controllers
	  require("./controllers");
	*/


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/**
	----------------------------------------------------------------------
	                          NG CLI BOOT APP
	----------------------------------------------------------------------

	boot.js file will start your angular app.

	What's going on ?

	Extends your manual dependencies
	Resolve initializers
	Bootstrap angular app

	*/

	"use strict";

	var boot, bulk, initAngularApp, initializers;

	// It bootstraps angular app
	initAngularApp = function(hash, dependencies) {

	  angular.element(document).ready(function() {
	    deferredBootstrapper.bootstrap({
	      element: document.body,
	      module: "{@= app_name @}",
	      injectorModules: dependencies,
	      resolve: hash
	    });

	    // Requires hooks just after booting app
	    return __webpack_require__(2);
	  });
	};

	initializers = '@loadInitializers';

	boot = function(dependencies) {
	  var app, deps, identifier, injectorDependencies, mapHash, name, objectKeys, initializers, x;
	  deps = ["ngRoute"];

	  // Look for additional dependencies 
	  if (typeof dependencies === "object") {

	    // Adding dependencies to existing deps
	    deps = deps.concat(dependencies);
	  }

	  // Setting up angular app
	  app = angular.module("{@= app_name @}", deps);

	  // mapHash of sorted initializers
	  mapHash = {};

	  // Injector dependencies
	  injectorDependencies = ["{@= app_name @}"];

	  // Continue if initializers length is greater then 0
	  if (typeof(initializers) !== 'undefined' && Object.keys(initializers).length > 0) {

	    objectKeys = Object.keys(initializers);

	    // Variable to iterate over
	    x = 0;

	    while (x < objectKeys.length) {

	      // Grabbing current item
	      identifier = objectKeys[x];

	      // Getting provider name
	      name = initializers[identifier].provider;

	      // Setting provider name and resolve method
	      mapHash[name] = initializers[identifier].resolve;

	      // If initializer has dependencies , inject them too
	      if (typeof initializers[identifier].dependencies !== "undefined") {

	        injectorDependencies = injectorDependencies.concat(initializers[identifier].dependencies);

	      }

	      x++;

	    }
	  }
	  // Finally initiating angular app
	  initAngularApp(mapHash, injectorDependencies);
	};

	module.exports = boot;


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var app;
	app = angular.module("{@= app_name @}");
	app.config(__webpack_require__(3));
	app.run(__webpack_require__(5));


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var routeMap;

	routeMap = __webpack_require__(4);

	module.exports = /* @ngInject */ ["$routeProvider", "$locationProvider", function($routeProvider, $locationProvider) {
	  angular.forEach(routeMap, function(route) {
	    var url;
	    if (typeof route.otherwise !== "undefined") {
	      $routeProvider.otherwise({
	        redirectTo: route.otherwise
	      });
	    } else {
	      url = route.url;
	      delete route.url;
	      $routeProvider.when(url, route);
	    }
	  });
	}];



/***/ },
/* 4 */
/***/ function(module, exports) {

	/*
	  ----------------------------------------------------------------------
	                            ROUTES
	  ----------------------------------------------------------------------
	  1. Define your routes here.
	  2. If your app does not have routes , simple export an empty object
	      @example
	        module.exports = {}

	  ----------------------------------------
	                EXAMPLE
	  ----------------------------------------
	  {
	    url: "/",
	    templateUrl: "templates/home.html",
	    controller: "homeController"
	  }
	 */
	var routeMap;

	routeMap = [];
	module.exports = routeMap;


/***/ },
/* 5 */
/***/ function(module, exports) {

	// Generated by CoffeeScript 1.7.1

	/* @ngInject */
	module.exports = function($rootScope) {};
	module.exports.$inject = ["$rootScope"];


/***/ }
/******/ ]);
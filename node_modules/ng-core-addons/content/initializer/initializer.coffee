###*
@author
@description
@name {{name}}

--------------------------------------------------------
INITIALIZERS
--------------------------------------------------------

Initializers are special methods and values processed and
computed before bootstrapping your angular app.

Think about a situation you want to fetch some user data
before you bootstrap your angular app.

Example :-

@note Shows an example to fetch user data before bootstraping angular app
and use it later

  resolve: unction($q,$http,userService){
    var deferred = $q.defer();
    $http.get('user').success(function(userData){
      userService = userData;
      defer.resolve('i got user data');
    }).error(function(error){
      defer.reject('i cannot start without user data');
    });
    return deferred.promise;
  }
###

### @ngInject ###
module.exports =
  provider: "{{name}}"
  ### It is required to do DI manually here until i find a way to fix it ###
  resolve: ['$q',($q) -> #@ngInject
    deferred = $q.defer()
    deferred.resolve "echo {{name}} and then start angular app"
    deferred.promise
  ]
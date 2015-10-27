'use strict';

describe('Controller: albumsController', function () {

  // load the controller's module
  beforeEach(angular.mock.module('{@= app_name @}'));

  var albumsController,scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    albumsController = $controller('albumsController', {
      $scope: scope
    });
  }));

  it('should attach greeting to scope', function () {
    expect(scope.greeting).toBe('Hello world from albumsController');
  });
});

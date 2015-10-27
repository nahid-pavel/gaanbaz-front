'use strict';

describe('Controller: songsController', function () {

  // load the controller's module
  beforeEach(angular.mock.module('{@= app_name @}'));

  var songsController,scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    songsController = $controller('songsController', {
      $scope: scope
    });
  }));

  it('should attach greeting to scope', function () {
    expect(scope.greeting).toBe('Hello world from songsController');
  });
});

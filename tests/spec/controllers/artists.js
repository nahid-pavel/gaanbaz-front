'use strict';

describe('Controller: artistsController', function () {

  // load the controller's module
  beforeEach(angular.mock.module('{@= app_name @}'));

  var artistsController,scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    artistsController = $controller('artistsController', {
      $scope: scope
    });
  }));

  it('should attach greeting to scope', function () {
    expect(scope.greeting).toBe('Hello world from artistsController');
  });
});

'use strict';

describe('Controller: homeController', function () {

  // load the controller's module
  beforeEach(angular.mock.module('{@= app_name @}'));

  var homeController,scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    homeController = $controller('homeController', {
      $scope: scope
    });
  }));

  it('should attach greeting to scope', function () {
    expect(scope.greeting).toBe('Hello world from homeController');
  });
});

'use strict';

describe('Controller: {{name}}Controller', function () {

  // load the controller's module
  beforeEach(angular.mock.module('{@= app_name @}'));

  var {{name}}Controller,scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    {{name}}Controller = $controller('{{name}}Controller', {
      $scope: scope
    });
  }));

  it('should attach greeting to scope', function () {
    expect(scope.greeting).toBe('Hello world from {{name}}Controller');
  });
});

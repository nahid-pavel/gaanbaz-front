"use strict"
describe "Controller: {{name}}Controller", ->

  # load the controller's module
  beforeEach angular.mock.module("{@= app_name @}")

  # Initialize the controller and a mock scope
  beforeEach inject(($controller, $rootScope) ->
    scope = $rootScope.$new()
    {{name}}Controller = $controller("{{name}}Controller",
      $scope: scope
    )
    return
  )
  it "should attach greeting to scope", ->
    expect(scope.greeting).toBe "Hello world from {{name}}Controller"
    return
  return

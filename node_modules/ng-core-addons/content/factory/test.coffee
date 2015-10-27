"use strict"
describe "Factory: {{name}}Factory", ->

  # load the controller's module
  beforeEach angular.mock.module("{@= app_name @}")

  # Initialize the controller and a mock scope
  beforeEach inject((_{{name}}Factory_) ->
    {{name}}Factory = _{{name}}_
    return
  )
  it "should count number of generators ", ->
    expect({{name}}Factory.generators.length).toEqual 7
    return
  return

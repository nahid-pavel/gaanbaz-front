"use strict"
describe "Service: {{name}}Service", ->

  # load the controller's module
  beforeEach angular.mock.module("{@= app_name @}")

  # Initialize the controller and a mock scope
  beforeEach inject((_{{name}}Service_) ->
    {{name}}Service = _{{name}}_
    return
  )
  it "should count number of generators ", ->
    expect({{name}}Service.generators.length).toEqual 7
    return
  return

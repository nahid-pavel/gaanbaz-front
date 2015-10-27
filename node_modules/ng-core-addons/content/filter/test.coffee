"use strict"
describe "Filter: {{name}}Filter", ->

  # load the filter's module
  beforeEach angular.mock.module("{@= app_name @}")

  # Initialize the filter
  beforeEach inject(($filter) ->
    {{name}}Filter = $filter("{{name}}Filter")
    return
  )
  it "should filter given text", ->
    text = "hello world"
    expect({{name}}Filter(text)).toBe "filtered" + text
    return
  return

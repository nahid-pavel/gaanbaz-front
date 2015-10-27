"use strict"
describe "Directive: {{name}}", ->
  # Load app module, which contains the directive
  beforeEach angular.mock.module("{@= app_name @}")

  # Store references to $rootScope and $compile
  # so they are available to all tests in this describe block
  beforeEach inject((_$compile_, _$rootScope_) ->

    # The injector unwraps the underscores (_) from around the parameter names when matching
    $compile = _$compile_
    $rootScope = _$rootScope_
    return
  )
  it "Replaces the element with the appropriate content", ->

    # Compile a piece of HTML containing the directive
    element = $compile("{{element}}")($rootScope)

    # fire all the watches, so the scope expression {{1 + 1}} will be evaluated
    $rootScope.$digest()

    # Check that the compiled element contains the templated content
    expect(element.html()).toContain "lidless, wreathed in flame, 2 times"
    return

  return

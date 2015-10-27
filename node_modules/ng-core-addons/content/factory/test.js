'use strict';

describe('Factory: {{name}}Factory', function () {

  // load the controller's module
  beforeEach(angular.mock.module('{@= app_name @}'));

  var {{name}}Factory;

  // Initialize the controller and a mock scope
  beforeEach(inject(function (_{{name}}Factory_) {
    {{name}}Factory = _{{name}}_;
  }));

  it('should count number of generators ', function () {
    expect({{name}}Factory.generators.length).toEqual(7);
  });
});

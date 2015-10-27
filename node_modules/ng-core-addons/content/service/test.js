'use strict';

describe('Service: {{name}}Service', function () {

  // load the controller's module
  beforeEach(angular.mock.module('{@= app_name @}'));

  var {{name}}Service;

  // Initialize the controller and a mock scope
  beforeEach(inject(function (_{{name}}Service_) {
    {{name}}Service = _{{name}}_;
  }));

  it('should count number of generators ', function () {
    expect({{name}}Service.generators.length).toEqual(7);
  });
});

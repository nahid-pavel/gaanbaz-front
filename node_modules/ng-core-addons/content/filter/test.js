'use strict';

describe('Filter: {{name}}Filter', function () {

  // load the filter's module
  beforeEach(angular.mock.module('{@= app_name @}'));

  var {{name}}Filter;

  // Initialize the filter
  beforeEach(inject(function ($filter) {
    {{name}}Filter = $filter('{{name}}Filter');
  }));

  it('should filter given text', function () {
    var text = "hello world";
    expect({{name}}Filter(text)).toBe('filtered' + text);
  });
});

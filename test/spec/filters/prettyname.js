'use strict';

describe('Filter: prettyName', function () {

  // load the filter's module
  beforeEach(module('uarApp'));

  // initialize a new instance of the filter before each test
  var prettyName;
  beforeEach(inject(function ($filter) {
    prettyName = $filter('prettyName');
  }));

  it('should return the input prefixed with "prettyName filter:"', function () {
    var text = 'angularjs';
    expect(prettyName(text)).toBe('prettyName filter: ' + text);
  });

});

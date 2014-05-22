'use strict';

describe('Filter: friendlyUri', function () {

  // load the filter's module
  beforeEach(module('uarApp'));

  // initialize a new instance of the filter before each test
  var friendlyUri;
  beforeEach(inject(function ($filter) {
    friendlyUri = $filter('friendlyUri');
  }));

  it('should return the input prefixed with "friendlyUri filter:"', function () {
    var text = 'angularjs';
    expect(friendlyUri(text)).toBe('friendlyUri filter: ' + text);
  });

});

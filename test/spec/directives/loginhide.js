'use strict';

describe('Directive: loginHide', function () {

  // load the directive's module
  beforeEach(module('uarApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<login-hide></login-hide>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the loginHide directive');
  }));
});

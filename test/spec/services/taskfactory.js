'use strict';

describe('Service: taskFactory', function () {

  // load the service's module
  beforeEach(module('uarApp'));

  // instantiate service
  var taskFactory;
  beforeEach(inject(function (_taskFactory_) {
    taskFactory = _taskFactory_;
  }));

  it('should do something', function () {
    expect(!!taskFactory).toBe(true);
  });

});

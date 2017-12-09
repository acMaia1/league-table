import seasons from '../../app/seasons/index';
import teams from '../../app/teams/index';
import 'angular-mocks/angular-mocks';

describe('Component: seasonsTables', () => {
  let componentController;
  let scope;
  let controller;
  let getTopscoreSpy;

  beforeEach(() => {
      angular.mock.module(seasons);
      angular.mock.module(teams);
      angular.mock.module('ngMaterial');
  });

  beforeEach(angular.mock.inject((_$componentController_, $rootScope) => {
    scope = $rootScope.$new();
    componentController = _$componentController_;
    getTopscoreSpy = jasmine.createSpy('getTopscore');
    let bindings = {league: {}, getTopscore: getTopscoreSpy};
    controller = componentController('seasonsTable', {$scope: scope}, bindings);
  }));

  it('It should have controller for seasonsTables defined', () => {
    expect(scope.$ctrl).toBe(controller);
  });

  it('It should have a binding league and league should be an object', () => {
    expect(controller.league).toBeDefined();
    expect(controller.league).toEqual({});
  });

  it('should call the `getTopscoreSpy` binding', () => {
    controller.getTopscore();
    expect(getTopscoreSpy).toHaveBeenCalledWith();
  });
});
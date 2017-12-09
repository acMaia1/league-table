import leagues from '../../app/leagues/index';
import 'angular-mocks/angular-mocks';

describe('Component: leaguesTables', () => {
  let componentController;
  let scope;
  let controller;
  let getAllLeaguesSpy;

  beforeEach(() => {
      angular.mock.module(leagues);
  });

  beforeEach(angular.mock.inject((_$componentController_, $rootScope) => {
    componentController = _$componentController_;
    scope = $rootScope.$new();
    getAllLeaguesSpy = jasmine.createSpy('getAllLeagues');
    let bindings = {leagues: [], getAllLeagues: getAllLeaguesSpy};
    controller = componentController('leaguesTable', {$scope: scope}, bindings);
  }));

  it('It should have controller defined', () => {
    expect(scope.$ctrl).toBe(controller);
  });

  it('It should have a binding leagues and league should be an array', () => {
    expect(controller.leagues).toBeDefined();
    expect(controller.leagues).toEqual([]);
  });

  it('should call the `getAllLeagues` binding', () => {
    controller.getAllLeagues();
    expect(getAllLeaguesSpy).toHaveBeenCalledWith();
  });
});
import teams from '../../app/teams/index';
import 'angular-mocks/angular-mocks';

describe('Component: teamsTables', () => {
  let componentController;
  let scope;
  let controller;
  let setSeasonStandingsSpy;
  let getTeamInfoSpy;
  
  beforeEach(() => {
      angular.mock.module(teams);
      angular.mock.module('ngMaterial');
  });

  beforeEach(angular.mock.inject((_$componentController_, $rootScope) => {
    scope = $rootScope.$new();
    componentController = _$componentController_;
    setSeasonStandingsSpy = jasmine.createSpy('setSeasonStandings');
    getTeamInfoSpy = jasmine.createSpy('getTeamInfo');
    let bindings = {season: {}, show: true, setSeasonStandings: setSeasonStandingsSpy, getTeamInfo: getTeamInfoSpy};
    controller = componentController('teamsTable', {$scope: scope}, bindings);
  }));

  it('should be attached to the scope', () => {   
    expect(scope.$ctrl).toBe(controller);
  });

  it('It should have a binding season and season should be an object', () => {
    expect(controller.season).toBeDefined();
    expect(controller.show).toBeDefined();
    expect(controller.season).toEqual({});
    expect(controller.show).toEqual(jasmine.any(Boolean));
  });

  it('should call the `setSeasonStandingsSpy` binding', () => {
    controller.setSeasonStandings();
    expect(setSeasonStandingsSpy).toHaveBeenCalledWith();
  });
  
  it('should call the `getTeamInfoSpy` binding', () => {
    controller.getTeamInfo();
    expect(getTeamInfoSpy).toHaveBeenCalledWith();
  });
});
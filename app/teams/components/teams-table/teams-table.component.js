teamsTableCtrl.$inject = ['$scope', 'teamsService', '$mdDialog'];

function teamsTableCtrl($scope, teamsService, $mdDialog) {

  this.$onInit = () => {

  };
  
  $scope.setSeasonStandings = () =>{
    console.log($scope.$ctrl.show);
    const season = $scope.$ctrl.season;
    if(season && season.id && $scope.$ctrl.show){
      teamsService.getStandings(season.id)
      .then(response => {
        const standings = response.data.data;
        $scope.standings = standings;
      })
      .catch(err => console.log(err)); 
    }
  }

  $scope.$watch('$ctrl.show', () => $scope.$ctrl.show && $scope.setSeasonStandings());

  $scope.getTeamInfo = standing => {
    teamsService.getTeamInfo(standing.team_id)
    .then(response => {
      const team_info = response.data.data;
      const squad = team_info.squad.data;

      $mdDialog.show({
        locals: { team_info: team_info, squad: squad },
        controller: ['$scope', 'team_info', 'squad', function($scope, team_info, squad) {
          $scope.team_info = team_info;
          $scope.players = [];
          squad.map(player => {
            getPlayer(player.player_id)
            .then(response => {
              const player_info = response.data.data;
              $scope.players.push(player_info);
            })
            .catch(err => console.log(err)); 
          });

          $scope.close = () => $mdDialog.hide();

          $scope.showPlayerDetails = player => {
            $scope.isShowingPlayerDeatails = true;
            $scope.selectedPlayer = player;
          }
        }],
        template: require('./modal.html'),
        parent: angular.element(document.body),
        clickOutsideToClose:true,
        fullscreen: true
      });
    })
    .catch(err => console.log(err));
  }

  let getPlayer = player_id => teamsService.getPlayer(player_id);

}

module.exports = {
  template: require('./teams-table.html'),
  controller: teamsTableCtrl,
  bindings: {
    season: '<',
    show: '<'
  }
}
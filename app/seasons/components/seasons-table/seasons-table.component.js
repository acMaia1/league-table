seasonsTableCtrl.$inject = ['$scope', 'seasonsService', 'teamsService', '$mdDialog'];

function seasonsTableCtrl($scope, seasonsService, teamsService, $mdDialog) {

  this.$onInit = () => {
    const league = $scope.$ctrl.league;
    seasonsService.getSeasons()
    .then(response =>{
      const seasons = response.data.data;
      const result = seasons.filter(season => season.league_id === league.id);
      $scope.seasons = result.reverse();
    })
    .catch(err => console.log(err));
  };

  $scope.getTopscore = season => {
    seasonsService.getTopscore(season.id)
    .then(response =>{
      const data = response.data.data;
      const topscores = data.goalscorers && data.goalscorers.data ? data.goalscorers.data : [];
      
      $mdDialog.show({
        locals: { season: season, topscores: topscores },
        controller: ['$scope', 'season', 'topscores', function($scope, season, topscores) {
          $scope.season = season;
          $scope.players = [];
          topscores.map(player => {
            getPlayer(player.player_id)
            .then(response => {
              const player_info = response.data.data;
              player_info.goals = player.goals;
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
  };

  let getPlayer = player_id => teamsService.getPlayer(player_id);
}

module.exports = {
  template: require('./seasons-table.html'),
  controller: seasonsTableCtrl,
  bindings: {
    league: '<',
    getTopscore: '&'
  }
}
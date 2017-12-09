leaguesTableCtrl.$inject = ['$scope', 'leaguesService'];

function leaguesTableCtrl($scope, leaguesService) {
  
  const getAllLeagues = () => leaguesService.getLeagues();

  getAllLeagues()
  .then(response => $scope.leagues = response.data.data)
  .catch(err => console.log(err));
};

module.exports = {
  template: require('./leagues-table.html'),
  controller: leaguesTableCtrl,
  bindings: {
    leagues: '=',
    getAllLeagues: '&'
  }
}
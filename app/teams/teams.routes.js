routes.$inject = ['$stateProvider'];
export default function routes($stateProvider) {
  $stateProvider
  .state('teams', {
    url: '/teams',
  });
}
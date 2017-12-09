routes.$inject = ['$stateProvider'];
export default function routes($stateProvider) {
  $stateProvider
  .state('seasons', {
    url: '/seasons',
  });
}
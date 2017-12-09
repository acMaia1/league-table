routes.$inject = ['$stateProvider'];
export default function routes($stateProvider) {
  $stateProvider
  .state('league', {
    url: '/',
    template: require('./main.html')
  });
}
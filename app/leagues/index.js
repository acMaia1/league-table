import routes from './leagues.routes.js'
import leaguesTable from './components/leagues-table/leagues-table.component'
import leaguesService from './services/leagues.service'

export default angular.module('leaguesComponent', ['ui.router'])
  .config(routes)
  .component('leaguesTable', leaguesTable)
  .service('leaguesService', leaguesService)
  .name

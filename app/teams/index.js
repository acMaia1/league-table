import routes from './teams.routes.js'
import teamsTable from './components/teams-table/teams-table.component'
import teamsService from './services/teams.service'

export default angular.module('sportMonksApp.teams', ['ui.router'])
  .component('teamsTable', teamsTable)
  .service('teamsService', teamsService)
  .name

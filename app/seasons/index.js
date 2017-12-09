import routes from './seasons.routes.js'
import seasonsTable from './components/seasons-table/seasons-table.component'
import seasonsService from './services/seasons.service'

export default angular.module('sportMonksApp.seasons', ['ui.router'])
  .component('seasonsTable', seasonsTable)
  .service('seasonsService', seasonsService)
  .name

const DEFAULT_URL = "https://soccer.sportmonks.com/api/v2.0";
const API_TOKEN = "HOLCAStI6Z0OfdoPbjdSg5b41Q17w2W5P4WuoIBdC66Z54kUEvGWPIe33UYC";
const API = {
    LIST_SEASONS : `${DEFAULT_URL}/seasons?api_token=${API_TOKEN}`,
    LIST_LEAGUES : `${DEFAULT_URL}/leagues?api_token=${API_TOKEN}`
}

export default class leaguesService {
    constructor($http) {
        this.$http = $http
    }
    getLeagues() {
        return this.$http.get(API.LIST_LEAGUES)
    }
}
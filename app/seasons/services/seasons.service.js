const DEFAULT_URL = "https://soccer.sportmonks.com/api/v2.0";
const API_TOKEN = "HOLCAStI6Z0OfdoPbjdSg5b41Q17w2W5P4WuoIBdC66Z54kUEvGWPIe33UYC";
const API = {
    LIST_SEASONS : `${DEFAULT_URL}/seasons?api_token=${API_TOKEN}`,
    GET_TOPSCORE : `${DEFAULT_URL}/topscorers/season/[SEASON_ID]?api_token=${API_TOKEN}`,
}

export default class seasonsService {
    constructor($http) {
        this.$http = $http
    }
    getSeasons() {
        return this.$http.get(API.LIST_SEASONS)
    }
    getTopscore (season_id) {
        return this.$http.get(API.GET_TOPSCORE.replace("[SEASON_ID]", season_id))
    }
}
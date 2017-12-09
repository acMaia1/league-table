const DEFAULT_URL = "https://soccer.sportmonks.com/api/v2.0";
const API_TOKEN = "HOLCAStI6Z0OfdoPbjdSg5b41Q17w2W5P4WuoIBdC66Z54kUEvGWPIe33UYC";
const API = {
    LIST_TEAMS : `${DEFAULT_URL}/teams/season/[SEASON_ID]?api_token=${API_TOKEN}`,
    GET_TEAM_INFO : `${DEFAULT_URL}/teams/[TEAM_ID]?api_token=${API_TOKEN}&include=squad`,
    LIST_STANDINGS : `${DEFAULT_URL}/standings/season/[SEASON_ID]?api_token=${API_TOKEN}`,
    GET_PLAYER : `${DEFAULT_URL}/players/[PLAYER_ID]?api_token=${API_TOKEN}`
}

export default class teamsService {
    constructor($http) {
        this.$http = $http
    }
    getTeams(season_id) {
        return this.$http.get(API.LIST_TEAMS.replace("[SEASON_ID]", season_id))
    }
    getTeamInfo(team_id) {
        return this.$http.get(API.GET_TEAM_INFO.replace("[TEAM_ID]", team_id))
    }
    getStandings(season_id) {
        return this.$http.get(API.LIST_STANDINGS.replace("[SEASON_ID]", season_id))
    }
    getPlayer(player_id) {
        return this.$http.get(API.GET_PLAYER.replace("[PLAYER_ID]", player_id))
    }
}
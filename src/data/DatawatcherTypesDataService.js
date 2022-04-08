import http from "./http-common"
class DatawatcherTypesDataService {
  getAll() {
    return http.get("/datawatchertypes");
  }
  get(id) {
    return http.get(`/datawatchertypes/${id}`);
  }
}
export default new DatawatcherTypesDataService();
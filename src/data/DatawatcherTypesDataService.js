import http from "./http-common"

class DatawatcherTypesDataService {
  getAll () {
    return http.get("/datawatchertypes/");
  }

  get (id) {
    return http.get(`/datawatchertypes/${id}`);
  }

  create (data) {
    return http.post("/datawatchertypes/", data);
  }

  delete (id) {
    return http.delete(`/datawatchertypes/${id}`);
  }
}
export default new DatawatcherTypesDataService();
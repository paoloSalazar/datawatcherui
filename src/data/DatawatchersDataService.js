import http from "./http-common"

class DatawatchersDataService {
  getAll () {
    return http.get("/datawatchers/");
  }

  get (id) {
    return http.get(`/datawatchers/${id}`);
  }

  create (data) {
    return http.post("/datawatchers/", data);
  }

  delete (id) {
    return http.delete(`/datawatchers/${id}`);
  }
}
export default new DatawatchersDataService();
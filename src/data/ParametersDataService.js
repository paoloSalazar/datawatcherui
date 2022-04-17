import http from "./http-common"

class ParametersDataService {
  getAll () {
    return http.get("/parameters/");
  }

  // get (id) {
  //   return http.get(`/parameters/${id}`);
  // }

  create (data) {
    return http.post("/parameters/", data);
  }

  delete (level, name) {
    return http.delete(`/parametersdetail/${level}/${name}`);
  }
}
export default new ParametersDataService();
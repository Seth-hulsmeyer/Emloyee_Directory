import axios from "axios";

const EMPAPI = "https://randomuser.me/api/?results=5000";

export default {
  getEmps: function () {
    return axios.get(EMPAPI);
  },
};

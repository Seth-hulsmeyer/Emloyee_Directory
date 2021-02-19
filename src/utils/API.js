import axios from "axios";

const EMPAPI = "https://randomuser.me/api/?results=100";

export default {
  getEmps: function () {
    return axios.get(EMPAPI);
  },
};

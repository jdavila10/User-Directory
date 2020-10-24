import axios from "axios";

const getEmployees = axios.get("https://randomuser.me/api/?results=60&nat=us");

export default getEmployees; 
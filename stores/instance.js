import axios from "axios";

const instance = axios.create({
    baseURL: "https://pure-plateau-83352.herokuapp.com/",
});

export default instance;
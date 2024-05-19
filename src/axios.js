import axios from "axios";

const instance = axios.create({
  baseURL: "https://localhost:5001/clone-8ecbd/us-central1/api", // THE API (cloud function) URL
});

export default instance;

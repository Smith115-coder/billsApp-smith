import axiosLib from "axios";

const axios = axiosLib.create({
  baseURL: process.env.EXPO_PUBLIC_BASE_URL,
  headers: {
    Accept: "application/vnd.api+json",
  },
});

export default axios;

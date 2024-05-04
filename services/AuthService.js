import axios from "../utils/axios";
import { getToken, setToken } from "./TokenService";

export async function Login(credentials) {
  await axios
    .post("/sanctum/login", credentials, {
      timeout: 10000,
    })
    .then(async (response) => {
      await setToken(response.data);
    });
}

export async function loadUser() {
  const token = await getToken();

  const { data: user } = await axios.get("/user", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return user;
}

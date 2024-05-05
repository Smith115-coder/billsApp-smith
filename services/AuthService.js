import axios from "../utils/axios";
import { getToken, setToken } from "./TokenService";

export async function login(credentials) {
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

export async function logout() {
  const token = getToken()._j;

  await axios
    .post(
      "/sanctum/logout",
      {},
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    )
    .then(async () => {
      await setToken(null);
    })
    .catch((error) => {
      console.log("Error on logout -", error);
    });
}

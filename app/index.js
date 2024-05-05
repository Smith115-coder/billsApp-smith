import React, { useEffect, useState } from "react";
import { useRouter } from "expo-router";
import { loadUser } from "../services/AuthService";
import { setToken } from "../services/TokenService";

export default function Home() {
  const router = useRouter();

  async function handleVerifyUser() {
    await loadUser()
      .then((response) => {
        if (response.data.attributes.name) router.replace("/home");
      })
      .catch((error) => {
        console.log("Failed to load user -", error);
        setToken(null);
        router.replace("/login");
      });
  }

  useEffect(() => {
    handleVerifyUser();
  }, []);

  return <></>;
}

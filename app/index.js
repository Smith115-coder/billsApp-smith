import React, { useEffect, useState } from "react";
import { Redirect } from "expo-router";
import { loadUser } from "../services/AuthService";

export default function Home() {
  const [user, setUser] = useState();

  async function handleVerifyUser() {
    try {
      const userLoaded = await loadUser();
      setUser(userLoaded.data.attributes.name);
    } catch (error) {
      console.log("Failed to load user", error);
    }
  }

  useEffect(() => {
    handleVerifyUser();
  }, [user]);

  if (user === null) {
    return <Redirect href="/login" />;
  }

  return <Redirect href="/home" />;
}

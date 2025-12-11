import { useState, useEffect } from "react";

export default function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const auth = localStorage.getItem("authenticated") === "true";
    setIsAuthenticated(auth);
  }, []);

  return isAuthenticated;
}

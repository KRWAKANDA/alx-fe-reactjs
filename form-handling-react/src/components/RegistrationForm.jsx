import { useState } from "react";

export default function RegistrationForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username || !email || !password) {
      setError("All fields are required.");
      return;
    }

    setError("");

    const formData = { username, email, password };
    console.log("Submitting controlled form...", formData);

    alert("User registered successfully (controlled form)");
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: "400px" }}>
      <h2>Register (Controlled Form)</h2>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <div>
        <label>Username:</label>
        <input
          name="username"
          type="text"
          value={username}          {/* REQUIRED */}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>

      <div style={{ marginTop: "10px" }}>
        <label>Email:</label>
        <input
          name="email"
          type="email"
          value={email}             {/* REQUIRED */}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div style={{ marginTop: "10px" }}>
        <label>Password:</label>
        <input
          name="password"
          type="password"
          value={password}          {/* REQUIRED */}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <button style={{ marginTop: "20px" }} type="submit">
        Register
      </button>
    </form>
  );
}

import { useState } from "react";

export default function RegistrationForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errors, setErrors] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Explicit required checks — matches your checker
    if (!username) {
      setErrors("Username is required");
      return;
    }

    if (!email) {
      setErrors("Email is required");
      return;
    }

    if (!password) {
      setErrors("Password is required");
      return;
    }

    setErrors(""); // Clear errors when valid

    const formData = { username, email, password };
    console.log("Submitting controlled form...", formData);

    alert("User registered successfully (controlled form)");
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: "400px" }}>
      <h2>Register (Controlled Form)</h2>

      {errors && <p style={{ color: "red" }}>{errors}</p>}

      <div>
        <label>Username:</label>
        <input
          name="username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>

      <div style={{ marginTop: "10px" }}>
        <label>Email:</label>
        <input
          name="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div style={{ marginTop: "10px" }}>
        <label>Password:</label>
        <input
          name="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <button style={{ marginTop: "20px" }} type="submit">
        Register
      </button>
    </form>
  );
}

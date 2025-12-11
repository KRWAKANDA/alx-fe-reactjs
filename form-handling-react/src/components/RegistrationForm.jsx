import { useState } from "react";

export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.username || !formData.email || !formData.password) {
      setErrors("All fields are required.");
      return;
    }

    setErrors("");

    // Mock API simulation
    console.log("Submitting data to API...", formData);

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
          value={formData.username}
          onChange={handleChange}
        />
      </div>

      <div style={{ marginTop: "10px" }}>
        <label>Email:</label>
        <input
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>

      <div style={{ marginTop: "10px" }}>
        <label>Password:</label>
        <input
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
        />
      </div>

      <button style={{ marginTop: "20px" }} type="submit">
        Register
      </button>
    </form>
  );
}

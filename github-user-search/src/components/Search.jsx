import React, { useState } from "react";
import axios from "axios";

function Search() {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    setUsername(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username) return;

    setLoading(true);
    setError("");
    setUser(null);

    try {
      const response = await axios.get(`https://api.github.com/users/${username}`);
      setUser(response.data);
    } catch (err) {
      setError("Looks like we cant find the user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
        <input
          type="text"
          value={username}
          onChange={handleInputChange}
          placeholder="Enter GitHub username"
          style={{ padding: "10px", width: "250px", marginRight: "10px" }}
        />
        <button type="submit">Search</button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {user && (
        <div style={{
          border: "1px solid #ddd",
          padding: "20px",
          borderRadius: "10px",
          width: "300px"
        }}>
          <img
            src={user.avatar_url} 
            alt={user.login} 
            style={{ width: "100px", borderRadius: "50%" }}
          />
          <h2>{user.name || user.login}</h2>
          <p>{user.bio || "No bio available"}</p>
          <a href={user.html_url} target="_blank">View Profile</a>
        </div>
      )}
    </div>
  );
}

export default Search;

import React from "react";

function UserCard({ user }) {
  if (!user) return null;

  return (
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
  );
}

export default UserCard;

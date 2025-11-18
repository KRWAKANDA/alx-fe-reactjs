import React from "react";

function SearchBar({ value, onChange, onSubmit }) {
  return (
    <form onSubmit={onSubmit} style={{ marginBottom: "20px" }}>
      <input
        type="text"
        placeholder="Search GitHub username..."
        value={value}
        onChange={onChange}
        style={{
          padding: "10px",
          width: "250px",
          marginRight: "10px"
        }}
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchBar;


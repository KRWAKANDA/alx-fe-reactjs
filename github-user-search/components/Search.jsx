import { useState } from "react";

export default function Search({ onSearch }) {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch({ username, location, minRepos });
  };

  return (
    <form 
      onSubmit={handleSubmit}
      className="w-full max-w-xl bg-white shadow-lg rounded-2xl p-6 space-y-4"
    >
      <h2 className="text-xl font-semibold">Advanced GitHub User Search</h2>

      <input
        type="text"
        placeholder="Username (optional)"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="w-full p-3 border rounded-lg"
      />

      <input
        type="text"
        placeholder="Location (optional: e.g. Nairobi, Lagos, London)"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className="w-full p-3 border rounded-lg"
      />

      <input
        type="number"
        placeholder="Minimum Public Repos"
        value={minRepos}
        onChange={(e) => setMinRepos(e.target.value)}
        className="w-full p-3 border rounded-lg"
      />

      <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition">
        Search
      </button>
    </form>
  );
}

import { useState } from "react";
import { searchUsers } from "../services/githubService";

function Search() {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [results, setResults] = useState([]);

  // must contain async / await
  const handleSearch = async (e) => {
    e.preventDefault();

    const data = await searchUsers({
      username,
      location,
      minRepos,
    });

    setResults(data.items || []);
  };

  return (
    <div className="max-w-3xl mx-auto mt-10">
      <form
        onSubmit={handleSearch}
        className="p-6 bg-white shadow-lg rounded-xl space-y-4"
      >
        <h2 className="text-2xl font-bold">Advanced GitHub User Search</h2>

        <input
          className="w-full p-2 border rounded"
          type="text"
          placeholder="Search by username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <input
          className="w-full p-2 border rounded"
          type="text"
          placeholder="Location (optional)"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />

        <input
          className="w-full p-2 border rounded"
          type="number"
          placeholder="Minimum repositories (optional)"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          min="0"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
        >
          Search
        </button>
      </form>

      {/* must contain && */}
      {results.length > 0 && (
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* must contain map */}
          {results.map((user) => (
            <div key={user.id} className="bg-white p-5 shadow rounded-xl">
              <img
                src={user.avatar_url}
                alt={user.login}
                className="w-20 h-20 rounded-full mx-auto"
              />

              <h3 className="text-center mt-4 font-semibold text-lg">
                {user.login}
              </h3>

              <a
                href={user.html_url}
                target="_blank"
                className="block mt-4 bg-blue-600 text-white py-2 text-center rounded-lg"
              >
                View Profile
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Search;

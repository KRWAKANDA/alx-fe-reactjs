import { useState } from "react";
import Search from "./components/SearchResults";
import Results from "./components/Results";
import { searchUsers } from "./services/githubService";

export default function App() {
  const [users, setUsers] = useState([]);

  const handleSearch = async (params) => {
    const result = await searchUsers(params);
    setUsers(result);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <Search onSearch={handleSearch} />
      <Results users={users} />
    </div>
  );
}

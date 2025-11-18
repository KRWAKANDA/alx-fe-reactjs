import axios from "axios";

const BASE_URL = "https://api.github.com/search/users?q=";

export async function searchUsers({ username, location, minRepos }) {
  let query = "";

  if (username) query += `${username} `;
  if (location) query += `location:${location} `;
  if (minRepos) query += `repos:>=${minRepos} `;

  const finalQuery = query.trim().replace(/ /g, "+");

  const response = await axios.get(`${BASE_URL}${finalQuery}`);

  return response.data.items; // Returns an array of users
}

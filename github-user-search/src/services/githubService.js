import axios from "axios";

// Function to fetch user data from GitHub API
export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`https://api.github.com/users/${username}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching user:", error);
    throw error;
  }
};
export async function searchUsers(username, location = "", minRepos = "") {
  try {
    let query = username || "";
    if (location) query += `+location:${location}`;
    if (minRepos) query += `+repos:>=${minRepos}`;

    const response = await fetch(`https://api.github.com/search/users?q=${query}&per_page=20`);
    const data = await response.json();

    // Fetch additional details for each user to get location and repos
    const usersDetails = await Promise.all(
      data.items.map(async (user) => {
        const res = await fetch(user.url);
        return await res.json();
      })
    );

    return usersDetails;
  } catch (error) {
    console.error("Error fetching users:", error);
    return [];
  }
}

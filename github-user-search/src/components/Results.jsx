export default function Results({ users }) {
  if (!users) return null;

  if (users.length === 0)
    return <p className="text-center mt-6 text-gray-500">No users found.</p>;

  return (
    <div className="grid md:grid-cols-2 gap-4 mt-6">
      {users.map((user) => (
        <div 
          key={user.id}
          className="flex items-center gap-4 bg-white shadow-md rounded-xl p-4"
        >
          <img 
            src={user.avatar_url} 
            alt="avatar"
            className="w-16 h-16 rounded-full"
          />

          <div>
            <p className="text-lg font-semibold">{user.login}</p>
            <a 
              href={user.html_url}
              target="_blank"
              className="text-blue-600 underline"
            >
              View Profile
            </a>
            <p className="text-sm text-gray-500">Score: {user.score}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

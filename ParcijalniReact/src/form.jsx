import React, { useState } from 'react';

const GitHubPretraga = () => {
  const [username, setUsername] = useState('');
  const [repos, setRepos] = useState([]);
  const [userData, setUserData] = useState(null);

  const fetchRepos = async () => {
    const response = await fetch(`https://api.github.com/users/${username}/repos`);
    const data = await response.json();
    setRepos(data);
  };

  const fetchUserData = async () => {
    const response = await fetch(`https://api.github.com/users/${username}`);
    const data = await response.json();
    setUserData(data);
  };

  return (
    <div>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Unesite GitHub korisničko ime"
      />
      <button onClick={fetchUserData}>Detalji korisnika</button>
      <button onClick={fetchRepos}>Lista repozitorija</button>
      

      {userData && (
        <div>
          <h2>{userData.name}</h2>
          <img src={userData.avatar_url} />
          <p>BIO: {userData.bio}</p>
          <p>Lokacija: {userData.location}</p>
          
          <p>REPOSITORIES: {userData.public_repos}</p>
        </div>
      )}

      <ul>
        {repos.map((repo) => (
          <li key={repo.id}>{repo.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default GitHubPretraga;



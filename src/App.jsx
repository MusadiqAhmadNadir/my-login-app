import React, { useState } from 'react';
const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleLogin = () => setIsLoggedIn(true);
  const handleLogout = () => setIsLoggedIn(false);

  return (
    <div className="App">
      {isLoggedIn ? <LoggedIn /> : <LoggedOut />}
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

const LoggedIn = () => {
  return (
    <div>
      <h1>Welcome, MUBARAK SHA loggedin showe!</h1>
    </div>
  );
};

const LoggedOut = () => {
  return (
    <div>
      <h1>Please log in KAAAAA</h1>
    </div>
  );
};

export default App;
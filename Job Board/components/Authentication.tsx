import React, { useState } from 'react'

// props interface
interface AuthenticationProps {
  onLogin: (username: string, password: string) => void
  onLogout: () => void
  isAuthenticated: boolean
}

// functional component using FC (Functional Component)
const Authentication: React.FC<AuthenticationProps> = ({
  onLogin,
  onLogout,
  isAuthenticated,
}) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = () => {
    // Call the onLogin callback with the entered username and password
    onLogin(username, password)
  }

  const handleLogout = () => {
    // Call the onLogout callback
    onLogout()
  }

  return (
    <div>
      {isAuthenticated ? (
        <div>
          <p>Welcome, {username}!</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <label>
            Username:
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
          </label>
          <br />
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <br />
          <button onClick={handleLogin}>Login</button>
        </div>
      )}
    </div>
  )
}

export default Authentication

import './App.css'

function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <h2>🔐 TrustVault</h2>
        <span>SecureDocs</span>
      </nav>

      <main className="main-container">
        <section className="welcome">
          <h1>Your Documents.<br />Your Control.</h1>
          <p>
            A secure digital vault to protect, manage,
            and share your important documents.
          </p>

          <div className="security-info">
            🔒 Secure Access
            <span>•</span>
            🛡️ Privacy First
            <span>•</span>
            📋 Activity Tracking
          </div>
        </section>

        <section className="login-card">
          <h2>Welcome Back</h2>
          <p>Sign in to access your secure vault.</p>

          <form onSubmit={(e) => e.preventDefault()}>
            <label>Email Address</label>
            <input
              type="email"
              placeholder="Enter your email"
              required
            />

            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              required
            />

            <button type="submit">Sign In</button>
          </form>

          <p className="signup">
            New to TrustVault? <a href="#">Create an account</a>
          </p>

          <p className="demo-note">
            Authentication will be connected to the backend.
          </p>
        </section>
      </main>
    </div>
  )
}

export default App
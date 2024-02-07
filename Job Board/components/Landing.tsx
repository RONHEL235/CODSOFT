import React from 'react'

const App: React.FC = () => {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Job Search App</h1>
        <p>Find Your Dream Job</p>
      </header>
      <section className="app-intro">
        <p>Welcome to the Job Search App! Discover exciting job opportunities and take the next step in your career.</p>
        <button className="get-started-button">Get Started</button>
      </section>
      <section className="app-features">
        <div className="feature">
          <h2>Search Jobs</h2>
          <p>Explore a vast range of job listings tailored to your skills and preferences.</p>
        </div>
        <div className="feature">
          <h2>Apply Easily</h2>
          <p>Apply to jobs seamlessly with our user-friendly application process.</p>
        </div>
        <div className="feature">
          <h2>Stay Updated</h2>
          <p>Receive updates on new job listings and track the status of your applications.</p>
        </div>
      </section>
      <footer className="app-footer">
        <p>&copy 2024 Job Search App. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
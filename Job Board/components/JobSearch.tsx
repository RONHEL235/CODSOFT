import React, { useState } from 'react'

interface Job {
  id: number
  title: string
  body: string
}

const JobSearch: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('')
  const [jobs, setJobs] = useState<Job[]>([])

  const handleSearch = async () => {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts?title=${searchTerm}`)
      const data = await response.json()
      setJobs(data)
    } catch (error) {
      console.error('Error fetching jobs:', error)
    }
  }

  return (
    <div>
      <h1>Job Search</h1>
      <input
        type="text"
        placeholder="Search for jobs..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      <ul>
        {jobs.map((job) => (
          <li key={job.id}>
            <h3>{job.title}</h3>
            <p>{job.body}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default JobSearch

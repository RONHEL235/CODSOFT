import React, { useState, useEffect } from 'react'

interface Job {
  id: number
  title: string
  description: string
  location: string
}

const JobBrowser: React.FC = () => {
  const [jobs, setJobs] = useState<Job[]>([])
  const [searchTerm, setSearchTerm] = useState<string>('')

  useEffect(() => {
    // Simulate fetching jobs from an API
    // In a real application, you would fetch data from your server
    const fetchData = async () => {
      try {
        // Replace this URL with the actual API endpoint for job browsing
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts?title=${searchTerm}`)
        const data = await response.json()
        setJobs(data)
      } catch (error) {
        console.error('Error fetching jobs:', error)
      }
    }

    fetchData()
  }, [searchTerm])

  return (
    <div>
      <h1>Job Browser</h1>
      <input
        type="text"
        placeholder="Search for jobs..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <ul>
        {jobs.map((job) => (
          <li key={job.id}>
            <h3>{job.title}</h3>
            <p>{job.description}</p>
            <p>Location: {job.location}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default JobBrowser

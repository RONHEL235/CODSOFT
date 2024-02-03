import React from 'react'
import FileUpload from './FileUpload'
import JobPostForm from './JobPost'

const App: React.FC = () => {
  const handleFileUpload = (file: File) => {
    // Handle the file upload logic (e.g., send to the server)
    console.log('Uploaded file:', file)
  }

  const handleJobPost = (jobData: { title: string description: string location: string }) => {
    // Handle the job post logic (e.g., send to the server)
    console.log('Posted job:', jobData)
  }

  return (
    <div>
      <h1>App</h1>
      <FileUpload onFileUpload={handleFileUpload} />
      <hr />
      <h2>Job Posting Platform</h2>
      <JobPostForm onJobPost={handleJobPost} />
    </div>
  )
}

export default App

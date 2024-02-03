import React, { useState } from 'react'
import FileUpload from './FileUpload'
import JobPostForm from './JobPost'
import JobBrowser from './JobBrowser'

const App: React.FC = () => {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null)

  const handleFileUpload = (file: File) => {
    // Handle the file upload logic (e.g., send to the server)
    console.log('Uploaded file:', file)
    setUploadedFile(file)
  }

  const handleJobPost = (jobData: { title: string description: string location: string }) => {
    // Handle the job post logic (e.g., send to the server)
    console.log('Posted job:', jobData)
  }

  return (
    <div>
      <h1>Job Platform</h1>

      {/* File Upload Section */}
      <div>
        <h2>File Upload Section</h2>
        <FileUpload onFileUpload={handleFileUpload} />
        {uploadedFile && <p>Uploaded file: {uploadedFile.name}</p>}
      </div>

      <hr />

      {/* Job Post Form Section */}
      <div>
        <h2>Job Post Form Section</h2>
        <JobPostForm onJobPost={handleJobPost} />
      </div>

      <hr />

      {/* Job Browser Section */}
      <div>
        <h2>Job Browser Section</h2>
        <JobBrowser />
      </div>
    </div>
  )
}

export default App

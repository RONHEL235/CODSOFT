import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import FileUpload from './FileUpload'
import JobPostForm from './JobPost'
import JobBrowser from './JobBrowser'
import Blog from './Blog'

const App: React.FC = () => {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null)
  const [blogPosts, setBlogPosts] = useState([
    {
      id: 1,
      title: 'Getting Started with TypeScript and React',
      content: 'This is the content of the blog post...',
      date: 'January 1, 2023',
    },
    // Add more blog posts as needed
  ])

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
    <Router>
      <div>
        <h1>App</h1>

        {/* File Upload Section */}
        <div>
          <h2>File Upload Section</h2>
          <FileUpload onFileUpload={() => {}} />
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

        <hr />

        {/* Blog Section */}
        <div>
          <h2>Blog Section</h2>
          <Switch>
            <Route
              path="/blog/:postId"
              render={(props) => <Blog {...props} blogPosts={blogPosts} />}
            />
            <Route path="/" exact>
              <div>Welcome to the App! Select a blog post to read.</div>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  )
}

export default App

import React from 'react'
import FileUpload from './FileUpload'

const App: React.FC = () => {
  const handleFileUpload = (file: File) => {
    // Handle the file upload logic (e.g., send to the server)
    console.log('Uploaded file:', file)
  }

  return (
    <div>
      <h1>CV Upload App</h1>
      <FileUpload onFileUpload={handleFileUpload} />
    </div>
  )
}

export default App

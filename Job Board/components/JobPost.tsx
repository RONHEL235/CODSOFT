import React, { useState, ChangeEvent, FormEvent } from 'react'

interface JobPostFormProps {
  onJobPost: (jobData: JobFormData) => void
}

interface JobFormData {
  title: string
  description: string
  location: string
}

const JobPostForm: React.FC<JobPostFormProps> = ({ onJobPost }) => {
  const [formData, setFormData] = useState<JobFormData>({
    title: '',
    description: '',
    location: '',
  })

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prevData) => ({ ...prevData, [name]: value }))
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    // Pass the job data to the parent component
    onJobPost(formData)
    // Optionally, you can reset the form data here
    setFormData({ title: '', description: '', location: '' })
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Job Title:
        <input type="text" name="title" value={formData.title} onChange={handleInputChange} />
      </label>
      <label>
        Job Description:
        <textarea name="description" value={formData.description} onChange={handleInputChange} />
      </label>
      <label>
        Job Location:
        <input type="text" name="location" value={formData.location} onChange={handleInputChange} />
      </label>
      <button type="submit">Post Job</button>
    </form>
  )
}

export default JobPostForm

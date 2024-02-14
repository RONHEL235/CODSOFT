import express, { Request, Response } from 'express'
import bodyParser from 'body-parser'
import path from 'path'

const app = express()
const PORT = 5000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/uploads', express.static(path.join(__dirname, 'uploads')))

let uploadedFiles: string[] = []
let jobPostings: { title: string description: string location: string }[] = []

app.post('/upload', (req: Request, res: Response) => {
  const { fileName } = req.body

  // Save the uploaded file
  uploadedFiles.push(fileName)

  res.status(200).json({ message: 'File uploaded successfully' })
})

app.post('/postJob', (req: Request, res: Response) => {
  const { title, description, location } = req.body

  // Save the job posting
  jobPostings.push({ title, description, location })

  res.status(200).json({ message: 'Job posted successfully' })
})

app.get('/browseJobs', (req: Request, res: Response) => {
  // Return the list of job postings
  res.status(200).json({ jobPostings })
})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})

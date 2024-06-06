import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom'
import HomePage from './pages/HomePage'
import MainLayout from './layouts/MainLayout'
import JobsPage from './pages/JobsPage'
import NotFoundPage from './pages/NotFoundPage'
import JobPage, {jobLoader} from './pages/JobPage'
import AddJobsPage from './pages/AddJobsPage'
import EditPage from './pages/EditPage'


const App = () => {
  // Add New Job
  const jobSubmit = async(newJob) => {
    const res = await fetch('/api/jobs', {
      method: 'POST',
      headers: {
        'Content-Header': 'application/json'
      },
      body: JSON.stringify(newJob)
    })

    return res
  }

  // Update Job
  const updateJob = async(job) => {
    const res = await fetch(`/api/jobs/${job.id}`, {
      method: 'PUT',
      headers: {
        'Content-Header': 'application/json'
      },
      body: JSON.stringify(job)
    })

    return res 
  }

  // Delete Job
  const deleteJob = async(jobId) => {
    const res = await fetch(`/api/jobs/${jobId}`, {
      method: 'DELETE'
    })

    return res
  }
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout/>} >
        <Route index element={<HomePage/>} />
        <Route path='/jobs' element={<JobsPage/>} />
        <Route path='/add-job' element={<AddJobsPage addJobSubmit={jobSubmit} />} />
        <Route path='/edit-job/:id' element={<EditPage updateJobSubmit={updateJob} />} loader={jobLoader}  />
        <Route path='/jobs/:id' element={<JobPage deleteJob={deleteJob}/>} loader={jobLoader}  />
        <Route path='*' element={<NotFoundPage/>} />
      </Route>
    )
  )
  return (
    <RouterProvider router={router}/>
  )
}

export default App
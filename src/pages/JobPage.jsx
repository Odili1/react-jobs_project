// import { useEffect, useState } from "react"
import { useLoaderData, Link, useNavigate } from "react-router-dom"
import {FaArrowLeft, FaMapMarker} from 'react-icons/fa'
import PropTypes from 'prop-types'
import { toast } from "react-toastify"
// import Spinner from "../components/Spinner"


const JobPage = ({deleteJob}) => {
    // const {id} = useParams()
    // const [job, setJob] = useState(null)
    // const [loading, setLoading] = useState(true)
    const navigate = useNavigate()
    const job = useLoaderData()

    // useEffect(() => {
    //     const fetchData = async() => {
    //         try {
    //             const res = await fetch(`/api/jobs/${id}`)
    //             const data = await res.json()

    //             setJob(data)
    //         } catch (error) {
    //             console.log('Error fetching data');
    //         }finally{
    //             setLoading(false)
    //         }


    //     }

    //     fetchData()
    // }, [id])

    const onDeleteClick = (jobId) => {
        const confirm = window.confirm('Are you sure you want to delete this listing?')

        if (!confirm) return

        deleteJob(jobId)

        toast.success('Delete successful')

        navigate('/jobs')
    }

  return (
    // loading ? <Spinner /> : <h2>{job.title}</h2>
    // <h2>{job.title}</h2>
    <>
        <section>
            <div className="container m-auto py-6 px-6">
                <Link to="/jobs" className="text-indigo-500 hover:text-indigo-600 flex items-center">
                    <FaArrowLeft className="mr-2" />
                    Back to Job Listings
                </Link>
            </div>
        </section>
        <section className="bg-indigo-50">
            <div className="container m-auto py-10 px-6">
                <div className="grid grid-cols-1 w-full gap-6 md:grid-cols-70/30">
                    <main>
                        <div className="bg-white p-6 rounded-lg shadow-md text-center md:text-left">
                            <div className="text-gray-500 mb-4">{job.title}</div>
                            <div className="text-3xl font-bold mb-4">
                                {job.type}
                            </div>
                            <div className="text-gray-500 mb-4 flex align-middle justify-center md:justify-start">
                                <FaMapMarker className="text-orange-700 mr-1 " />
                                <p className="text-orange-700">{job.location}</p>
                            </div>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow-md mt-6">
                            <h3 className="text-indigo-800 text-lg font-bold mb-6">
                                Job Description
                            </h3>
                            <p className="mb-4">
                                {job.description}
                            </p>
                            <h3 className="text-indigo-800 text-lg font-bold mb-2">Salary</h3>
                            <p className="mb-4">{job.salary} / Year</p>
                        </div>
                    </main>
                    <aside>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-bold mb-6">Company Info</h3>

                            <h3 className="text-2xl">{job.company.name}</h3>

                            <p className="my-2">
                                {job.company.description}
                            </p>

                            <hr className="my-4" />

                            <h3 className="text-xl">Contact Email:</h3>

                            <p className="my-2 bg-indigo-100 p-2 font-size">
                                {job.company.contactEmail}
                            </p>

                            <h3 className="text-xl">Contact Phone:</h3>

                            <p className="my-2 bg-indigo-100 p-2 font-size">
                                {job.company.contactPhone}
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                            <h3 className="text-xl font-bold mb-6">Manage Job</h3>
                            <Link to={`/edit-job/${job.id}`} className="bg-indigo-500 text-white text-center font-bold py-2 rounded-full w-full hover:bbg-indigo-600 focus:outline-none focus:shadow-outline mt-4 block">Edit Job</Link>
                            <button onClick={() => onDeleteClick(job.id)} className="bg-red-500 text-white font-bold py-2 px-4 rounded-full w-full mt-4 block hover:bg-red-600 focus:outline-none focus:shadow-outline">
                                Delete Job
                            </button>
                        </div>
                    </aside>
                </div>
            </div>
        </section>
    </>
  )
}

const jobLoader = async({params}) => {
    const id = params.id
    const res = await fetch(`/api/jobs/${id}`)
    const data = await res.json()

    return data
}

JobPage.propTypes = {
    deleteJob: PropTypes.func
}

export {JobPage as default, jobLoader};
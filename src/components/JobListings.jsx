import PropTypes from 'prop-types'
import JobListing from './JobListing'
import Spinner from './Spinner'
import { useEffect, useState } from 'react'

const JobListings = ({isHome = false}) => {
    const [jobs, setJobs] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchData = async() => {
            try {
                const apiUrl = isHome ? '/api/jobs?_limit=3' : '/api/jobs'
                const res = await fetch(apiUrl)
                const data = await res.json()

                setJobs(data)
            } catch (error) {
                console.log('Error fetching Data');
            }finally{
                setLoading(false)
            }
        }

        fetchData()
    }, [isHome])

  return (
    <section className="bg-blue-50 px-4 py-10">
        <div className="container-xl m-auto lg:container">
            <h2 className="text-center font-bold text-3xl text-indigo-500 mb-6">
                {isHome ? 'Recent Jobs' : 'Browse Jobs'}
            </h2>

            {loading ? <Spinner loading={loading} /> : (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    { jobs.map((job) => (
                        <JobListing key={job.id} job={job} />
                    ))}
                </div>  
            )}
        </div>
    </section>
  )
}

JobListings.propTypes = {
    isHome: PropTypes.bool
}

export default JobListings
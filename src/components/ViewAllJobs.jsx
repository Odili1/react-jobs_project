import { Link } from "react-router-dom"


const ViewAllJobs = () => {
  return (
    <section className="container max-w-lg m-auto my-10 px-6">
        <Link to="/jobs" className="block bg-black text-white rounded-xl py-4 px-6 text-center hover:bg-gray-700">
            View All Jobs
        </Link>
    </section>
  )
}

export default ViewAllJobs
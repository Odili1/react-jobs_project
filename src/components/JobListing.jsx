import {FaMapMarker} from 'react-icons/fa'
import PropTypes from 'prop-types'
import { useState } from 'react';
import { Link } from 'react-router-dom';


const JobListing = ({job}) => {
    const [showFullDescription, setShowFullDescription] = useState(false)

    let description = job.description

    if(!showFullDescription){
        description = description.substring(0, 90) + '...'
    }


  return (
    <div className="bg-white rounded-xl shadow-md relative">
      <div className="p-4">
        <div className="mb-6">
          <div className="text-gray-600 my-2">{job.type}</div>
          <h3 className="text-xl font-bold">{job.title}</h3>
        </div>

        <div className="mb-3">{description}</div>

        <button onClick={() => setShowFullDescription((prevSate) => !prevSate)} className='mb-5 text-indigo-500 hover:text-indigo-600'>
            {showFullDescription ? 'Less' : 'More'}
        </button>

        <h3 className="text-indigo-500 mb-2">{job.salary} / Year</h3>

        <div className="border border-gray-100 mb-5"></div>

        <div className="flex flex-col mb-4 justify-between lg:flex-row">
          <div className="text-orange-700 mb-3">
            <FaMapMarker className='inline text-lg mb-1 mr-1'/>
            {job.location}
          </div>

          <Link
            to={`/jobs/${job.id}`}
            className="bg-indigo-500 text-white px-6 py-2 rounded-lg text-center text-sm h-[36px] hover:bg-indigo-600"
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

JobListing.propTypes = {
    job: {
        id: PropTypes.string,
        title: PropTypes.string,
        description: PropTypes.string,
        type: PropTypes.string,
        location: PropTypes.string,
        salary: PropTypes.string,
        company: PropTypes.object
    }
}

export default JobListing;

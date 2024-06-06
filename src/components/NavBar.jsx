import {NavLink} from 'react-router-dom'
import logo from '../assets/images/logo.png'

const NavBar = () => {
    const nameClass = ({isActive}) => {
        return isActive ? 'text-white bg-black px-3 py-2 rounded-md hover:bg-gray-900 hover:text-white' : 'text-white px-3 py-2 rounded-md hover:bg-gray-900 hover:text-white'
    }

  return (
    <nav className="bg-indigo-700 border-b border-indigo-500">
        <div className="container mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="flex h-20 items-center justify-between">
                <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
                    <NavLink to="/" className="flex flex-shrink-0 items-center mr-4">
                        <img src={logo} alt="React Jobs" className="h-10 w-auto" />
                        <span className="hidden md:block text-white text-2xl font-bold ml-2">React Jobs</span>
                    </NavLink>

                    <div className="md:ml-auto">
                        <div className="flex space-x-2">
                            <NavLink to="/" className={nameClass}>Home</NavLink>

                            <NavLink to="/jobs" className={nameClass}>Jobs</NavLink>
                        
                            <NavLink to="/add-job" className={nameClass}>Add Job</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default NavBar
import React from 'react'
import {Link} from 'react-router-dom'
import { PropTypes } from 'prop-types'

function Navbar({title}) {
    return (
        <nav className='navbar mb-12 shadow-xl bg-secondary text-neutral-content'>
            <div className='container mx-auto'>
                <div className='flex-start px-2 mx-2'>
                    <Link to='/' className='text-3xl font-bold align-middle mx-auto'>
                        {title}
                    </Link>
                </div>
                <div className='flex-end px-2 mx-2'>
                    <div className='md:flex sm:dropdown justify-end mx-2'>
                        <Link to='/' className='btn btn-ghost btn-sm rounded-btn mx-2'>
                            Home
                        </Link>
                        <Link to='/scotts-journal' className='btn btn-ghost btn-sm rounded-btnmx-2 mx-2'>
                            Scott's Journal
                        </Link>
                        <Link to='/timeline-map' className='btn btn-ghost btn-sm rounded-btnmx-2 mx-2'>
                            Timeline Map
                        </Link>
                        <Link to='/about' className='btn btn-ghost btn-sm rounded-btnmx-2 mx-2'>
                            About
                        </Link>
                        <Link to='/contact' className='btn btn-ghost btn-sm rounded-btnmx-2 mx-2'>
                            Contact
                        </Link>
                    </div>
                </div>
            </div>
         </nav>
    )
}

Navbar.defaultProps = {
    title: 'Github Finder',
}

Navbar.propTypes = {
    title: PropTypes.string
}

export default Navbar
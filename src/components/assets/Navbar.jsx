import React from 'react'
import {Link} from 'react-router-dom'
import { PropTypes } from 'prop-types'

function Navbar({title}) {
    return (
        <nav className='navbar mb-12 shadow-lg bg-secondary text-neutral-content'>
            <div className='container mx-auto'>
                <div className='flex-none px-2 mx-2'>
                    <Link to='/' className='text-3xl font-bold align-middle'>
                        {title}
                    </Link>
                </div>
                <div className='flex-1 px-2 mx-2'>
                    <div className='md:flex sm:dropdown justify-end'>
                        <Link to='/' className='btn btn-ghost btn-sm rounded-btn'>
                            Home
                        </Link>
                        <Link to='/about' className='btn btn-ghost btn-sm rounded-btn'>
                            About
                        </Link>
                        <Link to='/about' className='btn btn-ghost btn-sm rounded-btn'>
                            About
                        </Link>
                        <Link to='/about' className='btn btn-ghost btn-sm rounded-btn'>
                            About
                        </Link>
                        <Link to='/about' className='btn btn-ghost btn-sm rounded-btn'>
                            About
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
import React from 'react'
import {Link} from 'react-router-dom'
import { PropTypes } from 'prop-types'

function Navbar({title}) {
    return (
        <nav className=''>
            <div className=''>
                <div className=''>
                    <Link to='/' className=''>
                        {title}
                    </Link>
                </div>
                <div className=''>
                    <div className=''>
                        <Link to='/' className=''>
                            Home
                        </Link>
                        <Link to='/about' className=''>
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
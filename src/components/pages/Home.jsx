import React from 'react';
import teamlg from '../images/team-lg.jpg';

function Home() {
  return (
    <div className='container text-center'>
        <img src={teamlg} alt="scotts team" className='homeimage rounded-xl mx-10 w-50 shadow-lg'/>
        Home
    </div>
  )
}

export default Home
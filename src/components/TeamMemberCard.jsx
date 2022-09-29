import React from 'react'
import { useContext } from 'react'
import { DataContext } from '../Context/DataContext'
import femaleProfile from '../images/femaleProfile.jpg'
import maleProfile from '../images/maleProfile.jpg'



const TeamMemberCard = ({employee}) => {

  const {selectedTeam,handleEmpoyeeCardClick} = useContext(DataContext)

  return (
    <div id={employee.id} key={employee.id} className={(employee.teamName === selectedTeam ? 'card m-2 standout': 'card m-2')} style={{cursor:"pointer"}} onClick={handleEmpoyeeCardClick} >
    {employee.gender === 'male' ?<img src={maleProfile} className="card-img-top" alt="profile"/> : <img src={femaleProfile} className="card-img-top" alt="profile" />}
    <div className='card-body'>
      <h5 className='card-title'>Full Name: {employee.fullName} </h5>
      <p className='card-text'>Designation: {employee.designation}</p>
    </div>
    </div>
  )
}

export default TeamMemberCard
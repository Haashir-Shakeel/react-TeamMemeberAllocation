import React, { useState } from 'react'
import femaleProfile from '../images/femaleProfile.jpg'
import maleProfile from '../images/maleProfile.jpg'
export const Employees = ({employees,selectedTeam,handleEmpoyeeCardClick,handleTeamSelectChange}) => {


  return (
    <main className='container'>
      <div className='row justify-content-center mb-3 mt-3'>
        <div className='col-6'>
          <select className='form-select form-select-lg' value={selectedTeam}  onChange={handleTeamSelectChange}>
            <option value="TeamA">TeamA</option>
            <option value="TeamB">TeamB</option>
            <option value="TeamC">TeamC</option>
            <option value="TeamD">TeamD</option>
          </select>
        </div>
      </div>
      <div className='row justify-content-center mb-3 mt-3'>
        <div className='col-8'>
          <div className='card-collection'>

            {
              employees.map((employee)=>{
                return (
                  <div id={employee.id} key={employee.id} className={(employee.teamName === selectedTeam ? 'card m-2 standout': 'card m-2')} style={{cursor:"pointer"}} onClick={handleEmpoyeeCardClick} >
                {
                  employee.gender === 'male' ?
                <img src={maleProfile}/>
                : <img src={femaleProfile}/>
                }
                <div className='card-body'>
                  <h5 className='card-title'>
                    Full Name: {employee.fullName} 
                  </h5>
                  <p className='card-text'>
                    Designation: {employee.designation}
                  </p>
                </div>
                </div>
                
                )
              })
            }
            </div>
        </div>
      </div>
    </main>
  )
}

export default Employees
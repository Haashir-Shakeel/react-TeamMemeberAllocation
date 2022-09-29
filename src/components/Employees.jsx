import React, { useState } from 'react'

import TeamMembers from './TeamMembers'
import Teams from './Teams'
export const Employees = ({employees,selectedTeam,handleEmpoyeeCardClick,handleTeamSelectChange}) => {


  return (
    <main className='container'>
      <div className='row justify-content-center mb-3 mt-3'>
        <div className='col-6'>
          <Teams />
        </div>
      </div>
      <div className='row justify-content-center mb-3 mt-3'>
        <div className='col-8'>
          <div className='card-collection'>
            <TeamMembers />
            </div>
        </div>
      </div>
    </main>
  )
}

export default Employees
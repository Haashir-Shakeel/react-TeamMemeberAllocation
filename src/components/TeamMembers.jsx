import React from 'react'
import TeamMemberCard from './TeamMemberCard'

const TeamMembers = ({employees, selectedTeam,handleEmpoyeeCardClick}) => {
  return(
    
        employees.map((employee) => {
            return <TeamMemberCard employee={employee} handleEmpoyeeCardClick={handleEmpoyeeCardClick} selectedTeam={selectedTeam}/>
        })
    
  ) 
    
}

export default TeamMembers

//<TeamMemberCard handleEmpoyeeCardClick={handleEmpoyeeCardClick} selectedTeam={selectedTeam}/>
import React from 'react'
import { useContext } from 'react'
import { DataContext } from '../Context/DataContext'
import TeamMemberCard from './TeamMemberCard'

const TeamMembers = () => {
  const {employees} = useContext(DataContext)
  return(
    
        employees.map((employee) => {
            return <TeamMemberCard key={employee.id} employee={employee}/>
        })
    
  ) 
    
}

export default TeamMembers

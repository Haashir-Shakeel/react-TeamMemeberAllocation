import React from 'react'
import { useContext } from 'react'

import { useState } from 'react'
import { DataContext } from '../Context/DataContext'

export const GroupedTeamMembers = () => {

  const {employees, selectedTeam, setSelectedTeam} = useContext(DataContext)


  const groupTeamMembers = () =>{
    var teams = []

    var teamMembers = employees.filter((employee)=> employee.teamName === 'TeamA')
    var teamA = {team: 'TeamA', members: teamMembers, collapsed : selectedTeam === 'TeamA'?false:true}
    teams.push(teamA)

    var teamMembers = employees.filter((employee)=> employee.teamName === 'TeamB')
    var teamB = {team: 'TeamB', members: teamMembers, collapsed : selectedTeam === 'TeamB'?false:true}
    teams.push(teamB)

    var teamMembers = employees.filter((employee)=> employee.teamName === 'TeamC')
    var teamC = {team: 'TeamC', members: teamMembers, collapsed : selectedTeam === 'C'?false:true}
    teams.push(teamC)

    var teamMembers = employees.filter((employee)=> employee.teamName === 'TeamD')
    var teamD = {team: 'TeamD', members: teamMembers, collapsed : selectedTeam === 'TeamD'?false:true}
    teams.push(teamD)

    return teams
  }
  const [groupedEmployees, setGroupedEmployees] = useState(groupTeamMembers())

  const handleTeamClick = (event) =>{
    const transformedGroupData = groupedEmployees.map((groupedData)=> groupedData.team === event.currentTarget.id
                                                                      ?{...groupedData,collapsed: !groupedData.collapsed}
                                                                      :groupedData)
    setGroupedEmployees(transformedGroupData)
    setSelectedTeam(event.currentTarget.id)
   }
  return (
    <main className='container'>
      {
      groupedEmployees.map((item)=> {
        return (
        <div key={item.team} className='card mt-2' style={{cursor:"pointer"}}>
          <h4 id={item.team} className='card-header text-secondary bg-white' onClick={handleTeamClick}>
            Team Name: {item.team}
          </h4>
          <div id={'collapse_'+ item.team} className={item.collapsed === true? "collapse": ""}>
            <hr />
            {
              item.members.map((member)=> {
                return(
                  <div className='mt-2'>
                    <h5 className='card-title mt-2'>
                      <span className='text-dark'>Full Name: {member.fullName}</span>
                    </h5>
                    <p>Designation: {member.designation}</p>

                  </div>
                )
              })
            }

          </div>

        </div>
        )
      })
    }
    </main>
  )
}

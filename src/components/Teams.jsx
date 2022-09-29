import React from 'react'
import { useContext } from 'react'
import { DataContext } from '../Context/DataContext'

const Teams = () => {
  const {selectedTeam,handleTeamSelectChange} = useContext(DataContext)
  return (
    <select id="teams" className='form-select form-select-lg' value={selectedTeam}  onChange={handleTeamSelectChange}>
            <option value="TeamA">TeamA</option>
            <option value="TeamB">TeamB</option>
            <option value="TeamC">TeamC</option>
            <option value="TeamD">TeamD</option>
    </select>
  )
}

export default Teams
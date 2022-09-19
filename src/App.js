import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Content } from './components/Content';
import Employees from './components/Employees';
import { useState } from 'react';

function App() {

  const [team, setTeam] = useState('TeamB')

  const [employees, SetEmployees]=useState([{
    id: 1,
    fullName: "Bob Jones",
    designation: "JavaScript Developer",
    gender: "male",
    teamName: "TeamA"
  },
  {
    id: 2,
    fullName: "Jill Bailey",
    designation: "Node Developer",
    gender: "female",
    teamName: "TeamA"
  },
  {
    id: 3,
    fullName: "Gail Shepherd",
    designation: "Java Developer",
    gender: "female",
    teamName: "TeamA"
  },
  {
    id: 4,
    fullName: "Sam Reynolds",
    designation: "React Developer",
    gender: "male",
    teamName: "TeamB"
  },
  {
    id: 5,
    fullName: "David Henry",
    designation: "DotNet Developer",
    gender: "male",
    teamName: "TeamB"
  },
  {
    id: 6,
    fullName: "Sarah Blake",
    designation: "SQL Server DBA",
    gender: "female",
    teamName: "TeamB"
  },
  {
    id: 7,
    fullName: "James Bennet",
    designation: "Angular Developer",
    gender: "male",
    teamName: "TeamC"
  },
  {
    id: 8,
    fullName: "Jessica Faye",
    designation: "API Developer",
    gender: "female",
    teamName: "TeamC"
  },
  {
    id: 9,
    fullName: "Lita Stone",
    designation: "C++ Developer",
    gender: "female",
    teamName: "TeamC"
  },
  {
    id: 10,
    fullName: "Daniel Young",
    designation: "Python Developer",
    gender: "male",
    teamName: "TeamD"
  },
  {
    id: 11,
    fullName: "Adrian Jacobs",
    designation: "Vue Developer",
    gender: "male",
    teamName: "TeamD"
  },
  {
    id: 12,
    fullName: "Devin Monroe",
    designation: "Graphic Designer",
    gender: "male",
    teamName: "TeamD"
  }])

  const handleEmpoyeeCardClick = (event) => {
    console.log('inside emplyee card click')
    const transformedEmployees = employees.map((employee) => employee.id === parseInt(event.currentTarget.id)
      ?(employee.teamName === team)?{...employee, teamName:''}:{...employee,teamName:team}
      :employee)
      
      SetEmployees(transformedEmployees)
  }

  const handleTeamSelectChange = (event) => {
    setTeam(event.target.value)
  }
  return (
      <div>
        <Header/>
        <Employees 
        employees={employees}
        team={team}
        handleEmpoyeeCardClick={handleEmpoyeeCardClick}
        handleTeamSelectChange={handleTeamSelectChange}
        />
        <Footer/>
      </div>
    );
}

export default App;

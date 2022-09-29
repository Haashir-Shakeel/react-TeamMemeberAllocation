import './App.css';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import Employees from './components/Employees';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { GroupedTeamMembers } from './components/GroupedTeamMembers';
import Nav from './components/Nav';
import { NotFound } from './components/NotFound';
import { DataProvider } from './Context/DataContext';

function App() {
  return (
    <DataProvider>
      <Router>
        <Nav/>
        <Header />
        <Routes>
          <Route path='/' element={<Employees/>}/>
          <Route path='/GroupedTeamMembers' element = {<GroupedTeamMembers/> }/>
          <Route path='*' element = {<NotFound/>} ></Route>
        </Routes>
        <Footer/>
      </Router>
      </DataProvider>
    );
}

export default App;

import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Content } from './components/Content';
import Employees from './components/Employees';

function App() {
  return (
      <div>
        <Header/>
        <Employees/>
        <Footer/>
      </div>
    );
}

export default App;

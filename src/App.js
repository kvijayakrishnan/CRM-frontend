
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import CreateEmployee from './Components/CreateEmployee';
import EmployeeList from './Components/EmployeeList';
import UpdateEmployee from './Components/UpdateEmployee'




function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
          <Routes>

            <Route path='/' element={<EmployeeList/>}/>
            <Route path='/employees/create' element={<CreateEmployee/>}/>
            <Route path='/employees/:empID/update' element={<UpdateEmployee/>}/>  

          </Routes>
        <Footer/>
    </div>
    </BrowserRouter>
  );
}

export default App;

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Headerscreen from './Screen/Header/Headerscreen';
import Homescreen from './Screen/Homescreen/Homescreen';
import Coursescreen from './Screen/Courescreen/Courescreen';
import Categoryscreen from './Screen/categoryscreen/categoryscreen';
import Loginscreen from './Screen/loginscreen/loginscreen';
import Signupscreen from './Screen/singupscreen/signupscreen';
import Categoryformscreen from './Screen/categoryscreen/categoryfromscreen';
import Courseformscreen from './Screen/Courescreen/courseformscreen';


function App() {
  return (
    <div>
      <BrowserRouter>
      <Headerscreen/>
        <Routes>
          <Route path='/' element={<Homescreen/>}/>
          <Route path='/course' element={<Coursescreen/>}/>
          <Route path='/courseformscreen/' element={<Courseformscreen/>}/>
          <Route path='/courseformscreen/:id' element={<Courseformscreen/>}/>
          <Route path='/categoryscreen' element={<Categoryscreen/>}/>
          <Route path='/categoryformscreen' element={<Categoryformscreen/>} />
          <Route path='/categoryformscreen/:id' element={<Categoryformscreen/>} />
          <Route path='/loginscreen' element={<Loginscreen/>}/>
          <Route path='/signupscreen' element={<Signupscreen/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

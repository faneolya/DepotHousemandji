import logo from './logo.svg';
import './App.css';
import Hotel from './components/hotel';
import {Routes, Route} from "react-router-dom";

function App() {
  return (
    <div> <Routes>
      <Route path='/' element ={<Hotel/>}/>
      <Route path='/ Calendar ' element ={<Hotel/>}/>
      

    </Routes>
    
    </div>
  );
}

export default App;

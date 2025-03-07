import './App.css';
import Header from './components/Header';
import LeftMenu from './components/LeftMenu';
import List from './pages/List';
import Detail from './pages/Detail';
import { Routes, Route } from "react-router-dom"


function App() {
  return (
    <div className="App">
      
      <Header />
      <div className='layout'> 
        <LeftMenu />
        <Routes>
          <Route path="/" element={<List />} />
          <Route path="/Detail" element={<Detail />} />
        </Routes>
        


      </div>
      

    
    </div>
  );
}

export default App;

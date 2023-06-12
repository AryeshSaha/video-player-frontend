import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Bucket from './Components/SingleBucket/Bucket';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/buck/:buckId' element={<Bucket />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

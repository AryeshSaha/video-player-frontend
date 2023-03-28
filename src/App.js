import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Bucket from './Pages/Buckets/Bucket';
import Home from './Pages/Home/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/:id' element={<Bucket />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

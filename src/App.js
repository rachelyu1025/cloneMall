import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Main from './pages/Main';
import Navbar from './components/Navbar';
import DetailPage from './pages/DetailPage';
import LoginPage from './pages/LoginPage';

function App() {
  const [auth, setAuth] = useState(false);

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Main />} />
        {/* <Route path='/shop/:id' element={<ProductAll />} /> */}
        {/* <Route path='/shop/:id/:id' element={<DetailPage />} /> */}
        <Route path='/shop/:id' element={<DetailPage />} />
        <Route path='/login' element={<LoginPage setAuth={setAuth} />} />
      </Routes>
    </div>
  );
  // return <ProductAll />;
}

export default App;

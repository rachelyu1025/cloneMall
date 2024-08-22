import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Main from './pages/Main';
import Navbar from './components/Navbar';
import LoginPage from './pages/LoginPage';
import PrivateRoute from './route/PrivateRoute';

function App() {
  const [auth, setAuth] = useState(false);

  return (
    <div>
      <Navbar auth={auth} setAuth={setAuth} />
      <Routes>
        <Route path='/' element={<Main auth={auth} />} />
        {/* <Route path='/shop/:id' element={<ProductAll />} /> */}
        {/* <Route path='/shop/:id/:id' element={<DetailPage />} /> */}
        <Route path='/shop/:id' element={<PrivateRoute auth={auth} />} />
        <Route path='/login' element={<LoginPage setAuth={setAuth} />} />
      </Routes>
    </div>
  );
}

export default App;

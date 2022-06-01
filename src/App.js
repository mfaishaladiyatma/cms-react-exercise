import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Login from './components/Login';
import Cms from './components/Cms';
import UserPage from './components/UserPage';
import ProtectedRoute from './components/common/ProtectedRoute';

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path='/'>
            <Route index element={<Login />} ></Route>
            <Route element={<ProtectedRoute />}>
              <Route path='cms' element={<Cms />}></Route>
              <Route path='userPage' element={<UserPage />}></Route>
            </Route>
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;

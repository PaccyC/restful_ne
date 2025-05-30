import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import AuthLayout from './layout/AuthLayout';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import RootLayout from './layout/RootLayout';
import Dashboard from './pages/Dashboard';
import useAuthContext from './hooks/useAuthContext';
import CarMovements from './pages/CarMovements';
import Parkings from './pages/Parkings';

function App() {
  const { user } = useAuthContext();
  console.log(user);
  

  return (
    <Router>
      <Routes>
        {/* Protected routes */}
        <Route element={user ? <RootLayout /> : <Navigate to="/login" replace />}>
          <Route path="/" element={<Dashboard />} />
          <Route path='/parkings' element={<Parkings/>}/>
          <Route path='/car-movements' element={<CarMovements/>}/>
        </Route>

        <Route element={!user ? <AuthLayout /> : <Navigate to="/" replace />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>

        {/* Catch-all redirect */}
        <Route path="*" element={<Navigate to={user ? "/" : "/login"} replace />} />
      </Routes>
    </Router>
  );
}

export default App;

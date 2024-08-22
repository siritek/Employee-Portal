// import React, { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import Payment from './Pages/Payment';
// import Sidebar from './Components/Sidebar';
// import Employee from './Pages/Employee';
// import Login from './Login';
// import Projects from './Pages/Projects';
// import Dashboard from './Pages/Dashboard';
// import './App.css';

// const App = () => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
//         {isAuthenticated && (
//           <Route
//             path="/*"
//             element={<AuthenticatedRoutes setIsAuthenticated={setIsAuthenticated} />}
//           />
//         )}
//         {!isAuthenticated && <Route path="*" element={<Navigate to="/" />} />}
//       </Routes>
//     </Router>
//   );
// };

// const AuthenticatedRoutes = ({ setIsAuthenticated }) => (
//   <div style={{ display: 'flex' }}>
//     <Sidebar />
//     <div style={{ flex: 1 }}>
//       {/* <NavBar setIsAuthenticated={setIsAuthenticated} /> */}
//       <Routes>
//         <Route path="Dashboard" element={<Dashboard />} />
//         <Route path="/employee" element={<Employee />} />
//         <Route path="/projects" element={<Projects />} />
//         <Route path="/payment" element={<Payment />} />
//       </Routes>
//     </div>
//   </div>
// );

// export default App;


import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Payment from './Pages/Payment';
import Sidebar from './Components/Sidebar';
import Employee from './Pages/Employee';
import Login from './Login';
import Projects from './Pages/Projects';
import Dashboard from './Pages/Dashboard';
import './App.css';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
        {/* Redirect authenticated users to Dashboard */}
        <Route
          path="/"
          element={isAuthenticated ? <Navigate to="/Dashboard" /> : <Login setIsAuthenticated={setIsAuthenticated} />}
        />
        {/* Protected routes */}
        {isAuthenticated && (
          <Route path="/*" element={<AuthenticatedRoutes setIsAuthenticated={setIsAuthenticated} />} />
        )}
      </Routes>
    </Router>
  );
};

const AuthenticatedRoutes = ({ setIsAuthenticated }) => (
  <div style={{ display: 'flex' }}>
    <Sidebar />
    <div style={{ flex: 1 }}>
      {/* <NavBar setIsAuthenticated={setIsAuthenticated} /> */}
      <Routes>
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/employee" element={<Employee />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/payment" element={<Payment />} />
        {/* Add a catch-all route for authenticated users */}
        <Route path="*" element={<Navigate to="/Dashboard" />} />
      </Routes>
    </div>
  </div>
);

export default App;



















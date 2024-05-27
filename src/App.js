
    import React from 'react';
    import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
    import Login from './components/Login.jsx';
    import Signup from './components/Signup.jsx';
    import Dashboard from './components/SellerDashboard.jsx'
    import Dashboardbuy from './components/BuyerDashboard.jsx'
    
    const App = () => {
      return (
        <Router>
            <Routes>
              <Route path="/" element={<Login/>} />
              <Route path="/signup" element={<Signup/>} />
              <Route path="/seller_dashboard" element={<Dashboard/>}/>
              <Route path="/buyer_dashboard" element={<Dashboardbuy/>}/>
            </Routes>
        </Router>
      );
    };
    


export default App;

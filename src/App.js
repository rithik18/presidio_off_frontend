
    import React from 'react';
    import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
    import Login from './components/Login.jsx';
    import Signup from './components/Signup.jsx';
    import Dashboard from './components/SellerDashboard.jsx'
    import Dashboardbuy from './components/BuyerDashboard.jsx'
    
    const App = () => {
      return (
        
            <Routes>
              <Route exact path="/" element={<Login/>} />
              <Route exact path="/signup" element={<Signup/>} />
              <Route exact path="/seller_dashboard" element={<Dashboard/>}/>
              <Route exact path="/buyer_dashboard" element={<Dashboardbuy/>}/>
            </Routes>
        
      );
    };
    


export default App;

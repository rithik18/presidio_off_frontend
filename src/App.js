
    import React from 'react';
    import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
    import Login from './components/Login.jsx';
    import Signup from './components/Signup.jsx';
    import Dashboard from './components/SellerDashboard.jsx'
    import Dashboardbuy from './components/BuyerDashboard.jsx'
    import App1 from './components/trial.jsx'
    
    const App = () => {
      return (
        
            <Routes>
              <Route exact path="/" element={<Login/>} />
              <Route path="/signup" element={<Signup/>} />
              <Route path="/seller_dashboard" element={<Dashboard/>}/>
              <Route path="/buyer_dashboard" element={<Dashboardbuy/>}/>
              <Route path='/trial' element={<App1/>}/>
            </Routes>
        
      );
    };
    


export default App;

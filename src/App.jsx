import React from 'react';
import Navbar from './components/Navbar';
import AppRoutes from './routes/AppRoutes';

const App = () => {
  return (
    <div className='w-screen h-screen box-border'>
      <AppRoutes />;
    </div>)

}

export default App;

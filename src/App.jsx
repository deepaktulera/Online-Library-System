import React from 'react';
import Navbar from './components/Navbar';
import AppRoutes from './routes/AppRoutes';

const App = () => {
  return (
    <div className='w-screen h-screen px-4 py-2'>
      <Navbar />
      <AppRoutes />
    </div>
  );
}

export default App;

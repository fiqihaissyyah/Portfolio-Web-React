import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AnimatedRoutes from './components/animated/animatedRoutes';


function App() {
	
  return (
    <div className="App">
      <BrowserRouter>
		<AnimatedRoutes/>
      </BrowserRouter>
    </div>
  );
}

export default App;

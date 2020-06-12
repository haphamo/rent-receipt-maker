import React from "react";
import Receipt from './components/Receipt.js';
import CreateProfile from './components/CreateProfile.js';

function App() {
  
  return (
    <section>
      <section>
        <CreateProfile landlord /> 
      </section>
      <Receipt />
    </section>
    
  );
}

export default App;

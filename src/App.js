import React, { useState, Fragment } from "react";
import Receipt from './components/Receipt.js';
import CreateProfile from './components/CreateProfile.js';
import CreateTenant from './components/CreateTenant.js';

import { allTenants, landlords, tenantsBelongingToALandlord } from './fixture/fixture.js';

function App() {
  // from Receipt
  const [landlord, setLandlord] = useState('')
  const [tenant, setTenant] = useState('')
  const [paymentMethod, setPaymentMethod] = useState('')
  // from Create
  const [newLandlord, setNewLandlord] = useState('');
  const [allLandlords, setAllLandlords] = useState(landlords)
  
  
  
  const displayTenants = (landlordName) => {
    
    if(!tenantsBelongingToALandlord[landlordName]) {
      return(
        <option value="">--No tenants for this landlord, please create one!--</option>
      )
    } else {
      const availableTenantOptions = tenantsBelongingToALandlord[landlordName].map(tenant => {
        return(
        <option key={tenant.id} value={tenant.tenantName}>{tenant.tenantName}</option>
        )
      })
      return (
        <Fragment>
          <option value="">--Select a Tenant--</option>
          {availableTenantOptions}
        </Fragment>
      )
    }
  }

  return (
    <section>
      <CreateProfile 
        allLandlords={allLandlords} 
        setNewLandlord={setNewLandlord} 
        newLandlord={newLandlord}
        setAllLandlords={setAllLandlords}
      /> 

      <Receipt 
        allLandlords={allLandlords}
        allTenants={allTenants}
        displayTenants={displayTenants}
        landlord={landlord}
        setLandlord={setLandlord}
        tenant={tenant}
        setTenant={setTenant}
        paymentMethod={paymentMethod}
        setPaymentMethod={setPaymentMethod}
      />
    </section>
    
  );
}

export default App;

import React, { useState, Fragment } from "react";
import Receipt from './components/Receipt.js';
import CreateProfile from './components/CreateProfile.js';
import CreateTenant from './components/CreateTenant.js';

import { allTenants, landlords, tenantsBelongingToALandlord, allPropertyAddresses } from './fixture/fixture.js';

function App() {

  const [landlord, setLandlord] = useState('')
  const [tenant, setTenant] = useState('')
  const [paymentMethod, setPaymentMethod] = useState('')

  const [newLandlord, setNewLandlord] = useState('');
  const [allLandlords, setAllLandlords] = useState(landlords)
  
  const allLandlordsForSelect = allLandlords.map(landlord => {
    return(
    <option key={landlord.id} value={landlord.name}>{landlord.name}</option>
    )
  })
  const allAddressesForSelect = allPropertyAddresses.map(address => {
    return(
    <option key={address.id} value={address.address}>{address.landlord}: {address.address}</option>
    )
  })

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
      <hr></hr>
      <CreateTenant allAddressesForSelect={allAddressesForSelect}/>
      <Receipt 
        allLandlordsForSelect={allLandlordsForSelect}
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

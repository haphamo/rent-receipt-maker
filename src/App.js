import React, { useState, Fragment } from "react";
import Receipt from './components/Receipt.js';
import CreateProfile from './components/CreateProfile.js';
import CreateTenant from './components/CreateTenant.js';

import { allTenants, landlords, tenantsBelongingToALandlord, allPropertyAddresses, data } from './fixture/fixture.js';

function App() {

  const [fixture, setFixture ] = useState(data)

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
  // function is used in the CreateTenant component
  const allAddressesForSelect = fixture.propertyAddresses.map(address => {
    return(
    <option key={address.id} data-landlord={address.landlord} value={address.address}>{address.landlord}: {address.address}</option>
    )
  })

  const displayTenants = (landlordName, tenantsBelongingToALandlord) => {
    // receives selected landlord name from user

    const tenantList = Object.entries(allTenants).filter(tenant => tenant[1].landlord === landlordName)
    // const tenantList = tenantsBelongingToALandlord[landlordName]

    if(tenantList.length > 0) {
      const availableTenantOptions = tenantList.map(tenant => {
        return(
          <option key={tenant[1].id} value={tenant[0]}>{tenant[0]}</option>
        )
      })
      return(
        <Fragment>
           <option value="">--Select a Tenant--</option>
          {availableTenantOptions}
        </Fragment>
      )
    }

    return(
      <option value="">--No tenants for this landlord, please create one!--</option>
    )
  }

  return (
    <section>
      <CreateProfile 
        setFixture={setFixture}
        fixture={fixture}
      /> 
      <hr></hr>
      <CreateTenant 
        allAddressesForSelect={allAddressesForSelect}
        setFixture={setFixture}
        fixture={fixture}
      />
      <hr></hr>
      {/* 
      The Receipt component needs 
        1. All Landlord data
        2. Once landlord is choses, display all tenants with their data for that landlord (allTenants)
      */}
      <h2>Receipt</h2>
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

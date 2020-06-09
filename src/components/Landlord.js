import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';


const landlords = {};

// fixture rent receipt
const rentReceipts = {
  1: {
    id: 1,
    landlordName: 'Andrew Ly',
    tenantName: 'Sebastian Gustavo',
    dateReceived: '06/01/2020',
    propertyAddress: '33 Bremnar Avenue',
    rentAmount: 240000,
  }
}

function Landlord() {
  const [landlord, setLandlord] = useState('')

  const handleLandlordChange = (evt) => {
    setLandlord(evt.target.value)
  }
  

  return (
    <section className="container">

    <hr></hr>
      <label for="landlord-select">Choose a landlord:
      </label>
      <select name="landlords" id="landlord-select" value={landlord} onChange={handleLandlordChange}>
        <option value="">--Please choose a landlord--</option>
        <option value='Andrew Ly'>Andrew Ly</option>
      </select>

      <label for="tenant-select">Choose a tenant:
      </label>
      <select name="tenants" id="tenant-select">
        <option value="">--Please choose a tenant--</option>
        <option value='Sebastian Gustavo'>Sebastian Gustavo</option>
      </select>
      <hr></hr>
      <main className="sample-receipt" style={{display: 'flex', flexDirection: 'column'}}>
        <time>Date: {Date()}</time>
        <text>Landlord: {landlord}</text>
        <text>Tenant: {rentReceipts['1'].tenantName}</text>
     
        <address>Address: {rentReceipts['1'].propertyAddress}</address>
        <data className="money">Rent Amount:  ${rentReceipts['1'].rentAmount/100}</data>

      </main>
    </section>
  );
}

export default Landlord;

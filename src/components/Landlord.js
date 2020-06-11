import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

const landlords = [
  {
    id: 123,
    name: 'Andrew Ly'
  },
  {
    id: 456,
    name: 'Ha Pham'
  },
  {
    id: 789,
    name: 'Tina Pham'
  }
];

// list of all tenants is a collection {} of tenants, a list of tenants belonging to a landlord
const tenantsBelongingToALandlord = {
  'Andrew Ly': [
    {
      id: 111,
      tenantName: 'Dimitri Gustavo',
    },
    {
      id: 222,
      tenantName: 'Katerina',
    }
  ],
  'Ha Pham': [
    {
      id: 333,
      tenantName: 'Rob Long',
    },
    {
      id: 444,
      tenantName: 'Senorita',
    }
  ]
}

const allTenants = {
  'Dimitri Gustavo': {
      id: 111,
      rentAmount: 240000,
      address: '9 Spadina Avenue',
      payment_method: 'e-transfer'
  },
  'Katerina': {
      id: 222,
      rentAmount: 200000,
      address: '188 Spadina Avenue',
      payment_method: 'cash '
  },
  'Rob Long': {
      id: 333,
      rentAmount: 50000,
      address: '300 Harvie Road',
      payment_method: 'e-transfer'
  },
  'Senorita': {
      id: 444,
      rentAmount: 210000,
      address: '200 Highway 7',
      payment_method: 'e-transfer'
  }
}

function Landlord() {
  const [landlord, setLandlord] = useState('')
  const [tenant, setTenant] = useState('')
  const [paymentMethod, setPaymentMethod] = useState('')
  const [day, setDay] = useState('')
  const [month, setMonth] = useState('')
  const [year, setYear] = useState('')

  const allLandlords = landlords.map(landlord => {
    return(
    <option key={landlord.id} value={landlord.name}>{landlord.name}</option>
    )
  })

  const getTenants = (landlordName) => {
    const result = tenantsBelongingToALandlord[landlordName].map(tenant => {
      return(
      <option key={tenant.id} value={tenant.tenantName}>{tenant.tenantName}</option>
      )
    })
    return result
  }

  const handleLandlordChange = evt => {
    setLandlord(evt.target.value);
    // when the landlord changes, reset the tenant field
    setTenant('');
  }
  
  const handleTenantChange = evt => {
    setTenant(evt.target.value)
  }

  const handleDay = evt => {
    setDay(evt.target.value)
  }
  const handleMonth = evt => {
    setMonth(evt.target.value)
  }
  const handleYear = evt => {
    setYear(evt.target.value)
  }

  return (
    <section className="container">

    <hr></hr>
      <label htmlFor="landlord-select">Choose a landlord:
      </label>
      <select name="landlords" id="landlord-select" value={landlord} onChange={handleLandlordChange}>
        <option value="">--Please choose a landlord--</option>
        {allLandlords}
      </select>

      <label htmlFor="tenant-select">Choose a tenant:
      </label>
      <select name="tenants" id="tenant-select" value={tenant} onChange={handleTenantChange}>
        <option value="">--Please choose a tenant--</option>
        {landlord && getTenants(landlord)}
      </select>
      <hr></hr>
      <main className="sample-receipt" style={{display: 'inline-grid'}}>

        <date>Date:
          <label htmlFor="date-day">
            <select id="date-day" name="day" value={day} onChange={handleDay}>
              <option value="" disabled>--</option>
              <option value="1">1</option>
              <option value="2">2</option>
            </select>Day
          </label>
          <label htmlFor="date-month">
            <select id="date-month" name="month" value={month} onChange={handleMonth}>
              <option value="" disabled>--</option>
              <option value="Jan">Jan</option>
              <option value="Feb">Feb</option>
            </select>Month
          </label>
          <label htmlFor="date-year">
            <select id="date-year" name="year" value={year} onChange={handleYear}>
              <option value="" disabled>--</option>
              <option value="2019">2019</option>
              <option value="2020">2020</option>
            </select>Year
          </label>
        </date>

        <text>Landlord: {landlord}</text>
        <text>Tenant: {tenant}</text>
     
        <address>Address: {tenant && allTenants[tenant].address}</address>
        <data className="money">Rent Amount:  ${tenant && allTenants[tenant].rentAmount / 100}</data>

        <label htmlFor="payment-method">Payment Method:    
          <select id="payment-method" name="payment-method" value={tenant ? allTenants[tenant].payment_method : ""}>
              <option value="">Please choose a tenant</option>
              <option value="cash">Cash</option>
              <option value="e-transfer" >E-transfer</option>
          </select>
        </label>
        <button >Create Rent Receipt!</button>
      </main>
    </section>
  );
}

export default Landlord;

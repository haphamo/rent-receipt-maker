import React, { useState } from "react";
import {  allTenants, landlords, tenantsBelongingToALandlord } from '../fixture/fixture.js';

function Landlord() {
  const [landlord, setLandlord] = useState('')
  const [tenant, setTenant] = useState('')
  const [paymentMethod, setPaymentMethod] = useState('')
  // const [day, setDay] = useState('')
  // const [month, setMonth] = useState('')
  // const [year, setYear] = useState('')

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
    // call displayDefaultPaymentMethod which changes the default value in payment method
  }
  const handlePaymentMethod = evt => {
    setPaymentMethod(evt.target.value)
  }

  // const handleDay = evt => {
  //   setDay(evt.target.value)
  // }
  // const handleMonth = evt => {
  //   setMonth(evt.target.value)
  // }
  // const handleYear = evt => {
  //   setYear(evt.target.value)
  // }

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

        {/* <date>Date:
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
        </date> */}

        <text>Landlord: {landlord}</text>
        <text>Tenant: {tenant}</text>
     
        <address>Address: {tenant && allTenants[tenant].address}</address>
        <data className="money">Rent Amount:  ${tenant && allTenants[tenant].rentAmount / 100}</data>

        <label htmlFor="payment-method">Payment Method:    
          <select id="payment-method" name="payment-method" value={paymentMethod} onChange={handlePaymentMethod}>
              <option value="" disabled>Please choose a tenant</option>
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

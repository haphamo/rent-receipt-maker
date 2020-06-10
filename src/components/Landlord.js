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

const tenants = {
  '123': {
    tenantName: 'Dimitri Gustavo',
    rentAmount: 240000,
    address: '9 Spadina Avenue'
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

  const handleLandlordChange = evt => {
    setLandlord(evt.target.value)
  }
  
  const handleTenantChange = evt => {
    setTenant(evt.target.value)
  }

  const handlePaymentMethod = evt => {
    setPaymentMethod(evt.target.value)
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
      <label for="landlord-select">Choose a landlord:
      </label>
      <select name="landlords" id="landlord-select" value={landlord} onChange={handleLandlordChange}>
        <option value="">--Please choose a landlord--</option>
        {allLandlords}
      </select>

      <label for="tenant-select">Choose a tenant:
      </label>
      <select name="tenants" id="tenant-select" value={tenant} onChange={handleTenantChange}>
        <option value="">--Please choose a tenant--</option>
        <option value='Sebastian Gustavo'>Sebastian Gustavo</option>
      </select>
      <hr></hr>
      <main className="sample-receipt" style={{display: 'flex', flexDirection: 'column'}}>

        <date>Date:
          <label for="date-day">
            <select id="date-day" name="day" value={day} onChange={handleDay}>
              <option value="" disabled>--</option>
              <option value="1">1</option>
              <option value="2">2</option>
            </select>Day
          </label>
          <label for="date-month">
            <select id="date-month" name="month" value={month} onChange={handleMonth}>
              <option value="" disabled>--</option>
              <option value="Jan">Jan</option>
              <option value="Feb">Feb</option>
            </select>Month
          </label>
          <label for="date-year">
            <select id="date-year" name="year" value={year} onChange={handleYear}>
              <option value="" disabled>--</option>
              <option value="2019">2019</option>
              <option value="2020">2020</option>
            </select>Year
          </label>
        </date>

        <text>Landlord: {landlord}</text>
        <text>Tenant: {tenant}</text>
     
        <address>Address: {}</address>
        <data className="money">Rent Amount:  ${}</data>

        <label for="payment-method">Payment Method    
        <select id="payment-method" name="payment-method" value={paymentMethod} onChange={handlePaymentMethod}>
            <option value="" disabled>--Please Choose a Method--</option>
            <option value="cash">Cash</option>
            <option value="etransfer">E-transfer</option>
          </select>
        </label>
                

      </main>
    </section>
  );
}

export default Landlord;

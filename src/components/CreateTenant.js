import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { allTenants } from '../fixture/fixture.js';

function CreateTenant({ allAddressesForSelect }) {
  const [newTenant, setNewTenant] = useState('')
  const [addressOfTenant, setAddressOfTenant] = useState('')
  const [rent, setRent] = useState('')
  const [paymentMethod, setPaymentMethod] = useState('etransfer')

  const handleNewTenant = evt => {
    setNewTenant(evt.target.value)
  }

  const handleAddressOfTenant = evt => {
    setAddressOfTenant(evt.target.value)
  }

  const handleRentChange = evt => {
    setRent(evt.target.value)
  }

  const handlePaymentMethodChange = evt => {
    setPaymentMethod(evt.target.value)
  }

  const handleSubmit = evt => {
    evt.preventDefault();
    // alert(`New Tenant: ${newTenant}, Address: ${addressOfTenant}, Rent: ${rent}, Payment Method: ${paymentMethod}`)
  }

  return(
    <section>
      <h2>Create New Tenant Profile</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="tenant-name">
          <input id="tenant-name" name="name" value={newTenant} onChange={handleNewTenant} type="text" placeholder="Tenant Name" required></input>
        </label>

        <label htmlFor="property-address">
          <select name="property-address" id="property-address" value={addressOfTenant} onChange={handleAddressOfTenant}>
            <option value="" disabled>Which property?</option>
            {allAddressesForSelect}
          </select>
        </label>

        <label htmlFor="rent-amount">
          $<input id="rent-amount" type="number" placeholder="500" min="1" value={rent} onChange={handleRentChange} required></input>
        </label>

        <label>
          <select name="payment-method" id="payment-method" value={paymentMethod} onChange={handlePaymentMethodChange}>
            <option value="etransfer">E-transfer</option>
            <option value="cash">Cash</option>
          </select>
        </label>
        <button type="submit">Add Tenant</button>
      </form>
    <ul>
    
    </ul>

  </section>
  )
}

export default CreateTenant;
import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { allTenants } from '../fixture/fixture.js';

// ToDo; Add logic in the rent input to only allow numbers, no text/special charas, spaces

function CreateTenant({ allAddressesForSelect, fixture, setFixture }) {
  const { tenants } = fixture;

  const [newTenant, setNewTenant] = useState('')
  const [landlord, setLandlord] = useState('')
  const [addressOfTenant, setAddressOfTenant] = useState('')
  const [rent, setRent] = useState('')
  const [paymentMethod, setPaymentMethod] = useState('etransfer')

  const handleNewTenant = evt => {
    setNewTenant(evt.target.value)
  }

  const handleAddressOfTenant = evt => {
    let idx = evt.target.selectedIndex
    setAddressOfTenant(evt.target.value)
    setLandlord(evt.target.options[idx].getAttribute('data-landlord'))
  }

  const handleRentChange = evt => {
    setRent(evt.target.value)
  }

  const handlePaymentMethodChange = evt => {
    setPaymentMethod(evt.target.value)
  }

  const handleSubmit = evt => {
    evt.preventDefault();
    const newTenantDetails = {
      id: uuidv4(),
      rentAmount: rent * 100,
      landlord: landlord,
      address: addressOfTenant,
      paymentMethod: paymentMethod
    }

    setFixture({...fixture, tenants: {...tenants, [`${newTenant}`]: newTenantDetails}})
  
    setNewTenant('')
    setPaymentMethod('etransfer')
    setRent('')
    setAddressOfTenant('')
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
import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { allTenants } from '../fixture/fixture.js';

function CreateTenant({ allLandlordsForSelect }) {
  const [newTenant, setNewTenant] = useState('')
  const [landlordOfNewTenant, setLandlordOfNewTenant] = useState('')

  const handleNewTenant = evt => {
    setNewTenant(evt.target.value)
  }

  const handleSubmit = evt => {
    evt.preventDefault();
    alert('submitted!')
  }

  return(
    <section>
      <h2>Create New Tenant Profile</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="tenant-name">
          <input id="tenant-name" name="name" value={newTenant} onChange={handleNewTenant} type="text" placeholder="Tenant Name" required></input>
        </label>

        <label htmlFor="which-landlord">
          <select>
            <option value="">Who is the landlord?</option>
            {allLandlordsForSelect}
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
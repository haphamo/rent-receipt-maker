import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { landlords } from '../fixture/fixture.js';

function CreateProfile({ allLandlords, setNewLandlord, newLandlord, setAllLandlords}) {
  const [address, setAddress] = useState('')
  
  const handleSubmitNewLandlord = (evt) => {
    evt.preventDefault();
    const newLandlordEntry = {id: uuidv4(), name: newLandlord, address}

    setAllLandlords([...allLandlords, newLandlordEntry])
    setNewLandlord('')
    setAddress('')
  }
  
  const handleNewLandlord = (evt) => {
    setNewLandlord(evt.target.value)
  }
  const handleAddress = evt => {
    setAddress(evt.target.value)
  }

  const displayAllLandlords = (data) => {
    const result = data.map(landlord => {
      return(
        <li key={landlord.id}>{landlord.name}</li>
      )
    })
    return result
  }
  
  return(
    <section>
      <h2>Create New Landlord Profile</h2>
      <form onSubmit={handleSubmitNewLandlord}>
        <label htmlFor="landlord-name">
          <input id="landlord-name" name="name" value={newLandlord} onChange={handleNewLandlord} type="text" placeholder="Name" required></input>
          <address><input id="landlord-address" name="address" type="text" placeholder="Address" value={address} onChange={handleAddress} required></input></address>
          <button type="submit">Add A Landlord</button>
        </label>
      </form>
    <ul>
      {/* {displayAllLandlords(allLandlords)} */}
    </ul>

    </section>
  )
}

export default CreateProfile;
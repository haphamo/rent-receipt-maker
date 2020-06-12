import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { landlords } from '../fixture/fixture.js';

function CreateProfile() {
  const [newLandlord, setNewLandlord] = useState('');
  const [allLandlords, setAllLandlords] = useState(landlords)

  const handleSubmitNewLandlord = (evt) => {
    evt.preventDefault();
    const newLandlordEntry = {id: uuidv4(), name: newLandlord}
    setAllLandlords([...allLandlords, newLandlordEntry])
  }
  
  const handleNewLandlord = (evt) => {
    setNewLandlord(evt.target.value)
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
      <form onSubmit={handleSubmitNewLandlord}>
        <label htmlFor="landlord-name">
          <input id="landlord-name" name="name" value={newLandlord} onChange={handleNewLandlord}type="text" placeholder="John Smith"></input>
          <button type="submit">Add A Landlord</button>
        </label>

      </form>
    <ul>
      {displayAllLandlords(allLandlords)}
    </ul>

    </section>
  )
}

export default CreateProfile;
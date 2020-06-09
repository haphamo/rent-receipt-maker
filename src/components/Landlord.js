import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

function Landlord() {
  const [landlord, setLandlord] = useState("");
  const [displayLandlord, setDisplayLandlord] = useState("");
  // prevent default on form submission
  const handleChange = evt => {
    setLandlord(evt.target.value)
    // evt.target.value = "";
  }

  
  const handleSubmit = (evt) => {
    evt.preventDefault();
    setDisplayLandlord(landlord)
    evt.target.reset()
  }

  const style = {
    // display: 'flex',
    // flexDirection: 'column'
  }

  const rentReceipts = {
    1: {
      id: 1,
      landlordName: 'Andrew Ly',
      tenantName: 'Sebastian Gustavo',
      dateReceived: 06/01/2020,
      propertyAddress: '33 Bremnar Avenue',
      rentAmount: 240000,
    }
  }

  return (
    <section className="container">
      <form className="add-landlord" onSubmit={handleSubmit}>
        <label name="landlord" style={style}>
          Please add a landlord:
          <input
            type="text"
            onChange={handleChange}
            name="landlord"
          ></input>
          <button type="submit">Add Landlord</button>
        </label>
      </form>
      The landlord's name is: {displayLandlord}
    </section>
  );
}

export default Landlord;

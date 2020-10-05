import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Card from "./Card.js"

// My profile component
function Landlords({ setFixture, fixture }) {
  const { landlords, propertyAddresses } = fixture;

  const [address, setAddress] = useState("");
  const [landlordName, setLandlordName] = useState("");

  const handleSubmitNewLandlord = (evt) => {
    // this updates the data with new landlord and property entry
    evt.preventDefault();

    const newLandlordEntry = {
      name: landlordName,
      properties: [address],
      tenants: [{
        address: address
      }]
    };

    const newPropertyEntry = {
      id: uuidv4(),
      address: address,
      landlord: landlordName,
    };

    setFixture({
      ...fixture,
      landlords: {...landlords, [`${uuidv4()}`]: newLandlordEntry},
      propertyAddresses: [...propertyAddresses, newPropertyEntry],
    });

    // clears text fields
    setLandlordName("");
    setAddress("");
  };

  const handleNewLandlord = (evt) => {
    setLandlordName(evt.target.value);
  };

  const handleAddress = (evt) => {
    setAddress(evt.target.value);
  };
  
  return (
    <section>
      <h2>Create New Landlord Profile</h2>
      <form onSubmit={handleSubmitNewLandlord}>
        <label htmlFor="landlord-name">
          <input
            id="landlord-name"
            name="name"
            value={landlordName}
            onChange={handleNewLandlord}
            type="text"
            placeholder="Name"
            required
          ></input>
          <address>
            <input
              id="landlord-address"
              name="address"
              type="text"
              placeholder="Address"
              value={address}
              onChange={handleAddress}
              required
            ></input>
          </address>
          <button type="submit">Add A Landlord</button>
        </label>
      </form>
      <Card fixture={fixture}/>
    </section>
  );
}

export default Landlords;

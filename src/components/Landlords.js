import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Card from "./Card.js"

function Landlords({ setFixture, fixture }) {
  const { landlords, propertyAddresses } = fixture;

  const initialState = {
    name: "",
    properties: [],
    tenants: []
  };

  const [newLandlordEntry, setNewLandlordEntry] = useState(initialState);
  const { name, landlordName, properties } = newLandlordEntry;

  const handleSubmitNewLandlord = (evt) => {
    evt.preventDefault();

    const newPropertyEntry = {
      id: uuidv4(),
      address: properties,
      landlord: landlordName,
      tenants: []
    };

    setFixture({
      ...fixture,
      landlords: {...landlords, [`${uuidv4()}`]: newLandlordEntry},
      propertyAddresses: [...propertyAddresses, newPropertyEntry],
    });
    // clears text fields
    setNewLandlordEntry(initialState);
  };

  const handleChange = evt => {
    const { value, name } = evt.target;
    switch (name) {
      case "name":
        setNewLandlordEntry({...newLandlordEntry, name: value})
        break;
      case "address":
        setNewLandlordEntry({...newLandlordEntry, tenants: [{address: value}], properties: [value]})
        break;
      default:
        throw new Error("Error")
    }
  };
  
  return (
    <section>
      <h2>Create New Landlord Profile</h2>
      <form onSubmit={handleSubmitNewLandlord}>
        <label htmlFor="landlord-name">
          <input
            id="landlord-name"
            name="name"
            value={name}
            onChange={handleChange}
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
              value={properties}
              onChange={handleChange}
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

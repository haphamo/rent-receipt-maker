import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function CreateProfile({ setFixture, fixture }) {
  const { landlords, propertyAddresses } = fixture;

  const [address, setAddress] = useState("");
  const [landlordName, setLandlordName] = useState("");

  const handleSubmitNewLandlord = (evt) => {
    // this updates the data with new landlord and property entry
    evt.preventDefault();
    const newLandlordEntry = {
      id: uuidv4(),
      name: landlordName,
      address: [address],
    };
    const newPropertyEntry = {
      id: uuidv4(),
      address: address,
      landlord: landlordName,
    };

    setFixture({
      ...fixture,
      landlords: [...landlords, newLandlordEntry],
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
  // Temp, just to test if the new entry gets inputted
  const displayAllLandlords = (data) => {
    const result = data.map((landlord) => {
      return <li key={landlord.id}>{landlord.name}</li>;
    });
    return result;
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
      <ul>
        <h3>All Landlords</h3>
        {displayAllLandlords(landlords)}
      </ul>
    </section>
  );
}

export default CreateProfile;

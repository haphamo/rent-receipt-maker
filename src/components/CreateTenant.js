import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Card from './Card.js';
// ToDo; Add logic in the rent input to only allow numbers, no text/special charas, spaces

function CreateTenant({ fixture, setFixture }) {
  const { tenants, propertyAddresses } = fixture;

  const intitialState = {
    tenant: "",
    landlord: "",
    addressOfTenant: "",
    rennt: "",
    paymentMethod: "e-transfer"
  };

  const [newTenantEntry, setNewTenantEntry] = useState(intitialState);

  const [newTenant, setNewTenant] = useState("");
  const [landlord, setLandlord] = useState("");
  const [addressOfTenant, setAddressOfTenant] = useState("");
  const [rent, setRent] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("e-transfer");

  const handleNewTenant = (evt) => {
    setNewTenant(evt.target.value);
  };

  const handleAddressOfTenant = (evt) => {
    let idx = evt.target.selectedIndex;
    setAddressOfTenant(evt.target.value);
    setLandlord(evt.target.options[idx].getAttribute("data-landlord"));
  };

  const handleRentChange = (evt) => {
    setRent(evt.target.value);
  };

  const handlePaymentMethodChange = (evt) => {
    setPaymentMethod(evt.target.value);
  };

  // TODO: search for properties that don't have an assigned tenant yet
  // if something needs to be updated, that is done in the card
  const allAddressesForSelect = propertyAddresses.map((address) => {
    return (
      <option
        key={address.id}
        data-landlord={address.landlord}
        value={address.address}
      >
        {address.landlord}: {address.address}
      </option>
    );
  });

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const newTenantDetails = {
      id: uuidv4(),
      rentAmount: rent * 100,
      landlord: landlord,
      address: addressOfTenant,
      paymentMethod: paymentMethod,
    };

    setFixture({
      ...fixture,
      tenants: { ...tenants, [`${newTenant}`]: newTenantDetails },
    });

    setNewTenant("");
    setPaymentMethod("e-transfer");
    setRent("");
    setAddressOfTenant("");
  };

  // display all tenants
  const getAllTenants = () => (
    Object.entries(tenants).map(tenant => {
      const { address, landlord, paymentMethod, rentAmount } = tenant[1];
      return (
        <section key={uuidv4()} style={{border: '1px solid grey'}}>
          <p>Tenant Name: {tenant[0]}</p>
          <address>{address}</address>
          <p>Monthly Rent Amount: ${rentAmount / 100}</p>
        </section>
      )
    })
  );


  return (
    <section>
      <h2>Create New Tenant Profile</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="tenant-name">
          <input
            id="tenant-name"
            name="name"
            value={newTenant}
            onChange={handleNewTenant}
            type="text"
            placeholder="Tenant Name"
            required
          ></input>
        </label>

        <label htmlFor="property-address">
          <select
            name="property-address"
            id="property-address"
            value={addressOfTenant}
            onChange={handleAddressOfTenant}
          >
            <option value="" disabled>
              Which property?
            </option>
            {allAddressesForSelect}
          </select>
        </label>

        <label htmlFor="rent-amount" style={{display: 'inline-block'}}>
          $
          <input
            id="rent-amount"
            type="number"
            placeholder="500"
            min="1"
            value={rent}
            onChange={handleRentChange}
            required
          ></input>
        </label>

        <label>
          <select
            name="payment-method"
            id="payment-method"
            value={paymentMethod}
            onChange={handlePaymentMethodChange}
          >
            <option value="e-transfer">E-transfer</option>
            <option value="cash">Cash</option>
          </select>
        </label>
        <button type="submit">Add Tenant</button>
      </form>
      <section>
        {/* <Card /> */}
        {""}
        <h2>All Tenants</h2>
        {getAllTenants()}
      </section>
    </section>
  );
}

export default CreateTenant;

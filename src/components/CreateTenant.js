import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
// ToDo; Add logic in the rent input to only allow numbers, no text/special charas, spaces

function CreateTenant({ fixture, setFixture }) {
  const { tenants, propertyAddresses, landlords } = fixture;

  const intitialState = {
    id: uuidv4(),
    tenant: "",
    landlord: "",
    address: "",
    rentAmount: "",
    paymentMethod: "e-transfer"
  };

  const [newTenantEntry, setNewTenantEntry] = useState(intitialState);
  const { tenant, landlord, address, rentAmount, paymentMethod } = newTenantEntry;

  // One function which handles field changes
  const handleChange = (evt) => {
    const { name, value } = evt.target;
    switch (name) {
      case 'name':
        setNewTenantEntry({...newTenantEntry, tenant: value});
        break;
      case 'property-address':
        let idx = evt.target.selectedIndex;
        setNewTenantEntry({...newTenantEntry, address: value, landlord: evt.target.options[idx].getAttribute("data-landlord")});
        break;
      case 'rent-amount':
        setNewTenantEntry({...newTenantEntry, rentAmount: value});
        break;
      case 'payment-method':
        setNewTenantEntry({...newTenantEntry, paymentMethod: value});
        break;
    }
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
    setFixture({
      ...fixture,
      tenants: { ...tenants, [`${tenant}`]: {...newTenantEntry, rentAmount: rentAmount * 100} },
    });
    // Clear fields
    setNewTenantEntry(intitialState)
  };

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
            id="tenant"
            name="name"
            value={tenant}
            onChange={handleChange}
            type="text"
            placeholder="Tenant Name"
            required
          ></input>
        </label>

        <label htmlFor="property-address">
          <select
            name="property-address"
            id="property-address"
            value={address}
            onChange={handleChange}
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
            name="rent-amount"
            placeholder="500"
            min="1"
            value={rentAmount}
            onChange={handleChange}
            required
          ></input>
        </label>

        <label>
          <select
            name="payment-method"
            id="payment-method"
            value={paymentMethod}
            onChange={handleChange}
          >
            <option value="e-transfer">E-transfer</option>
            <option value="cash">Cash</option>
          </select>
        </label>
        <button type="submit">Add Tenant</button>
      </form>
      <section>
        <h2>All Tenants</h2>
        {getAllTenants()}
      </section>
    </section>
  );
}

export default CreateTenant;

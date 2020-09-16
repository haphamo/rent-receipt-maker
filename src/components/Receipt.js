import React, { useState, Fragment } from "react";

function Landlord({ fixture, setFixture }) {
  const { landlords, tenants } = fixture;
  const [landlord, setLandlord] = useState("");
  const [tenant, setTenant] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");

  const handleLandlordChange = (evt) => {
    setLandlord(evt.target.value);
    setTenant("");
  };

  const handleTenantChange = (evt) => {
    setTenant(evt.target.value);
  };

  const handlePaymentMethod = (evt) => {
    setPaymentMethod(evt.target.value);
  };

  const allLandlordsForSelect = landlords.map((landlord) => {
    return (
      <option key={landlord.id} value={landlord.name}>
        {landlord.name}
      </option>
    );
  });

  const displayTenants = (landlordName) => {
    // receives selected landlord name from user
    const tenantList = Object.entries(tenants).filter(
      (tenant) => tenant[1].landlord === landlordName
    );

    if (tenantList.length > 0) {
      const availableTenantOptions = tenantList.map((tenant) => {
        return (
          <option key={tenant[1].id} value={tenant[0]}>
            {tenant[0]}
          </option>
        );
      });
      return (
        <Fragment>
          <option value="">--Select a Tenant--</option>
          {availableTenantOptions}
        </Fragment>
      );
    }

    return (
      <option value="">
        --No tenants for this landlord, please create one!--
      </option>
    );
  };

  return (
    <section className="container">
      <hr></hr>
      <label htmlFor="landlord-select">Choose a landlord:</label>
      <select
        name="landlords"
        id="landlord-select"
        value={landlord}
        onChange={handleLandlordChange}
      >
        <option value="" disabled>
          --Please choose a landlord--
        </option>
        {allLandlordsForSelect}
      </select>
      {landlord && (
        <section className="tenant-select">
          <label htmlFor="tenant-select">Choose a tenant:</label>
          <select
            name="tenants"
            id="tenant-select"
            value={tenant}
            onChange={handleTenantChange}
          >
            {displayTenants(landlord)}
          </select>
        </section>
      )}
      <hr></hr>
      <main className="sample-receipt" style={{ display: "inline-grid" }}>
        <text>Landlord: {landlord}</text>
        <text>Tenant: {tenant}</text>

        <address>Address: {tenant && tenants[tenant].address}</address>
        <data className="money">
          Rent Amount: ${tenant && tenants[tenant].rentAmount / 100}
        </data>

        <label htmlFor="payment-method">
          Payment Method:
          <select
            id="payment-method"
            name="payment-method"
            value={paymentMethod}
            onChange={handlePaymentMethod}
          >
            <option value="" disabled>
              --Please select--
            </option>
            <option value="cash">Cash</option>
            <option value="e-transfer">E-transfer</option>
          </select>
        </label>
        <button>Create Rent Receipt!</button>
      </main>
    </section>
  );
}

export default Landlord;

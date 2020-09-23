import React, { useState, Fragment } from "react";

// TODO: Add Canvas to hold signature
function Landlord({ fixture, setFixture }) {
  const { landlords, tenants, receipts } = fixture;
  const [landlord, setLandlord] = useState("");
  const [tenant, setTenant] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");

  const handleLandlordChange = (evt) => {
    setLandlord(evt.target.value);
    setTenant("");
  };

  const handleTenantChange = (evt) => {
    setTenant(evt.target.value);
    setPaymentMethod(tenants[evt.target.value].paymentMethod)
  };

  const handlePaymentMethod = (evt) => {
    setPaymentMethod(evt.target.value);
  };

  const getAllLandlords = Object.entries(landlords);
  const allLandlordsForSelect = getAllLandlords.map((landlord) => {
    return (
      <option key={landlord[0]} value={landlord[1].name}>
        {landlord[1].name}
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

  const getReceipts = Object.entries(receipts);
  console.log(getReceipts[0][1])
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
      <main className="create-receipt" style={{ display: "inline-grid" }}>
        <section>Landlord: {landlord}</section>
        <section>Tenant: {tenant}</section>

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
        {/* Submit action on the button */}
        <button>Create Rent Receipt!</button>
      </main>
      <section className="all-receipts">
        <section key={getReceipts[0][1].id}>
          <section>Landlord: {getReceipts[0][1].landlord}</section>
          <section>Tenant: {getReceipts[0][1].tenant}</section>
          <section>Address: {getReceipts[0][1].property}</section>
          <section>Amount: ${getReceipts[0][1].rentAmount / 100}</section>
          <section>Date Received {getReceipts[0][1].dateCreated}</section>
          <section>Notes: {getReceipts[0][1].notes}</section>
        </section>
      </section>
    </section>
  );
}

export default Landlord;

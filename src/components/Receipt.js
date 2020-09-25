import React, { useState, Fragment } from "react";
import { v4 as uuidv4 } from "uuid";

// TODO: Add Canvas to hold signature
function Landlord({ fixture, setFixture }) {

  const { landlords, tenants, receipts } = fixture;
  
  // the initial state is receipts from fixture data
  const [allReceipts, setAllReceipts] = useState(receipts)

  const newReceiptEntry = {
    landlord: "",
    tenant: "",
    paymentMethod: "",
    memo: "",
    address: "",
    rentAmount: 0
  };

  const [newReceipt, setNewReceipt] = useState(newReceiptEntry);

  const {landlord, tenant, memo, paymentMethod} = newReceipt;

  const handleLandlordChange = (evt) => {
    setNewReceipt({...newReceipt, landlord: evt.target.value, tenant: ""})
  };

  const handleTenantChange = (evt) => {
    setNewReceipt({...newReceipt, tenant: evt.target.value, paymentMethod: tenants[evt.target.value].paymentMethod, address: tenants[evt.target.value].address, rentAmount: tenants[evt.target.value].rentAmount, memo: memo})
  };

  // this allows the user to change the payment method if it is different from what was initially set up
  const handlePaymentMethod = (evt) => {
    setNewReceipt({...newReceipt, paymentMethod: evt.target.value})
  };

  const handleMemoChange = (evt) => {
    setNewReceipt({...newReceipt, memo: evt.target.value})
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

  const displayAllReceipts = () => (
    Object.entries(receipts).map(receipt => {
      return(
        <section key={receipt[0]} style={{margin: '1em 0em'}}>
          <section>Landlord: {receipt[1].landlord}</section>
          <section>Tenant: {receipt[1].tenant}</section>
          <section>Address: {receipt[1].address}</section>
          <section>Amount: ${receipt[1].rentAmount / 100}</section>
          <section>Date Received {receipt[1].dateCreated}</section>
          <section>Memo: {receipt[1].memo}</section>
        </section>
      )
    })
  );

  const handleSubmit = (evt) => {
    evt.preventDefault();
    setFixture({...fixture, receipts: { ...receipts, [`${uuidv4()}`]: newReceipt}})
    // clear fields
    setNewReceipt({landlord: "",
    tenant: "",
    paymentMethod: "",
    memo: ""})
  };

  return (
    <section className="container" style={{ margin: "1em" }}>
      <hr></hr>
      <form onSubmit={handleSubmit}>
        <label htmlFor="landlord-select">Choose a landlord:</label>
        <select
          required
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
        {newReceipt.landlord && (
          <section className="tenant-select">
            <label htmlFor="tenant-select">Choose a tenant:</label>
            <select
              required
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
        <section className="create-receipt" style={{ display: "inline-grid" }}>
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
          <label>
            Memo:
            <input
              placeholder="optional"
              type="text"
              value={memo}
              onChange={handleMemoChange}
            />
          </label>
          {/* Submit action on the button */}
          <button type="submit">Create Rent Receipt!</button>
        </section>
      </form>

      <hr></hr>
      <section className="all-receipts">
        {displayAllReceipts()}
      </section>
    </section>
  );
}

export default Landlord;

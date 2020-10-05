import React, { useState, Fragment } from "react";
import { Link } from "@reach/router";
import { v4 as uuidv4 } from "uuid";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// TODO: Add Canvas to hold signature
// TODO: Format input for rent amount to have 2 decimal places
// TODO: Reafctor handleChange functions
function Landlord({ fixture, setFixture }) {
  const [date, setDate] = useState(null);
  const { landlords, tenants, receipts } = fixture;

  const newReceiptEntry = {
    landlord: "",
    tenant: "",
    paymentMethod: "",
    memo: "",
    address: "",
    rentAmount: "",
    dateReceived: "",
  };

  const [newReceipt, setNewReceipt] = useState(newReceiptEntry);
  
  const { landlord, tenant, memo, paymentMethod, rentAmount } = newReceipt;

  const handleLandlordChange = (evt) => {
    setNewReceipt({ ...newReceipt, landlord: evt.target.value, tenant: "" });
  };

  const handleTenantChange = (evt) => {
    // handles front end
    setNewReceipt({
      ...newReceipt,
      tenant: evt.target.value,
      paymentMethod: tenants[evt.target.value].paymentMethod,
      address: tenants[evt.target.value].address,
      rentAmount: tenants[evt.target.value].rentAmount / 100,
    });
  };

  // this allows the user to change the payment method if it is different from what was initially set up
  const handlePaymentMethod = (evt) => {
    setNewReceipt({ ...newReceipt, paymentMethod: evt.target.value });
  };

  const handleMemoChange = (evt) => {
    setNewReceipt({ ...newReceipt, memo: evt.target.value });
  };

  const handleDateChange = (date) => {
    // handles front end date change
    setDate(date)
    // format date data to be sent to backend
    const formattedDate = date.toString().split(' ').slice(1, 4).join(' ');
    setNewReceipt({ ...newReceipt, dateReceived: formattedDate });
  }

  const getAllLandlords = Object.entries(landlords);
  const allLandlordsForSelect = getAllLandlords.map((landlord) => {
    return (
      <option key={landlord[0]} value={landlord[1].name}>
        {landlord[1].name}
      </option>
    );
  });
  
  // make ternary expression
  // const tenantNodes = 
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

  const displayAllReceipts = () =>
    Object.entries(receipts).map((receipt) => {
      return (
        <section key={receipt[0]} style={{ margin: "1em 0em" }}>
          <section>Landlord: {receipt[1].landlord}</section>
          <section>Tenant: {receipt[1].tenant}</section>
          <section>Address: {receipt[1].address}</section>
          <section>Amount: ${receipt[1].rentAmount / 100}</section>
          <section>Date Received: {receipt[1].dateReceived}</section>
          <section>Memo: {receipt[1].memo}</section>
        </section>
      );
    });

  const handleAmountChange = (evt) => {
    setNewReceipt({ ...newReceipt, rentAmount: evt.target.value });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    // Reformat the rent amount to remain consistent with backend
    setFixture({
      ...fixture,
      receipts: { ...receipts, [`${uuidv4()}`]: {...newReceipt, rentAmount: rentAmount * 100} },
    });
    // clear fields
    setNewReceipt(newReceiptEntry);
  };

  return (
    <section className="container" style={{ margin: "1em" }}>
      <hr></hr>
      <form onSubmit={handleSubmit}>
        <section className="landlord-container" style={{ marginBottom: "1em" }}>
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
          <Link to="/landlord"><button>Create a new Landlord</button></Link>
          
        </section>
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
          <section>
            <DatePicker
              required
              placeholderText="Date"
              popperPlacement="right-start"
              popperModifiers={
                ("offset": {
                  enabled: true,
                  offset: "4em, 2em",
                })
              }
              dateFormat="MMMM d, yyyy"
              selected={date}
              fixedHeight
              onChange={date => handleDateChange(date)}
            />
          </section>
          <section>Landlord: {landlord}</section>
          <section>Tenant: {tenant}</section>

          <address>Address: {tenant && tenants[tenant].address}</address>
          {/* Make the amount updatable */}
          <section className="money">
            Rent Amount: ${/* ${tenant && tenants[tenant].rentAmount / 100} */}
            <input
              id="payment-amount"
              // value={tenant ? rentAmount / 100 : rentAmount * 100}
              value={`${rentAmount}`}
              type="number"
              onChange={handleAmountChange}
              // placeholder={rentAmount / 100}
            />
          </section>

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
          <button type="submit">Create Rent Receipt!</button>
        </section>
      </form>

      <hr></hr>
      <section className="all-receipts">{displayAllReceipts()}</section>
    </section>
  );
}

export default Landlord;

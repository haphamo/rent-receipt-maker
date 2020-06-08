import React, { useState } from "react";

function Landlord() {
  const [landlord, setLandlord] = useState("");
  // prevent default on form submission
  const handleChange = evt => {
    // evt.preventDefault()
    setLandlord(evt.target.value)
    console.log(landlord)
  }

  return (
    <form className="add-landlord">
      <label name="landlord">
        Please add a landlord:
        <input
          type="text"
          onChange={handleChange}
          name="landlord"
        ></input>
        <button type="submit">Add Landlord</button>
      </label>
    </form>
  );
}

export default Landlord;

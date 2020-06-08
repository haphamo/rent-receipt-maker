import React, { useState } from "react";


function Landlord() {
  const [landlord, setLandlord] = useState("");
  const [displayLandlord, setDisplayLandlord] = useState("");
  // prevent default on form submission
  const handleChange = evt => {
    setLandlord(evt.target.value)
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    setDisplayLandlord(landlord)
  }

  const style = {
    // display: 'flex',
    // flexDirection: 'column'
  }

  return (
    <section className="container">
      <form className="add-landlord" onSubmit={handleSubmit}>
        <label name="landlord" style={style}>
          Please add a landlord:
          <input
            type="text"
            onChange={handleChange}
            name="landlord"
          ></input>
          <button type="submit">Add Landlord</button>
        </label>
      </form>
      The landlord's name is: {displayLandlord}
    </section>
  );
}

export default Landlord;

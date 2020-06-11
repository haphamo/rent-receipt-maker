import React from "react";

function CreateProfile() {
  // const displayAllLandlords = () => {
  //   return
  // }
  return(
    <section>
    <label>
      <input name="name" type="text" placeholder="John Smith"></input>
    </label>
    <button>Add A Landlord</button>
    <ul>
      <li>Andrew Ly</li>
      <li>Ha Pham</li>
      <li>Tina Pham</li>
    </ul>

    </section>
  )
}

export default CreateProfile;
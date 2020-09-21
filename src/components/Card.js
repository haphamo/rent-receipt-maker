import React from "react";
import Identicon from 'react-identicons';
import Landlord from "./Receipt";

// TODO: Change the styling, the left section will be avatar and name
function Card({fixture}) {

  const data = Object.values(fixture.landlords);

  const styles = {
    container: {
      border: 'solid 1px grey',
      textAlign: 'center'
    }
  };

  // need to add key prop
  const getAllPropertiesForALandlord = (landlordEntry) => {
    const { properties } = landlordEntry;
    return (properties.map(property => (<address>{property}</address>)))
  };

  const getAllLandlordProfiles = data.map(landlord => {
    const { name, properties } = landlord;

    return(
      <section >
        <Identicon string={name} size="100" bg="#FCB900"/>
        <section id="landlord-name">{name}</section>
        <strong>Properties</strong>
        {getAllPropertiesForALandlord(landlord)}
      </section>
    )
  });

  return(
    <section style={styles.container}>
      {getAllLandlordProfiles}
    </section>
  )
};

export default Card;
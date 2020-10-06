import React from "react";
import { v4 as uuidv4 } from "uuid";
import Identicon from 'react-identicons';

// TODO: Change the styling, the left section will be avatar and name
function Card({fixture}) {
  const { landlords } = fixture;
  const data = Object.values(landlords);

  const styles = {
    container: {
      border: 'solid 1px grey',
      textAlign: 'center'
    }
  };

  // const getAllPropertiesForALandlord = (landlordEntry) => {
  //   const { properties } = landlordEntry;
  //   return (properties.map(property => (<address key={uuidv4()}>{property}</address>)))
  // };

  const getAllLandlordProfiles = data.map(landlord => {
    const { name, tenants } = landlord;

    // should contain actions to add a tenant and create a receipt
    // conditional, if the tenant list is 0, add button to add a tenant

    // map through tenants to get the tenant-address relationship

    return(
      <section key={uuidv4()}>
        <Identicon string={name} size="100" bg="#FCB900"/>
        <section id="landlord-name">{name}</section>
        <strong>Properties</strong>
        <section>
          <address>{tenants[0].address} </address>
        {tenants[0].name ? <strong>Tenant: {tenants[0].name}</strong> :
        <strong>Add a tenant</strong> 
        }

        </section> 
   
        {/* {getAllPropertiesForALandlord(landlord)} */}
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
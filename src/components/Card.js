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
      textAlign: 'center',
      padding: '1em'
    },
    landlordName: {
      fontSize: '1.2em'
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
    // Add a tenant button should toggle the form
    return(
      <section key={uuidv4()} style={{display: 'flex', marginBottom: '1em'}}>
        <section style={{alignContent: 'center', flex: '20%'}}>
          <Identicon string={name} size="100" bg="#FCB900"/>
          <section id="landlord-name" style={styles.landlordName}>{name}</section>
        </section>
        <section style={{flex: '80%'}}>
          {/* <strong>Properties</strong> */}
          <section>
            Property: <address>{tenants[0].address} </address>
          {tenants[0].name ? <section>Tenant: {tenants[0].name}</section> :
          <button>Add a tenant</button> 
          }
          </section> 

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
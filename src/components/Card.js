import React from "react";
import Identicon from 'react-identicons';

function Card({fixture}) {
  const data = Object.values(fixture.landlords)[0];
  console.log(data);
  const styles = {
    container: {
      border: 'solid 1px grey',
      textAlign: 'center'
    }
  };

  // test with one entry first
  
  // require all properties for each lanlord
  return(
    <section style={styles.container}>
      <Identicon string={data.name} size="100" bg="#0693E3"/>
      <section id="landlord-name">{data.name}</section>
      <strong>Properties</strong>
      <address>{data.properties[0]}</address>
      <address>{data.properties[1]}</address>
    </section>
  )
};

export default Card;
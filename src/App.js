import React, { useState } from "react";
import Receipt from "./components/Receipt.js";
import CreateProfile from "./components/CreateProfile.js";
import CreateTenant from "./components/CreateTenant.js";

import data from "./fixture/fixture.js";

function App() {
  const [fixture, setFixture] = useState(data);

  return (
    <section>
      <CreateProfile setFixture={setFixture} fixture={fixture} />
      <hr></hr>
      <CreateTenant setFixture={setFixture} fixture={fixture} />
      <hr></hr>
      <h2>Receipt</h2>
      <Receipt setFixture={setFixture} fixture={fixture} />
    </section>
  );
}

export default App;

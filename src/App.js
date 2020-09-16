import React, { useState } from "react";
import { Router, Link } from "@reach/router";
import Receipt from "./components/Receipt.js";
import CreateProfile from "./components/CreateProfile.js";
import CreateTenant from "./components/CreateTenant.js";

import data from "./fixture/fixture.js";

function App() {
  const [fixture, setFixture] = useState(data);

  return (
    <section>
      <Link to="/">Landlord</Link>
      <Link to="tenant">Tenant</Link>
      <Link to="receipts">Create Receipt</Link>


      <Router>
        <CreateProfile path="/" setFixture={setFixture} fixture={fixture}/>
        <CreateTenant path="tenant" setFixture={setFixture} fixture={fixture}/>
        <Receipt path="receipts" setFixture={setFixture} fixture={fixture}/>
      </Router>
    </section>
  );
}

export default App;

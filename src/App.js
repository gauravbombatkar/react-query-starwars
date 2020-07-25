import React, { useState } from 'react';
import Navbar from './Components/Navbar.js';
import Planets from "./Components/Planets";
import People from "./Components/People";
function App() {

  const [page, setPage] = useState('planets')

  return (
    <div className="App">
      <h1>Star wars Info</h1>
      <Navbar setPage={setPage} />
      <div className="content">
        {page === 'planets' ? <Planets /> : <People />}
      </div>
    </div>
  );
}

export default App;

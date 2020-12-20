import './App.css';
import React, { useState, useEffect } from "react";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
// import Dropdown from 'react-bootstrap/Dropdown'
// import Button from 'react-bootstrap/Button';
// import DropdownButton from 'react-bootstrap/DropdownButton'

import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';


function App() {

  // dropdown menu
  const options = [
    'may', 'june', 'july', 'aug', 'sep', 'oct'
  ];
  const defaultOption = options[0];


  // API
  const [tableContent, setTableContent] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/")
      .then(response => response.json())
      .then(json => setTableContent(json));
  }, []);

  let newtableContent = tableContent.filter(function(v){
    return v.Type==='A'
  })

  const may = newtableContent.filter(function(v){
    return v.Date.includes('/05')
  }
  );
  const june = tableContent.filter(function(v){
    return v.Date.includes('/06')
  }
  );
  const july = tableContent.filter(function(v){
    return v.Date.includes('/07')
  }
  );
  const aug = tableContent.filter(function(v){
    return v.Date.includes('/08')
  }
  );
  const sep = tableContent.filter(function(v){
    return v.Date.includes('/09')
  }
  );
  const oct = tableContent.filter(function(v){
    return v.Date.includes('/10')
  }
  );
 

  // console.log(oct);

  return (
    <div className="App">
      {/* <header className="App-header">
      </header> */}
<Dropdown options={options} value={defaultOption} placeholder="Select an option" />

{/* <Dropdown>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
    Dropdown Button
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown> */}

      <BarChart
        width={1024}
        height={300}
        data={may}
        margin={{
          top: 50, right: 30, left: 20, bottom: 5,
        }}
        barSize={20}
      >
        <XAxis dataKey="Index" scale="point" padding={{ left: 10, right: 10 }} />
        <YAxis /> 
        <Tooltip />
        <Legend />
        <CartesianGrid strokeDasharray="3 3" />
        <Bar dataKey="Number" fill="#8884d8" background={{ fill: '#eee' }} />
      </BarChart>

    </div>
  );
}

export default App;


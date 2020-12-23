import './App.css';
import React, { useState, useEffect } from "react";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
// import Button from 'react-bootstrap/Button';
// import DropdownButton from 'react-bootstrap/DropdownButton'

import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
// import { render } from '@testing-library/react';


function App() {



  const options2 = [
    'Type A', 'Type B', 'Type C', 'Type D', 'Type E', 'Type F'
  ];
  const defaultOption2 = options2[0];


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
    // dropdown menu



  function handleChange(e){


  }
  const gettingTypes = tableContent.map(q => q.Type);
  const types = gettingTypes.filter((q, idx) => 
  gettingTypes.indexOf(q) === idx)

  const defaultOption = types[0];


  return (
    <div className="App">
      <div >
        <Dropdown options={types} value={defaultOption} placeholder="Select an option" />
      </div>
      <div >
        <Dropdown options={options2} value={defaultOption2} placeholder="Select an option" />
      </div>
      <select id="dropdown" onChange={handleChange} >
        <option value="Type A">Type A</option>
        <option value="Type B">Type B</option>
        <option value="Type C">Type C</option>
        <option value="Type D">Type D</option>
        <option value="Type E">Type E</option>
      </select>


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

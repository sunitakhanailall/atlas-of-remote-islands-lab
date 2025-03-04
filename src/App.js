import React from 'react';
import './App.css';
import Card from './components/Card.js';
import data from './atlas-of-remote-islands.js';

function App() {
  console.log(data);
  
  return (
    <div>
      <div className="container">
        <h1 className="section-title">Atlas of Remote Islands</h1>
      </div>
      
      <div className="container">
        <h2 className="section-title">Islands</h2>
        <ul className="cards">
         
          {data.islands.map(island => {
          return(
            <Card
            name={island.name}
            description={island.description}
            lat={island.coords.lat}
            long={island.coords.lon}
            wiki={island.wiki}
            image={island.image}
            />
          )
        })}
          
        </ul>
      </div>
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import Dinner from './dinner.js';

function App() {
  var name = <h1>"Hassan"</h1>;
  return (
    <div className="App">
      <h1>Hello from salman React and {name} </h1>
      <Dinner dishName='aloo palak and anda chana' sweetDish="Kheer!!!!!!!!!"/><hr/>
      <Dinner dishName='Biryani and Karahi' sweetDish="gajar ka halwa"/><hr/>
      <Dinner></Dinner><hr/>
     </div>
  ); 
}

export default App;

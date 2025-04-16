import {Route, Routes} from 'react-router-dom';
import { useState } from 'react';
import Home from './Home.jsx';
import Card from './Card.jsx';
import Mycart from './Mycart.jsx';
import './App.css';


function App() {
  
  const [addedItems, setAddedItems] = useState([]);

  return (
    <Routes>
      <Route 
        path="/" 
        element={
          <Home 
            addedItems={addedItems}
            setAddedItems={setAddedItems}
          />
        } 
      />
      <Route path="/mycart" element={<Mycart addedItems={addedItems} setAddedItems={setAddedItems}/>} />
    </Routes>
  );
}


export default App

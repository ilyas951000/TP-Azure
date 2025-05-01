import React, { useEffect, useState } from 'react';
import { getItems } from './api';

export default function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getItems().then(setItems).catch(console.error);
  }, []);

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
      <h1>Liste des items</h1>
      <ul>
        {items.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}
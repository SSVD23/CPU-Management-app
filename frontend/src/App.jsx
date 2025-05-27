import React, { useState } from 'react';
import './App.css';
import CPUList from './components/CPUList';
import CPUDetails from './components/CPUDetails';

function App() {
  const [selectedCPU, setSelectedCPU] = useState(null);

  return (
    <div className="App">
      <h1>CPU Management</h1>
      <div className="container">
        <CPUList onSelectCPU={setSelectedCPU} />
        {selectedCPU && <CPUDetails cpu={selectedCPU} onClose={() => setSelectedCPU(null)} />}
      </div>
    </div>
  );
}

export default App;
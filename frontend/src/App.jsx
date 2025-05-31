import React, { useState } from 'react';
import './App.css';
import CPUList from './components/CPUList';
import CPUDetails from './components/CPUDetails';

function App() {
  const [selectedCPU, setSelectedCPU] = useState(null);

  return (
    <div className="App">
      <header>
        <h1>CPU Management</h1>
      </header>
      <main>
        <div className="container">
          <CPUList onSelectCPU={setSelectedCPU} />
          {selectedCPU && (
            <div className="modal">
              <div className="modal-content">
                <CPUDetails 
                  cpu={selectedCPU} 
                  onClose={() => setSelectedCPU(null)} 
                />
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function CPUList({ onSelectCPU }) {
  const [cpus, setCpus] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/cpus')
      .then(response => setCpus(response.data))
      .catch(error => console.error('Error fetching CPUs:', error));
  }, []);

  return (
    <div className="cpu-list">
      <h2>CPU List</h2>
      <table>
        <thead>
          <tr>
            <th>Brand</th>
            <th>Model</th>
            <th>Socket</th>
          </tr>
        </thead>
        <tbody>
          {cpus.map(cpu => (
            <tr key={cpu.id} onClick={() => onSelectCPU(cpu)}>
              <td>{cpu.brand}</td>
              <td>{cpu.model}</td>
              <td>{cpu.socket.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CPUList;
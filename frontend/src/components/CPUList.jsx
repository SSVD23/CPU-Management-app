import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './CPUList.css';

function CPUList({ onSelectCPU }) {
  const [cpus, setCpus] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios.get('http://localhost:8080/api/cpus')
      .then(response => {
        setCpus(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching CPUs:', error);
        setError('Failed to load CPUs. Please try again later.');
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">{error}</div>;

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
            <tr 
              key={cpu.id} 
              onClick={() => onSelectCPU(cpu)}
              className="cpu-row"
            >
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
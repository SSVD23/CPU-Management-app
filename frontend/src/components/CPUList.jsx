import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './CPUList.css';

/**
 * CPUList Component
 * Displays a list of all CPUs in a table format.
 * Allows selection of a CPU for detailed view/edit.
 * 
 * @param {Object} props
 * @param {Function} props.onSelectCPU - Callback function when a CPU is selected
 */
function CPUList({ onSelectCPU }) {
  // State for storing CPU data
  const [cpus, setCpus] = useState([]);
  // Loading state for showing loading indicator
  const [loading, setLoading] = useState(true);
  // Error state for showing error messages
  const [error, setError] = useState(null);

  // Fetch CPU data when component mounts
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

  // Show loading spinner while data is being fetched
  if (loading) return <div className="loading">Loading...</div>;
  // Show error message if fetch failed
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
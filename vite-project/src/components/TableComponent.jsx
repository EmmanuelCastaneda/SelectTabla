import React from 'react';
import './TableComponent.css'

function TableComponent({ data, selectedOption }) {
  const filteredData = data.slice(0, parseInt(selectedOption));

  return (
    <table className="data-table">
      <thead>
        <tr>
            <th>ID</th>
            <th>NOMBRE</th>
            <th>Descripción</th>
        </tr>
      </thead>
      <tbody>
        {filteredData.map((item) => (
          <tr key={item.name}>
            <td>{item.ID}</td>
            <td>{item.name}</td>
            <td>{item.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TableComponent;
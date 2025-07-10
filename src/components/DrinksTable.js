import React from 'react';
import './DrinksTable.css';

export default function DrinksTable({ data }) {
  return (
    <table className="drinks-table">
      <tbody>
        {data.map((item, idx) => (
          item.sizes ? (
            item.sizes.map((s, i) => (
              <tr key={idx + '-' + i}>
                {i === 0 && (
                  <td rowSpan={item.sizes.length}>
                    {item.name} {item.isNew && <span className="new">NEW</span>}
                  </td>
                )}
                <td>{s.size}</td>
                <td>{s.price}</td>
              </tr>
            ))
          ) : (
            <tr key={idx}>
              <td>
                {item.name} {item.isNew && <span className="new">NEW</span>}
              </td>
              <td>{item.size}</td>
              <td>{item.price}</td>
            </tr>
          )
        ))}
      </tbody>
    </table>
  );
} 
import React from 'react';
import './DrinksTable.css';

export default function DrinksTable({ data, setSelectedItem }) {
  return (
    <table className="drinks-table">
      <tbody>
        {data.map((item, idx) => (
          item.sizes ? (
            item.sizes.map((s, i) => (
              <tr
                key={idx + '-' + i}
                style={{ cursor: item.ingredients || item.img || item.description ? 'pointer' : 'default' }}
                onClick={() => (item.ingredients || item.img || item.description) && setSelectedItem(item)}
              >
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
            <tr
              key={idx}
              style={{ cursor: item.ingredients || item.img || item.description ? 'pointer' : 'default' }}
              onClick={() => (item.ingredients || item.img || item.description) && setSelectedItem(item)}
            >
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
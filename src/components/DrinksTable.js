import React from 'react';
import './DrinksTable.css';

export default function DrinksTable({ data, setSelectedItem }) {
  return (
    <div className="drinks-table">
      {data.map((item, idx) => (
        <div
          key={idx}
          className="drink-card"
          onClick={() => (item.ingredients || item.img || item.description) && setSelectedItem(item)}
        >
          <div className="drink-header">
            <h3 className="drink-name">
              {item.name} {item.isNew && <span className="drink-new">NEW</span>}
            </h3>
            <div className="drink-price">
              {item.sizes ? 
                item.sizes.map(s => s.price || '-').join(' / ') + ' ₸' : 
                (item.price || '-') + ' ₸'
              }
            </div>
          </div>
          {item.sizes && (
            <div className="drink-details-row">
              <span className="drink-size">
                {item.sizes ? 
                  'Размер: ' + item.sizes.map(s => s.size || '-').join(' / ') : 
                  'Размер: ' + (item.size || '-')
                }
              </span>
            </div>
          )}
          {item.description && (
            <p className="drink-description">{item.description}</p>
          )}
        </div>
      ))}
    </div>
  );
} 
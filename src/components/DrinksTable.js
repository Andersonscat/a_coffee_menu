import React from 'react';
import './DrinksTable.css';

export default function DrinksTable({ data, setSelectedItem }) {
  return (
    <div className="drinks-table">
      {data.map((item, idx) => (
        item.sizes ? (
          item.sizes.map((s, i) => (
            <div
              key={idx + '-' + i}
              className="drink-card"
              onClick={() => (item.ingredients || item.img || item.description) && setSelectedItem(item)}
            >
              <div className="drink-header">
                <h3 className="drink-name">
                  {item.name} {item.isNew && <span className="drink-new">NEW</span>}
                </h3>
                <div className="drink-price">{s.price || '-'} ₸</div>
              </div>
              <div className="drink-details-row">
                <span className="drink-size">Размер: {s.size || '-'}</span>
              </div>
              {item.description && (
                <p className="drink-description">{item.description}</p>
              )}
            </div>
          ))
        ) : (
          <div
            key={idx}
            className="drink-card"
            onClick={() => (item.ingredients || item.img || item.description) && setSelectedItem(item)}
          >
            <div className="drink-header">
              <h3 className="drink-name">
                {item.name} {item.isNew && <span className="drink-new">NEW</span>}
              </h3>
              <div className="drink-price">{item.price || '-'} ₸</div>
            </div>
            <div className="drink-details-row">
              <span className="drink-size">Размер: {item.size || '-'}</span>
            </div>
            {item.description && (
              <p className="drink-description">{item.description}</p>
            )}
          </div>
        )
      ))}
    </div>
  );
} 
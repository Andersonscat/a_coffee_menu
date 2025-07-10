import React, { useState } from 'react';
import './MenuTabs.css';

export default function MenuTabs({ tabs, children }) {
  const [active, setActive] = useState(0);
  return (
    <div className="menu-tabs">
      <div className="tab-list">
        {tabs.map((tab, i) => (
          <button
            key={tab}
            className={active === i ? 'active' : ''}
            onClick={() => setActive(i)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="tab-content">{children[active]}</div>
    </div>
  );
} 
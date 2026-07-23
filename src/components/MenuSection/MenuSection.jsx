import "./MenuSection.css";
import { useState } from "react";

function MenuSection({ items }) {
  const [showFeaturedOnly, setShowFeaturedOnly] = useState(false);
  const displayedItems = showFeaturedOnly
    ? items.filter((item) => item.featured)
    : items;

  return (
    <section id="menu">
      <h2>Our Menu</h2>
      
      <button 
      onClick={() => setShowFeaturedOnly(!showFeaturedOnly)}>
        {showFeaturedOnly ? "Show All Dishes" : "Show Featured Only"}
      </button>
      <ul>
        {displayedItems.map((item) => (
          <li className="menu-item" key={item.id}>
            <h3>{item.name}</h3>
            {item.featured && (
              <span className="featured-badge">⭐ Chef's Special</span>
            )}
            <p>{item.description}</p>
            <strong>{item.price}</strong>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default MenuSection;

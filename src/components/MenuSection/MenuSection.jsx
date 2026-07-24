import "./MenuSection.css";
import { useState } from "react";

function MenuSection({ items }) {
  const [showFeaturedOnly, setShowFeaturedOnly] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const displayedItems = items.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <section id="menu">
      <h2>Our Menu</h2>
      <input
        type="text"
        placeholder="Search dishes..."
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
      />
      <button onClick={() => setShowFeaturedOnly(!showFeaturedOnly)}>
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

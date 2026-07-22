import "./MenuSection.css";
import menuItems from "../../data/menu";

function MenuSection({ items = [] }) {
  return (
    <section id="menu">
      <h2>Our Menu</h2>

      <ul>
        {menuItems.map((item) => (
          <li className="menu-item" key={item.id}>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <strong>{item.price}</strong>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default MenuSection;

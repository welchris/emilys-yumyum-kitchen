import "./App.css";
import Header from "./components/Header/Header";
import MenuSection from "./components/MenuSection/MenuSection";
import menuItems from "./data/menu";

function App() {

  return (
    <>
      <Header title="Emily's Yumyum Kitchen" subtitle="by Lola Sandok" />

      <main>
        <section id="home">
          <h2>Welcome to Emily's Yumyum Kitchen</h2>
          <p>Homemade Filipino favorites made with love by Lola Sandok.</p>
        </section>
      </main>

      <MenuSection items={menuItems} />
    </>
  );
}

export default App;

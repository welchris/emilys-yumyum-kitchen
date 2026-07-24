import "./App.css";
import Header from "./components/Header/Header";
import MenuSection from "./components/MenuSection/MenuSection";
import menuItems from "./data/menu";
import Hero from "./components/Hero/Hero";

function App() {

  return (
    <>
      <Header title="Filipino Cuisine" subtitle="by Lola Sandok" />

      <main>
        <Hero />
        <section id="home">
          <h2>Welcome to Emily's Yumyum Kitchen</h2>
          <p>Homemade Filipino favorites made with love by Lola Sandok.</p>
        </section>
          <MenuSection items={menuItems} />
      </main>

  
    </>
  );
}

export default App;

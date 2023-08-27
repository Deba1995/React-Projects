import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const burgerData = [
  {
    name: "Smokey Maple Bacon Burger",
    ingredients:
      "Juicy beef patty topped with crispy bacon, melted smoked Gouda, and a drizzle of rich maple aioli.",
    price: "€6",
    photoName: "burgers/Burger1.jpg",
    soldOut: false,
  },
  {
    name: "Spicy Guacamole Fiesta Burger",
    ingredients:
      "A fiery blend of jalapeño jack cheese, zesty guacamole, and chipotle mayo piled high on a seasoned beef patty.",
    price: "€10",
    photoName: "burgers/Burger2.jpg",
    soldOut: false,
  },
  {
    name: "Mediterranean Lamb Feta Burger",
    ingredients:
      "Ground lamb infused with Mediterranean spices, crumbled feta, roasted red peppers, and a refreshing tzatziki sauce.",
    price: "€12",
    photoName: "burgers/Burger3.jpg",
    soldOut: false,
  },
  {
    name: "Asian Fusion Teriyaki Burger",
    ingredients:
      "Teriyaki-glazed beef patty accompanied by grilled pineapple, pickled daikon radish, and a ginger-sesame mayo.",
    price: "€12",
    photoName: "burgers/Burger4.jpg",
    soldOut: false,
  },
  {
    name: "Hawaiian Teriyaki Burger",
    ingredients:
      "Beef patty glazed with teriyaki sauce, topped with grilled pineapple, Swiss cheese, and lettuce.",
    price: "€15",
    photoName: "burgers/Burger5.jpg",
    soldOut: true,
  },
  {
    name: "Greek Gyro Burger",
    ingredients:
      "Ground lamb patty with tzatziki sauce, feta cheese, red onion, cucumber, and lettuce.",
    price: "€18",
    photoName: "burgers/Burger6.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>Fast React Burger Co.</h1>
    </header>
  );
}

function Menu() {
  const burgers = burgerData;
  const numBurgers = burgers.length;

  return (
    <main className="menu">
      <h2>Our menu</h2>

      {numBurgers > 0 ? (
        <> 
          <p>Crafting Burgers with Passion, One Perfect Bite at a Time.</p>
          <ul className="burgers">
            {burgerData.map((burger) => (
              <Burger burgerObj={burger} key={burger.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>We're still working on our menu. Please come back later :)</p>
      )}
    </main>
  );
}

function Burger({ burgerObj }) {
  const { photoName, name, ingredients, price, soldOut } = burgerObj;
  // if (burgerObj.soldOut) return null;

  return (
    <li className={`burger ${soldOut ? 'sold-out' : ""}`}>
      <img src={photoName} alt={name} />
      <div>
        <h3>{name}</h3>
        <p>{ingredients}</p>
        {}
        <span>{ soldOut ? 'SOLD OUT' :  price}</span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHour={closeHour} openHour={openHour} />
      ) : (
        <p>
          We're happy to welcome you between {openHour}:00 and {closeHour}:00.
        </p>
      )}
    </footer>
  );
}

function Order({ closeHour, openHour }) {
  return (
    <div className="order">
      <p>
        We're open from {openHour}:00 until {closeHour}:00. Come visit us or
        order online.
      </p>
      <button className="btn">Order</button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

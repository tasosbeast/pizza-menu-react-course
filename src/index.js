import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
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
  // const style = { color: "red", fontSize: "48px", textTransform: "uppercase" };
  const style = {};
  return (
    <header className="header">
      <h1 style={style}>Fast React Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData;
  const numPizzas = pizzas.length;
  return (
    <main className="menu">
      <h2>Our Menu:</h2>

      {numPizzas > 0 ? (
        <>
          <p>
            Authentic Italian cuisine. 6 creative dishes to choose from. All
            from our stone oven, all organic, all delicious.
          </p>

          <ul className="pizzas">
            {pizzas.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>We're still working on our menu. Please come back later :)</p>
      )}
      {/* <Pizza
        name={pizzaData[2].name}
        ingredients={pizzaData[2].ingredients}
        photoName={pizzaData[2].photoName}
        price={pizzaData[2].price}
      />
      <Pizza
        name={pizzaData[1].name}
        ingredients={pizzaData[1].ingredients}
        photoName={pizzaData[1].photoName}
        price={pizzaData[1].price}
      />
      <Pizza
        name={pizzaData[0].name}
        ingredients={pizzaData[0].ingredients}
        photoName={pizzaData[0].photoName}
        price={pizzaData[0].price}
      />
      <Pizza
        name={pizzaData[3].name}
        ingredients={pizzaData[3].ingredients}
        photoName={pizzaData[3].photoName}
        price={pizzaData[3].price}
      />
      <Pizza
        name={pizzaData[4].name}
        ingredients={pizzaData[4].ingredients}
        photoName={pizzaData[4].photoName}
        price={pizzaData[4].price}
      />
      <Pizza
        name={pizzaData[5].name}
        ingredients={pizzaData[5].ingredients}
        photoName={pizzaData[5].photoName}
        price={pizzaData[5].price}
      /> */}
    </main>
  );
}

function Pizza({ pizzaObj }) {
  console.log(pizzaObj);

  //   if (pizzaObj.soldOut) return null;

  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price + "$"}</span>
      </div>
    </li>
  );
}

//   console.log(isOpen);
//   if (hour >= openHour && hour <= closeHour) alert("We're currently open!");
//   else alert("Sorry, we're closed!");
function Footer() {
  const openHour = 12;
  const hour = new Date().getHours();
  const closeHour = 22;
  const isOpen = hour > openHour && hour < closeHour;
  return (
    <footer className="footer">
      {/* {isOpen && (
        <p>We're open until {closeHour}:00. Come visit us or order online.</p> */}

      {isOpen ? (
        <Order closeHour={closeHour} />
      ) : (
        <Closed openHour={openHour} closeHour={closeHour} />
      )}
    </footer>
  );
  //   return React.createElement("footer", null, "We're currently open!");
}

function Closed({ openHour, closeHour }) {
  return (
    <p>
      We're currently closed. Please visit us during our business hours, from{" "}
      {openHour}:00 to {closeHour}:00.
    </p>
  );
}

function Order({ closeHour }) {
  return (
    <div className="order">
      <p>We're open until {closeHour}:00. Come visit us or order online.</p>
      <button className="btn">Order</button>
    </div>
  );
}

// React v18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

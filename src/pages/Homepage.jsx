import React, { useState } from "react";
import Navbar from "../components/Food/Navbar";
import Category from "../components/Food/Category";
// import StarRating from "../components/Food/starRating";
import Footer from "../components/Food/Footer";
import PartyHall from "../components/Food/PartyHall";
import Card from "../components/Food/Card";
import List from "../components/Food/List";
import StarRating from "../components/Food/StarRating";

// import "./App.css";
const Homepage = () => {
  const [show, setShow] = useState(true);
  const [cards, setCards] = useState([]);

  const handle = (item) => {
    console.warn(item);
    if (cards.indexOf(item) !== -1) return;
    setCards([...cards, item]);
  };

  const handleChange = (item, d) => {
    const ind = cards.indexOf(item);
    const arr = cards;
    arr[ind].amount += d;

    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setCards([...arr]);
  };
  // console.log(cards);
  return (
    <div>
      <Navbar setShow={setShow} size={cards.length} />

      {show ? (
        <Card handle={handle} />
      ) : (
        <List cards={cards} setCards={setCards} handleChange={handleChange} />
      )}

      <PartyHall />
      <StarRating />
      <Category />
      <Footer />
    </div>
  );
};
export default Homepage;

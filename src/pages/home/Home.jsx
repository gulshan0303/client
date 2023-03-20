import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Home.css";
import Card from "../../components/card/Card";

const Home = (props) => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const fetchRandomImages = async () => {
      const response = await axios.get(
        "https://dog.ceo/api/breeds/image/random/2"
      );
      const images = response?.data?.message;
      const newCards = images.map((image) => ({
        image,
        title: "Example Card",
        text: "This is an example card with an image and a like1 button.",
      }));
      setCards(newCards);
    };
    fetchRandomImages();
  }, []);

  return (
    <div className="home">
      {cards.map((card, index) => (
        <Card
          key={index}
          image={card.image}
          title={card.title}
          text={card.text}
        />
      ))}
    </div>
  );
};

export default Home;

import React, { useState } from 'react';
import './App.css';

const slides = [
  {
    title: "Ona tili — millat ko'zgusi",
    content: "Til yashasa, millat yashaydi. Taqdimotga xush kelibsiz!",
    id: 1
  },
  {
    title: "Tilning ahamiyati",
    content: "O'zbek tili boy va qadimiy tillardan biri hisoblanadi.",
    id: 2
  },
  {
    title: "Grammatika va uslubiyat",
    content: "To'g'ri so'zlash va yozish madaniyati haqida ma'lumotlar.",
    id: 3
  }
];

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  return (
    <div className="presentation-container">
      <div className="slide-card animate-slide">
        <h2>{slides[currentSlide].title}</h2>
        <p>{slides[currentSlide].content}</p>
        <span className="slide-number">{currentSlide + 1} / {slides.length}</span>
      </div>

      <div className="controls">
        <button onClick={prevSlide} disabled={currentSlide === 0}>Orqaga</button>
        <button onClick={nextSlide} disabled={currentSlide === slides.length - 1}>Oldinga</button>
      </div>
    </div>
  );
}

export default App;
import React, { useState, useEffect } from 'react';
import './App.css';
import Slide from './components/Slide'; // Slide komponentini chaqiramiz

const slides = [
  { id: 1, title: "Ona tili — millat ko'zgusi", content: "Til yashasa, millat yashaydi. O'zbek tili bizning g'ururimiz!" },
  { id: 2, title: "Tilning ahamiyati", content: "O'zbek tili boy va qadimiy tillardan biri hisoblanadi." },
  { id: 3, title: "Alisher Navoiy", content: "Bobomiz Navoiy o'zbek adabiy tiliga asos solganlar." },
  { id: 4, title: "Davlat tili", content: "1989-yil 21-oktabrda tilimizga Davlat tili maqomi berilgan." },
  { id: 5, title: "Imlo qoidalari", content: "To'g'ri yozish har bir o'quvchining burchidir." },
  { id: 6, title: "Nutq madaniyati", content: "Chiroyli so'zlash — insonning ko'rki." },
  { id: 7, title: "Leksikologiya", content: "Tilning lug'at boyligini o'rganuvchi bo'lim." },
  { id: 8, title: "Morfologiya", content: "So'z turkumlari haqidagi muhim fan." },
  { id: 9, title: "Sintaksis", content: "Gaplar va so'z birikmalarini o'rganamiz." },
  { id: 10, title: "Xulosa", content: "Ona tilimizni asrash va uni e'zozlash bizning vazifamiz!" }
];

function App() {
  const [current, setCurrent] = useState(0);

  // Avtomatik o'tish (5 soniya)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [current]);

  const nextSlide = () => current < slides.length - 1 && setCurrent(current + 1);
  const prevSlide = () => current > 0 && setCurrent(current - 1);

  return (
    <div className="mobile-presentation">
      {/* Progress Bar tepadagi chiziq */}
      <div 
        className="progress-bar" 
        style={{ width: `${((current + 1) / slides.length) * 100}%` }}
      ></div>

      <div className="slide-content animate-fade" key={current}>
        <span className="page-number">{current + 1} / {slides.length}</span>
        <h1>{slides[current].title}</h1>
        <div className="divider"></div>
        <p>{slides[current].content}</p>
      </div>

      <div className="mobile-nav">
        <button onClick={prevSlide} disabled={current === 0} className="nav-btn">←</button>
        <button onClick={nextSlide} disabled={current === slides.length - 1} className="nav-btn">→</button>
      </div>
    </div>
  );
}

export default App;
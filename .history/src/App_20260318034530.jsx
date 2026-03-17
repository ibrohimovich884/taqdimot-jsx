import React, { useState } from 'react';
import './App.css';

const slidesData = [
  { id: 1, title: "Ona tili — millat ruhi", content: "O'zbek tili dunyodagi eng boy tillardan biridir." },
  { id: 2, title: "Davlat tili maqomi", content: "1989-yil 21-oktabrda o'zbek tiliga davlat tili maqomi berildi." },
  { id: 3, title: "Alisher Navoiy", content: "O'zbek adabiy tili asoschisi hisoblanadi." },
  { id: 4, title: "Imlo qoidalari", content: "To'g'ri yozish — madaniyat belgisidir." },
  { id: 5, title: "Fonetika", content: "Tovushlar va ularning o'zgarishi haqidagi bo'lim." },
  { id: 6, title: "Leksikologiya", content: "Tilning lug'at boyligi haqida tushuncha." },
  { id: 7, title: "Morfologiya", content: "So'z turkumlari: Ot, Sifat, Son va hokazo." },
  { id: 8, title: "Sintaksis", content: "Gaplar va so'z birikmalarining tuzilishi." },
  { id: 9, title: "Nutq madaniyati", content: "Chiroyli va tushunarli so'zlash san'ati." },
  { id: 10, title: "Xulosa", content: "Ona tilimizni asrash — burchimizdir!" }
];

function App() {
  const [current, setCurrent] = useState(0);

  const moveNext = () => current < slidesData.length - 1 && setCurrent(current + 1);
  const movePrev = () => current > 0 && setCurrent(current - 1);

  return (
    <div className="mobile-presentation">
      <div className="progress-bar" style={{ width: `${((current + 1) / 10) * 100}%` }}></div>
      
      <div className="slide-content animate-fade">
        <span className="page-number">{current + 1} / 10</span>
        <h1>{slidesData[current].title}</h1>
        <div className="divider"></div>
        <p>{slidesData[current].content}</p>
      </div>

      <div className="mobile-nav">
        <button onClick={movePrev} disabled={current === 0} className="nav-btn">←</button>
        <button onClick={moveNext} disabled={current === 9} className="nav-btn">→</button>
      </div>
    </div>
  );
}

export default App;
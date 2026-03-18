import React, { useState, useEffect } from 'react';
import './App.css';
import Slide from './components/Slide'; // Slide komponentini chaqiramiz

const slides = [
  { 
    id: 1, 
    title: "Alisher Navoiy — buyuk mutafakkir", 
    content: "O'zbek adabiy tili asoschisi, davlat arbobi va nazira janri ustasi." 
  },
  { 
    id: 2, 
    title: "Tavallud va yoshlik", 
    content: "1441-yil 9-fevralda Hirot shahrida tug'ilgan. Bolaligidanoq she'riyatga oshno bo'lgan." 
  },
  { 
    id: 3, 
    title: "Bilim yo'li", 
    content: "Mashhad va Samarqandda tahsil olgan. Fors va turkiy tillarda ijod qilgan." 
  },
  { 
    id: 4, 
    title: "Sulton Husayn Boyqaro", 
    content: "Bolalikdagi do'sti sulton bo'lgach, Navoiy davlat ishlarida faol qatnashgan." 
  },
  { 
    id: 5, 
    title: "Navoiy — muhrdor va vazir", 
    content: "U xalq farovonligi uchun ko'plab madrasalar, shifoxonalar va ko'priklar qurdirgan." 
  },
  { 
    id: 6, 
    title: "Xamsa — durdona asar", 
    content: "Beshta dostonni o'z ichiga olgan ulkan asar turkiy tilda birinchi bo'lib yozilgan." 
  },
  { 
    id: 7, 
    title: "Lison ut-tayr", 
    content: "Navoiyning falsafiy asari bo'lib, insonning komillikka intilishi haqida hikoya qiladi." 
  },
  { 
    id: 8, 
    title: "Muhokamat ul-lug'atayn", 
    content: "Turkiy tilning fors tilidan kam emasligini ilmiy isbotlab bergan asar." 
  },
  { 
    id: 9, 
    title: "Navoiy — g'azal mulkining sultoni", 
    content: "U o'z g'azallarida sevgi, vafo va insoniy fazilatlarni ulug'lagan." 
  },
  { 
    id: 10, 
    title: "Xotira — mangulik", 
    content: "Alisher Navoiy nomi o'zbek xalqi qalbida abadiy yashaydi. 1501-yil Hirotda vafot etgan." 
  }
];

function App() {
  const [current, setCurrent] = useState(0);

  // Avtomatik o'tish (5 soniya)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 3000);
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
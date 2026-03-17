import React from 'react';

const Slide = ({ data, current, total }) => {
  return (
    // 'key' prop animatsiyaning har safar ishlashi uchun juda muhim
    <div className="slide-content animate-fade" key={current}>
      <span className="page-number">{current + 1} / {total}</span>
      <h1>{data.title}</h1>
      <div className="divider"></div>
      <p>{data.content}</p>
    </div>
  );
};

export default Slide;
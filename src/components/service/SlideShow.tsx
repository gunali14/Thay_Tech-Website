import React, { useEffect, useState } from 'react';
import './SlideShow.css';

const slides = [
  { title: "Slide 1", content: "This is the first slide content." },
  { title: "Slide 2", content: "This is the second slide content." },
  { title: "Slide 3", content: "This is the third slide content.This is the third slide content.This is the third slide content.This is the third slide content.This is the third slide content.This is the third slide content.This is the third slide content." }
];
const delay = 2500;

const SlideShow: React.FC = () => {
  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    const timer = setTimeout(
      () => setIndex(prevIndex => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1)),
      delay
    );

    return () => clearTimeout(timer);
  }, [index]);

  return (
    <div className="slideshow">
        <div>
            <h1 className='text-center text-primary text-5xl font-bold'>Our Feedbacks</h1>
            <p className='text-center text-xl'>Clients are Talking</p>
            </div>
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {slides.map((slide, idx) => (
          <div className="slide" key={idx}>
            <div className="card">
              <h1>{slide.title}</h1>
              <p>{slide.content}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="slideshowDots">
        {slides.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? " active" : ""}`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default SlideShow;

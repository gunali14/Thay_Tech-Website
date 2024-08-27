import React, { useEffect, useState } from 'react';
import './SlideShow.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faQuoteLeft } from '@fortawesome/free-solid-svg-icons';

const slides = [
  {
    content: "This is the first slide content. This is the first slide content. This is the first slide content.",
    imgSrc: "public/img.jpg",
    personName: "Person Name",
    profession: "Profession"
  },
  {
    content: "This is the second slide content. This is the second slide content. This is the second slide content. ",
    imgSrc: "public/img.jpg",
    personName: "Person Name",
    profession: "Profession"
  },
  {
    content: "This is the third slide content. This is the third slide content. This is the third slide content.",
    imgSrc: "public/img.jpg",
    personName: "Person Name",
    profession: "Profession"
  }
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
    <>
      <div className="slideshow">
        <div className="slidecontent">
          <div className='slideshow-header p-10'>
            <h1 className='text-primary text-5xl font-bold '>Our Feedbacks</h1>
            <p className='text-xl p-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem officia dignissimos quasi quisquam dolorum inventore iure enim officiis, laudantium </p>
            <a className="bg-blue-500 rounded-full text-white py-3 px-5 p-10 inline-flex items-center" href="#">
              Read All Reviews
              <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
            </a>
          </div>
          <div className="content-bg  p-10 flex flex-col">
            <div
              className="slideshowSlider"
              style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
            >
              {slides.map((slide, idx) => (
                <div className="slide flex flex-row " key={idx}>
                  <div className="card flex p-4">
                    <div className="ml-1">
                  <FontAwesomeIcon icon={faQuoteLeft} size="2xl" className="text-black" />
                  </div>
                      <p className="text-xl mb-4">{slide.content}</p>
                      <div className="flex items-center justify-end">
                        <div className="mr-4">
                          <h5 className="text-lg font-semibold">{slide.personName}</h5>
                          <p className="text-sm">{slide.profession}</p>
                        </div>
                        <img src={slide.imgSrc} className="rounded-full" style={{ width: '100px', height: '100px', border: '2px solid', borderColor: 'theme("colors.blue.500")' }} alt="" />
                      </div>
                    </div>
                  </div>
            
              ))}
            </div>
            <div className="slideshowDots flex flex-row">
              {slides.map((_, idx) => (
                <div
                  key={idx}
                  className={`slideshowDot${index === idx ? " active" : ""}`}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SlideShow;

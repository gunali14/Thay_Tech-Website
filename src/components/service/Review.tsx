import React from 'react';
import './Review.css'; // Import your custom styles

const Review: React.FC = () => {
  return (
    <div className="client-section layout-padding">
      <div id="main-slider" className="carousel slide" data-bs-ride="carousel" data-bs-interval="2000">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="container">
              <h1 className="feature-title">What Our Customers Say</h1>
              <p className="feature-text">
                It is a long established fact that a reader will be distracted by the readable content of a page when looking.
              </p>
              <div className="client-section-content">
                <div className="image-container">
                  <img src="images/img-9.png" alt="Normal distribution" />
                </div>
                <h3 className="normal-text">Normal Distribution</h3>
                <p className="ipsum-text">
                  It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.
                </p>
                <div className="image-container">
                  <img src="images/icon-10.png" alt="Icon 10" />
                </div>
              </div>
            </div>
          </div>

          <div className="carousel-item">
            <div className="container">
              <h1 className="feature-title">Featured Products</h1>
              <p className="feature-text">
                It is a long established fact that a reader will be distracted by the readable content of a page when looking.
              </p>
              <div className="client-section-content">
                <div className="image-container">
                  <img src="images/img-9.png" alt="Normal distribution" />
                </div>
                <h3 className="normal-text">Normal Distribution</h3>
                <p className="ipsum-text">
                  It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.
                </p>
                <div className="image-container">
                  <img src="images/icon-10.png" alt="Icon 10" />
                </div>
              </div>
            </div>
          </div>

          <div className="carousel-item">
            <div className="container">
              <h1 className="feature-title"> Products</h1>
              <p className="feature-text">
                It is a long established fact that a reader will be distracted by the readable content of a page when looking.
              </p>
              <div className="client-section-content">
                <div className="image-container">
                  <img src="images/img-9.png" alt="Normal distribution" />
                </div>
                <h3 className="normal-text">Normal Distribution</h3>
                <p className="ipsum-text">
                  It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.
                </p>
                <div className="image-container">
                  <img src="images/icon-10.png" alt="Icon 10" />
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Review;

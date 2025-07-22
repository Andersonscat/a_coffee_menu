import React, { useState } from 'react';
import './ImageGallery.css';

export default function ImageGallery({ images, title }) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openGallery = () => {
    setIsOpen(true);
  };

  const closeGallery = () => {
    setIsOpen(false);
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      closeGallery();
    } else if (e.key === 'ArrowRight') {
      nextImage();
    } else if (e.key === 'ArrowLeft') {
      prevImage();
    }
  };

  return (
    <div className="image-gallery">
      <div className="gallery-preview" onClick={openGallery}>
        <img 
          src={images[0]} 
          alt={title} 
          className="preview-image"
        />
        <div className="gallery-overlay">
          <div className="gallery-icon">+</div>
        </div>
      </div>

      {isOpen && (
        <div className="gallery-modal" onKeyDown={handleKeyDown} tabIndex={0}>
          <div className="gallery-backdrop" onClick={closeGallery}></div>
          <div className="gallery-content">
            <button className="gallery-close" onClick={closeGallery}>
              ×
            </button>
            
            <button className="gallery-nav gallery-prev" onClick={prevImage}>
              ‹
            </button>
            
            <div className="gallery-image-container">
              <img 
                src={images[currentIndex]} 
                alt={`${title} ${currentIndex + 1}`}
                className="gallery-image"
              />
              <div className="gallery-counter">
                {currentIndex + 1} / {images.length}
              </div>
            </div>
            
            <button className="gallery-nav gallery-next" onClick={nextImage}>
              ›
            </button>
          </div>
        </div>
      )}
    </div>
  );
} 
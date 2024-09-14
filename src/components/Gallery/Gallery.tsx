import React, { useState } from 'react';
import './Gallery.css';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css'; // Import CSS for the gallery
import smile from '../../assets/smile.jpg';
import skin from '../../assets/skin.jpg';
import hijama from '../../assets/hijama.webp';
import botox from '../../assets/botox.webp';
import video1 from '../../assets/videoClinic.mp4';
import video2 from '../../assets/walaadoctor.mp4';

// Define the photo gallery items
const photoImages = [
  {
    original: smile,
    thumbnail: smile, 
  },
  {
    original: botox,
    thumbnail: botox, 
  },
  {
    original: botox,
    thumbnail: botox, 
  },
  {
    original: botox,
    thumbnail: botox, 
  },
  {
    original: botox,
    thumbnail: botox, 
  },
  {
    original: botox,
    thumbnail: botox, 
  },
  {
    original: botox,
    thumbnail: botox, 
  },
  {
    original: botox,
    thumbnail: botox, 
  },
  {
    original: botox,
    thumbnail: botox, 
  },
  {
    original: skin,
    thumbnail: skin, 
  },
  {
    original: hijama,
    thumbnail: hijama, 
  },
];

// Define the video gallery items
const videoItems = [
  {
    original: video1,
    thumbnail: 'https://via.placeholder.com/150x100', // Thumbnail for video1
    embedUrl: video1,
    renderItem: () => (
      <video controls width="100%">
        <source src={video1} type="video/mp4" />
      </video>
    ),
  },
  {
    original: video2,
    thumbnail: 'https://via.placeholder.com/150x100', // Thumbnail for video2
    embedUrl: video2,
    renderItem: () => (
      <video controls width="100%">
        <source src={video2} type="video/mp4" />
      </video>
    ),
  },
];

const Gallery = () => {
  // State to manage which gallery is selected
  const [isPhotoGallery, setIsPhotoGallery] = useState(true);

  return (
    <div className="Gallery">
      <h1 className='Media_Gallery'>Media Gallery</h1>

      {/* Buttons to switch between Photo and Video galleries */}
      <div className="gallery-controls">
        <button onClick={() => setIsPhotoGallery(true)}>Photo Gallery</button>
        <button onClick={() => setIsPhotoGallery(false)}>Video Gallery</button>
      </div>

      {/* Display either the photo gallery or video gallery based on state */}
      <ImageGallery items={isPhotoGallery ? photoImages : videoItems} />
    </div>
  );
};

export default Gallery;

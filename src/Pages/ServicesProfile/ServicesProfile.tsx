import './ServicesProfile.css';
import { useParams } from 'react-router-dom';
import botox from '../../assets/botox.webp';
import skine from '../../assets/skin.jpg';

const services = [
  {
    id: 1,
    url: botox,
    alt: "botox services",
    serviceTtitle: "Botox & Filler",
    description: "Botox & Filler services provide rejuvenation and anti-aging benefits."
  },
  {
    id: 2,
    url: skine,
    alt: "skin care services",
    serviceTtitle: "Skin Care",
    description: "Skin Care services include personalized treatments for glowing, healthy skin."
  },
  // Add other services here
];

const ServicesProfile = () => {
  const { id } = useParams<{ id: string }>(); // Get the id from the URL
  const service = services.find(service => service.id === parseInt(id));

  if (!service) {
    return <div>Service not found!</div>;
  }

  return (
    <div className="ServicesProfile">
      <div className="serviceProfile_hero">
        <h2>{service.serviceTtitle}</h2>
      </div>
    </div>
  );
};

export default ServicesProfile;

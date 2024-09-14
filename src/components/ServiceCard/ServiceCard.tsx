import './ServiceCard.css';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
    Card_Url: string;
    Card_Alt: string;
    Card_title: string;
    id: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ Card_Url, Card_Alt, Card_title, id }) => {
  return (
    <Link to={`/our-services/${id}`} className="card-link">
      <div className="card">
        <img 
          src={Card_Url} 
          alt={Card_Alt} 
          className="card-image"
        />
        <div className="card-title">
          {Card_title}
        </div>
      </div>
    </Link>
  );
}

export default ServiceCard;

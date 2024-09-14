import React from 'react';
import './DoctorCard.css';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface DoctorCardProps {
  img: string;            // URL of the doctor's image
  DoctorName: string;     // Name of the doctor
  DoctorSpecialist: string; // Specialization of the doctor
  id: number;            // Unique ID for the doctor
}

const DoctorCard: React.FC<DoctorCardProps> = ({ img, DoctorName, DoctorSpecialist, id }) => {
  return (
    <motion.div
      className="card-client"
      whileHover={{ scale: 1.05 }} // Slight zoom on hover
      whileTap={{ scale: 0.95 }}   // Shrinks slightly on tap/click
      initial={{ opacity: 0, y: 20 }} // Initial state before in view
      whileInView={{ opacity: 1, y: 0 }} // Trigger animation when in view
      transition={{ duration: 0.3 }}  // Transition duration of 0.5s
      viewport={{ once: true }} // Ensures the animation happens only once when the component enters the viewport
    >
      <div className="user-picture">
        <img src={img} alt={`${DoctorName}'s profile`} />
      </div>
      <p className="name-client">
        {DoctorName}
        <span>{DoctorSpecialist}</span>
      </p>
      <div className="see_profile_btn">
        <Link to={`/our-team/${id}`}>See Profile</Link>
      </div>
    </motion.div>
  );
};

export default DoctorCard;

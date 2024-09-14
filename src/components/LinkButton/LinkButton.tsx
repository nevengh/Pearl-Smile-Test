import React from 'react';
import './LinkButton.css';
import { Link } from 'react-router-dom';

interface LinkButtonProps {
  ButtonName: string;
  ButtonUrl:string;
}

const LinkButton: React.FC<LinkButtonProps> = ({ ButtonName,ButtonUrl }) => {
  return (
    <div className="Know_our_doctor_btn">
      <Link className="button" to={ButtonUrl}>
        {ButtonName}
      </Link>
    </div>
  );
};

export default LinkButton;

import HeroPages from "../../components/HeroPages/HeroPages";
import "./AboutUs.css";
import img from "../../assets/about_herp.webp";
import clinicVideo from '../../assets/videoClinic.mp4'
import { useEffect, useState } from "react";

import background_counter from "../../assets/doctorCounter.webp";

const CountUp = ({ end }) => {
    const [count, setCount] = useState(0);
  
    useEffect(() => {
      let start = 0;
      const duration = 2000; // 2 seconds duration
      const incrementTime = Math.floor(duration / end);
  
      const counter = setInterval(() => {
        start += 1;
        setCount((prevCount) => (prevCount < end ? prevCount + 1 : end));
  
        if (start >= end) {
          clearInterval(counter);
        }
      }, incrementTime);
  
      return () => clearInterval(counter);
    }, [end]);
  
    return <h2>{count}</h2>;
  };
const AboutUs = () => {
  return (
    <div className="AboutUs">
      <HeroPages HeroPagesImg={img} />
      <div className="about_us_page">
        <div className="PageHeader">
          <h3>About Us</h3>
          <h1>Trusted Dental Care for Over 25 Years</h1>
        </div>
        <div className="AboutContent">
          <div className="About_text">
            <p>
              With a passion for dentistry, Dr. Michael Formenius started Dr.
              Michael’s Dental Clinic in Sweden in 1982 spanning five dental
              centers and a dental laboratory across Stockholm. Focused on his
              vision of providing outstanding services in dentistry, Dr. Michael
              expanded to the UAE, where he currently runs state-of-the-art
              multispecialty dental clinics. Three of which are located along Al
              Wasl Road (Umm Suqeim) and one in Jumeirah.
            </p>
            <p>
              Since its birth in Dubai in 1997, Dr. Michael’s Dental Clinic has
              built an enviable place in the industry as one of the most trusted
              dental healthcare providers in the region.
            </p>
            <p>
              True to its reputation, Dr. Michael’s Dental Clinic has grown
              thirty times over the last fifteen years with a highly committed
              team of experts serving more than 50,000 patients to date. We have
              assembled the finest team of dentists, specialists, dental
              hygienists and support staff representing General Dentistry,
              Cosmetic Dentistry, Pediatric Dentistry, Orthodontics,
              Endodontics, Oral and Maxillofacial Surgery, Implantology,
              Prosthodontics, Periodontics, Sedation Dentistry, and Dental
              Hygiene.
            </p>
          </div>
          <div className="About_text">
            <p>
              With a passion for dentistry, Dr. Michael Formenius started Dr.
              Michael’s Dental Clinic in Sweden in 1982 spanning five dental
              centers and a dental laboratory across Stockholm. Focused on his
              vision of providing outstanding services in dentistry, Dr. Michael
              expanded to the UAE, where he currently runs state-of-the-art
              multispecialty dental clinics. Three of which are located along Al
              Wasl Road (Umm Suqeim) and one in Jumeirah.
            </p>
            <p>
              Since its birth in Dubai in 1997, Dr. Michael’s Dental Clinic has
              built an enviable place in the industry as one of the most trusted
              dental healthcare providers in the region.
            </p>
            <p>
              True to its reputation, Dr. Michael’s Dental Clinic has grown
              thirty times over the last fifteen years with a highly committed
              team of experts serving more than 50,000 patients to date. We have
              assembled the finest team of dentists, specialists, dental
              hygienists and support staff representing General Dentistry,
              Cosmetic Dentistry, Pediatric Dentistry, Orthodontics,
              Endodontics, Oral and Maxillofacial Surgery, Implantology,
              Prosthodontics, Periodontics, Sedation Dentistry, and Dental
              Hygiene.
            </p>
          </div>
        </div>
      </div>
      <div className="about_us_page">
        <video src={clinicVideo} autoPlay loop muted></video>
      </div>
      {/* Doctor Counter STarts */}
      <div className="Doctor_Counter_home">
        <div className="clinic-container">
          <div className="doctors-section">
            <img
              src={background_counter}
              alt="Al Das Medical Clinic"
              className="doctors-image"
            />
            <h1>Pearl Smile Medical Center</h1>
          </div>
          <div className="stats-section">
            <div className="stat-box">
              <CountUp end={21} />
              <p>Doctors</p>
            </div>
            <div className="stat-box">
              <CountUp end={10} />
              <p>Departments</p>
            </div>
            <div className="stat-box">
              <CountUp end={10} />
              <p>Years of experience</p>
            </div>
            <div className="stat-box">
              <CountUp end={100} />
              <p>Patients every day</p>
            </div>
            <div className="stat-box">
              <CountUp end={226800} />
              <p>Patients served</p>
            </div>
          </div>
        </div>
      </div>
      {/* Doctor counter Ends */}
    </div>
  );
};

export default AboutUs;

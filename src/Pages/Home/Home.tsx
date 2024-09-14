// import { Link } from "react-router-dom";
import DoctorCard from "../../components/DoctorCard/DoctorCard";
import Hero from "../../components/Hero/Hero";
import "./Home.css";
import about_img from "../../assets/istockphoto-1473559425-612x612.jpg";
import doctor1 from "../../assets/doctor1.webp";
import doctor2 from "../../assets/doctor2.webp";
import background_counter from "../../assets/doctorCounter.webp";
import LinkButton from "../../components/LinkButton/LinkButton";
import { useEffect, useState } from "react";
import OfferSlider from "../../components/OfferSlider/OfferSlider";
import ServiceCard from "../../components/ServiceCard/ServiceCard";
import botox from "../../assets/botox.webp";
import gp from "../../assets/Gp.webp";
import hijama from "../../assets/hijama.webp";
import Gallery from "../../components/Gallery/Gallery";


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
export const Home = () => {
  return (
    <div className="ne_home">
      {/* Hero Starts */}
      <Hero />
      {/* Hero Ends */}

      {/* About US Starts */}
      <div className="about_us_home about_us_home_main">
        <div className="about_us_home_content">
          <h1 className="about_us_home_title">Dr. Michael's Dental Clinic</h1>
          <h4 className="about_us_home_sub_title">
            Oral health for life starts here...
          </h4>
          <p className="about_us_home_paragraph">
            Welcome to Dr. Michael’s Dental Clinic in Dubai, where top-quality
            dental care and great customer service come together. Our clinic is
            the go-to place for all your dental needs. We are dedicated to
            providing high-quality dental treatments using the latest
            technology.
          </p>
          <p className="about_us_home_paragraph">
            Welcome to Dr. Michael’s Dental Clinic in Dubai, where top-quality
            dental care and great customer service come together. Our clinic is
            the go-to place for all your dental needs. We are dedicated to
            providing high-quality dental treatments using the latest
            technology.
          </p>
          <p className="about_us_home_paragraph">
            Welcome to Dr. Michael’s Dental Clinic in Dubai, where top-quality
            dental care and great customer service come together. Our clinic is
            the go-to place for all your dental needs. We are dedicated to
            providing high-quality dental treatments using the latest
            technology.
          </p>
          <div className="about_home_readmore">
            <LinkButton ButtonUrl="/about-us" ButtonName="Read More" />
          </div>
        </div>
        <div className="about_us_home_img">
          <img src={about_img} alt="" />
        </div>
      </div>
      {/* About Us Ends */}

      {/* Offers Home Starts */}

      <div className="offers_home">
        <h1 className="Offers_home_title">Our Offers</h1>
        <OfferSlider />
      </div>

      {/* 
==========================
    Our Services Starts
========================
*/}
      <div className="our_services_home_con">
        <h1 className="Our_services_home_title">Our Services</h1>
        <div className="Our_services_home">
          <ServiceCard
            Card_Url={botox}
            Card_Alt="Service Type"
            Card_title="Botox & Filler"
          />
          <ServiceCard
            Card_Url={gp}
            Card_Alt="Service Type"
            Card_title="Gp Services"
          />
          <ServiceCard
            Card_Url={hijama}
            Card_Alt="Service Type"
            Card_title="Hijama Services"
          />
          <ServiceCard
            Card_Url={doctor2}
            Card_Alt="Service Type"
            Card_title="Gp Services"
          />
        </div>
        <LinkButton ButtonUrl="/our-services" ButtonName="See Our Services"/>
      </div>

      {/* 
==========================
    Our Services Ends
========================
*/}

      {/* Offers Home Ends */}
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

      {/* Our Team Starts */}
      <div className="our_doctors_home">
        <h1 className="doctors_header">Meet our Specialists</h1>

        <div className="our_team_container">
          <div className="Doctors_cards_home">
            <DoctorCard
              img={doctor1}
              DoctorName="Nieven Ghasoun"
              DoctorSpecialist="CEO of the center"
            />
            <DoctorCard
              img={doctor2}
              DoctorName="Jhon Doe"
              DoctorSpecialist="CEO of WritBook"
            />
            <DoctorCard
              img={doctor1}
              DoctorName="Jhon Doe"
              DoctorSpecialist="CEO of WritBook"
            />
          </div>
          <LinkButton ButtonUrl="/our-team" ButtonName="Know Your Doctor" />
        </div>
      </div>
      {/* Our Team Ends */}

      {/* Contact Form Home */}
      <div className="home_form_container" id="home-contact">
        <h1 className="contact_home_title">Contact Us</h1>
        <form className="form">
          <div className="flex">
            <label>
              <input required placeholder="" type="text" className="input" />
              <span>Name</span>
            </label>

            <label>
              <input required placeholder="" type="text" className="input" />
              <span>Phone Number</span>
            </label>
          </div>

          <label>
            <input required placeholder="" type="email" className="input" />
            <span>email</span>
          </label>

          <label>
            <textarea
              required
              rows="3"
              placeholder="Message"
              className="input01"
            ></textarea>
            {/* <span>message</span> */}
          </label>
          <label>
            <select name="" id="" className="form_service_select">
              <option value="service1">service1</option>
              <option value="service1">service1</option>
              <option value="service1">service1</option>
            </select>
          </label>

          <button className="fancy" href="#">
            <span className="top-key"></span>
            <span className="text">submit</span>
            <span className="bottom-key-1"></span>
            <span className="bottom-key-2"></span>
          </button>
        </form>
      </div>

      {/* Contact Form Home Ends */}

      <Gallery/>
    </div>
  );
};

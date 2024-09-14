import HeroPages from "../../components/HeroPages/HeroPages";
import "./OurServices.css";
import img from "../../assets/about_herp.webp";
import ServiceCard from "../../components/ServiceCard/ServiceCard";
import botox from '../../assets/botox.webp'
import skine from '../../assets/skin.jpg'

const services = [
  {
    id: 1,
    url: botox,
    alt: "botox services",
    serviceTtitle: "Botox & Filler"
  },
  {
    id: 2,
    url: skine,
    alt: "skin care services",
    serviceTtitle: "Skin Care"
  },
  // Add other services here
];

const OurServices = () => {
  return (
    <div className="OurServices">
      <HeroPages HeroPagesImg={img} />

      <div className="services_headeing_text">
        <p>
          " Our patients have the comfort of knowing that they will have their own
          doctor with them while undergoing any invasive or complicated
          surgeries, helping to guide them through the experience. "
        </p>
      </div>

      <div className="services_card_container_page">
        {
          services.map((service) => {
            return (
              <ServiceCard
                key={service.id}
                id={service.id}
                Card_Alt={service.alt}
                Card_title={service.serviceTtitle}
                Card_Url={service.url}
              />
            );
          })
        }
      </div>
    </div>
  );
};

export default OurServices;

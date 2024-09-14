import doctor1 from "../../assets/doctor1.webp";
import doctor2 from "../../assets/doctor2.webp";
import doctorHero from "../../assets/doctorCounter.webp";
import DoctorCard from "../../components/DoctorCard/DoctorCard";
import HeroPages from "../../components/HeroPages/HeroPages";
import "./OurDoctors.css";

const OurDoctors = () => {
  
    const services = [
        {
          name: "Botox & Filler",
          doctors: [
            {
              id: 1,
              img: doctor1,
              name: "Nieven Ghasoun",
              specialist: "CEO of the center",
            },
            {
              id: 2,
              img: doctor1,
              name: "John Doe",
              specialist: "Senior Specialist",
            },
          ],
        },
        {
          name: "GP Service",
          doctors: [
            {
              id: 3,
              img: doctor2,
              name: "Jane Smith",
              specialist: "General Practitioner",
            },
            {
              id: 4,
              img: doctor2,
              name: "Alice Johnson",
              specialist: "Family Doctor",
            },
          ],
        },
        // Add more services and doctors as needed
      ];
  return (
    <div className="OurDoctors">
      <HeroPages HeroPagesImg={doctorHero} />
      <div className="about_us_page">
        <div className="our_doctors_header">
          <h1>Meet Our Specialists</h1>
          <h4>
            We are proud of each member of our team: experienced, educated
            specialists who continually improve their knowledge.
          </h4>
        </div>

        {services.map((service, index) => (
          <div className="service_Section_doctor" key={index}>
            <div className="service_name">
              <h1>{service.name}</h1>
            </div>
            <div className="doctor_for_service">
              {service.doctors.map((doctor, docIndex) => (
                <DoctorCard
                  key={docIndex}
                  img={doctor.img}
                  DoctorName={doctor.name}
                  DoctorSpecialist={doctor.specialist}
                  id={doctor.id} // Pass the doctor's ID
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurDoctors;

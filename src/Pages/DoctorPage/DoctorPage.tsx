import "./DoctorPage.css";
import { useParams } from "react-router-dom";
import doctor1 from "../../assets/doctor1.webp";
import doctor2 from "../../assets/doctor2.webp";
import DoctorWalaa from '../../assets/walaadoctor.mp4'
const DoctorPage = () => {
  const { id } = useParams(); // Get the doctor ID from the URL

  // You can replace this with actual data fetching logic
  const doctors = [
    {
      id: 1,
      name: "Nieven Ghasoun",
      specialist: "CEO of the center",
      img: doctor1,
      description:"Dr. Marcela Jimenez is a highly experienced physician with more than 20 years of practice. She is a Doctor of medicine and surgery from Pontificia Universidad Javeriana, where she graduated in 2001. after which she become a Doctor in medicine – General Practitioner of Degrees Of the Ministry of Science, Innovation and Universities in Spain in 2010.She also holds a Master degree in Occupational Medicine from Universidad del Rosario."
    },
    { id: 2, name: "John Doe", specialist: "Senior Specialist", img: doctor1,description:"Dr. Marcela Jimenez is a highly experienced physician with more than 20 years of practice. She is a Doctor of medicine and surgery from Pontificia Universidad Javeriana, where she graduated in 2001. after which she become a Doctor in medicine – General Practitioner of Degrees Of the Ministry of Science, Innovation and Universities in Spain in 2010.She also holds a Master degree in Occupational Medicine from Universidad del Rosario." },
    {
      id: 3,
      name: "Jane Smith",
      specialist: "General Practitioner",
      img: doctor2,
      description:"Dr. Marcela Jimenez is a highly experienced physician with more than 20 years of practice. She is a Doctor of medicine and surgery from Pontificia Universidad Javeriana, where she graduated in 2001. after which she become a Doctor in medicine – General Practitioner of Degrees Of the Ministry of Science, Innovation and Universities in Spain in 2010.She also holds a Master degree in Occupational Medicine from Universidad del Rosario."
    },
    { id: 4, name: "Alice Johnson", specialist: "Family Doctor", img: doctor2 ,description:"Dr. Marcela Jimenez is a highly experienced physician with more than 20 years of practice. She is a Doctor of medicine and surgery from Pontificia Universidad Javeriana, where she graduated in 2001. after which she become a Doctor in medicine – General Practitioner of Degrees Of the Ministry of Science, Innovation and Universities in Spain in 2010.She also holds a Master degree in Occupational Medicine from Universidad del Rosario."},
  ];
  const doctor = doctors.find((doc) => doc.id === parseInt(id));

  if (!doctor) {
    return <div>Doctor not found</div>;
  }
  return (
    <div className="Doctor_Profile">
      <div className="doctor_profile_first">
        <img src={doctor.img} alt={`${doctor.name}'s profile`} />
        <div className="Doctor_profile_info">
          <h1>{doctor.name}</h1>
          <h2>{doctor.specialist}</h2>
          <p>
            Languages : <span>English , Arabic</span>
          </p>
        </div>
      </div>
      <div className="doctor_about">
        <p>
          {doctor.description}
        </p>
      </div>
      <div className="doctor_videos">
        <video src={DoctorWalaa} controls loop/>
        {/* <video src={DoctorWalaa} controls loop/>
        <video src={DoctorWalaa} controls loop/> */}
      </div>
    </div>
  );
};

export default DoctorPage;

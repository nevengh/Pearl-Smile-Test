import React from 'react';
import './HeroPages.css'
interface HeroPagesProps{
    HeroPagesImg:string;
}
const HeroPages:React.FC<HeroPagesProps> = ({HeroPagesImg}) => {
  return (
    <div className='HeroPages'>
        <img src={HeroPagesImg} alt="" />
    </div>
  )
}

export default HeroPages
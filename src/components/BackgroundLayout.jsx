import React, { useEffect, useState } from 'react'
import { useStateContext } from '../Context'
import Clear from '../assets/images/Clear.jpg';
import Fog from '../assets/images/fog.png';
import Cloudy from '../assets/images/Cloudy.jpeg';
import Rainy from '../assets/images/Rainy.jpg';
import Snow from '../assets/images/snow.jpg';
import Stormy from '../assets/images/Stormy.jpg';
import Sunny from '../assets/images/Sunny.jpeg';

const BackgroundLayout = () => {
  const {weather} = useStateContext();
  const [image, setImage] = useState(Clear);

  useEffect(() => {
    if(weather.conditions){
      let imagesString=weather.conditions;
      if(imagesString.toLowerCase().includes('clear')){
        setImage(Clear)
      }
      else if(imagesString.toLowerCase().includes('cloud')){
        setImage(Cloudy)
      }
      else if(imagesString.toLowerCase().includes('fog')){
        setImage(Fog)
      }
      else if(imagesString.toLowerCase().includes('rain') || imagesString.toLowerCase().includes('shower')){
        setImage(Rainy)
      }
      else if(imagesString.toLowerCase().includes('snow')){
        setImage(Snow)
      }
      else if(imagesString.toLowerCase().includes('thunder') || imagesString.toLowerCase().includes('storm')){
        setImage(Stormy)
      }
      else if(imagesString.toLowerCase().includes('sun')){
        setImage(Sunny)
      }

    }
  },[weather]);

  return (
    <img src={image} alt='weather_image' className='h-screen w-full fixed left-0 top-0 -z-[10]' />
  )
}

export default BackgroundLayout
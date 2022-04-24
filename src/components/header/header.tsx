import React from 'react'
import Breeds from '../filter/Breeds'

interface dogsProps  {
  dogs: {
    bred_for: string,
    breed_group: string,
    height:{
      imperial: string,
      metric: string,
    },
    id: number,
    image: {
      height: number,
      id: string,
      url: string,
      width: number,
    },
    life_span: string,
    name: string,
    origin: string,
    reference_image_id: string,
    temperament: string,
    weight: {
      imperial: string,
      metric: string,
    }
}[];
}

const Header: React.FC <dogsProps> = props => {
  const breedsArray = props.dogs.map(dogs => dogs.breed_group)
  console.log(breedsArray);
  
  return (
    <header>
      <div className='logo-header'>
        <h1> Guau! </h1>
      </div>
      <Breeds id={breedsArray} />
    </header>
  )
}

export default Header
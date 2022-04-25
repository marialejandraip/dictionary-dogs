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
filter:string,

}

const Header: React.FC <dogsProps> = props => {
  const resultUniqueBreeds: string[] = [];
  let breedsArray = props.dogs.map(dogs => dogs.breed_group)
  

  for (let index = 0; index < breedsArray.length; index++) {
    if (breedsArray[index]!== undefined && breedsArray[index]!== '') {
      resultUniqueBreeds.push(breedsArray[index])
    }
  }
  const uniqueBreedsArray = resultUniqueBreeds.filter((breed: string,idx: number)=>{
    return resultUniqueBreeds.indexOf(breed)===idx
  })
  
  return (
    <header>
      <div className='logo-header'>
        <h1> Wouf! </h1>
      </div>
      <Breeds id={uniqueBreedsArray} />
    </header>
  )
}

export default Header
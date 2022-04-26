import React from 'react'
import Breeds from '../filter/Breeds'
import imageDog from '../../assets/dog-24.png'

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
}[],
setFilter:any,
setDogs: any,
filter:string
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
        <img alt= '' src={imageDog}></img>
        <h1> Wouf! </h1>
      </div>
      <Breeds id={uniqueBreedsArray} setFilter={props.setFilter} all={props.dogs} filter={props.filter} setDogs={props.setDogs} />
    </header>
  )
}

export default Header
import React from 'react'
import HeroCards from '../heroCards/heroCards'
import PaginationComponent from '../pagination/Pagination'

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
filter: string,
}

const Loading: React.FC <dogsProps> =props => {
  
  return (
    <div>
      <div className='cardContainer'>
        {props.dogs.map(dogs => <HeroCards atributes={dogs} />)}
        <PaginationComponent />
      </div>
      
    </div>
  )
}

export default Loading
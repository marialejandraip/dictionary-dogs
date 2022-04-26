import React from 'react'
import HeroCards from '../heroCards/heroCards'

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
loading:boolean,
}

const Loading: React.FC <dogsProps> =props => {
  

  return (
    <div>
      { props.loading ? 
      <div className='container-loading'> 
        <h2>Loading...</h2>
      </div> :
      <div className='cardContainer'>
        {props.dogs.map(dogs => <HeroCards key={dogs.id} atributes={dogs} />)}
      </div>
}
    </div>
  )
}

export default Loading
import React from 'react'

interface dogsAtribute {
  atributes: {
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
  }
}

const HeroCards = (props: dogsAtribute) => {
  return (
    <div className='card'key={props.atributes.id}>
      <div>
        <img alt='DogImage' src={props.atributes.image.url}/>
        <div className='infoAtributes'>
          <div>
            <h2>{props.atributes.name}</h2>
          </div>
          <div>
            <h3>Bred for:</h3>         
            {props.atributes.bred_for === undefined ||  props.atributes.breed_group === ''?
              <h4> {'Ups! Not have info about'}</h4>:
              <h4> {props.atributes.bred_for}</h4>
            }
          </div>
          <div>
            <h3>Breed group:</h3>
            {props.atributes.breed_group === undefined ||  props.atributes.breed_group === ''?
              <h4>{'Ups! Not have info about'}</h4>:
              <h4>{props.atributes.breed_group}</h4>
            }
          </div>
          <div>
            <h3>Life span:</h3>
            <h4>{props.atributes.life_span}</h4>
          </div>
          <div>
            <h3>Temperament:</h3>
            <h4>{props.atributes.temperament}</h4>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroCards
import React from 'react'
import {useEffect} from 'react'

type breedsOptions ={
  id:string[],
  setFilter: any,
  all: {
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
  setDogs:any
}

const Breeds = ({id,setFilter, setDogs, all,filter}:breedsOptions) => {

  useEffect (() => {
    if(filter === 'all'){
      setDogs(all)
    }else {
      const arrayFilterDogs = all.filter((dog) => dog.breed_group === filter)
      setDogs(arrayFilterDogs)
    }
  }, [setFilter, all, filter, setDogs])

  return (
    <div className='select-filter'>
      {id.map(breed => (<button key={breed} onClick={()=> setFilter(breed)}>{breed}</button>))}
      <button onClick={()=> setFilter('all')}>All</button>
    </div>
  )
}

export default Breeds
import React from 'react'

type breedsOptions ={id:string[]}

const Breeds = ({id,...restProps}:breedsOptions) => {
  return (
    <div className='selectFilter'>
      <h3>Breed Filter:</h3>
      <select>
        {id.map(breed => (<option>{breed}</option>))}
      </select>
    </div>
  )
}

export default Breeds
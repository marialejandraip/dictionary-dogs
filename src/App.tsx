import React from 'react';
import { useState, useEffect } from "react";
import Header from './components/header/header';
import Loading from './components/Loading/loading';
import Footer from './components/Footer/Footer';
import PaginationComponent from './components/pagination/Pagination';

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

function App() {
  const URL = `https://api.thedogapi.com/v1/breeds`
  const [state, setState] = useState<dogsProps['dogs']>([])
  const [filter, setFilter] = useState('all')
  const [dogs, setDogs] = useState([])

  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [cardsPerPage] = useState(10)
  const [active, setActive] = useState(1)
  
  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try {
        const response = await fetch(URL)
        let actualData = await response.json()
        setState(actualData)
        setLoading(false)

      }
      catch (err) {
        return err
      }
    }
    getData()
  }, [URL]);

  //console.log(state[0].breed_group);
  
  
  //Get Filtered Cards


  //Get Current cards 
  const indexOfLastCard = currentPage * cardsPerPage
  const indexOfFirstCard = indexOfLastCard - cardsPerPage
  const currentCards = dogs.slice(indexOfFirstCard, indexOfLastCard)

  //Change cards into pages
  const paginate = (pageNumber:number) => {
    setCurrentPage(pageNumber)
    setActive(pageNumber)
  }

  return (
    <div className="App">
      <Header dogs={state} setFilter= {setFilter} filter={filter} setDogs={setDogs}/>
      <Loading dogs={currentCards} loading={loading} />
      <PaginationComponent cardsPerPage={cardsPerPage} totalCards={state.length} paginate={paginate} active={active}/>
      <Footer />
    </div>
  );
}

export default App;

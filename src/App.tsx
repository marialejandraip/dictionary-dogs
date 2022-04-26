import React from 'react';
import { useState, useEffect } from "react";
import Header from './components/header/header';
import Loading from './components/Loading/loading';
import Footer from './components/Footer/Footer';
import PaginationComponent from './components/pagination/Pagination';

function App() {
  const URL = `https://api.thedogapi.com/v1/breeds`
  const [state, setState] = useState([])
  const [filter, setFilter] = useState('')

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
        console.log("error");
      }
    }
    getData()
  }, [URL]);

  //Get Current cards 
  const indexOfLastCard = currentPage * cardsPerPage
  const indexOfFirstCard= indexOfLastCard - cardsPerPage
  const currentCards =  state.slice(indexOfFirstCard, indexOfLastCard)

  //Change cards into pages
  const paginate = (pageNumber:number) => {
    setCurrentPage(pageNumber)
    setActive(pageNumber)
  }

  return (
    <div className="App">
      <Header dogs={state} filter= {filter} />
      <Loading dogs={currentCards} loading={loading} />
      <PaginationComponent cardsPerPage={cardsPerPage} totalCards={state.length} paginate={paginate} active={active}/>
      <Footer />
    </div>
  );
}

export default App;

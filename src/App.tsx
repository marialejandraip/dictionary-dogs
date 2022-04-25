import React from 'react';
import { useState, useEffect } from "react";
import Header from './components/header/header';
import Loading from './components/Loading/loading';
import Footer from './components/Footer/Footer';

function App() {
  const URL = `https://api.thedogapi.com/v1/breeds`
  const [state, setState] = useState([])
  const [filter, setFilter] = useState('')

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(URL)
        let actualData = await response.json()
        setState(actualData)
      }
      catch (err) {
        console.log("error");
      }
    }
    getData()
  }, [URL]);
  return (
    <div className="App">
      <Header dogs={state} filter= {filter} />
      <Loading dogs={state} filter= {filter}/>
      <Footer />
    </div>
  );
}

export default App;

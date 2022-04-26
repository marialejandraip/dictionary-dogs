import React from 'react'
import Pagination from 'react-bootstrap/Pagination'
import { useEffect } from "react";
interface PaginationProps {
  cardsPerPage:number,
  totalCards:number,
  paginate:any,
  active:number,
  filter:string
}

function PaginationComponent({cardsPerPage, totalCards, paginate, active, filter}:PaginationProps) {
  let items = [];
  let secondItems = [];

  useEffect(()=> {
    window.scrollTo(0,0)
  })

  if(filter==='all'){
    for(let i = 1; i <= Math.ceil(totalCards/cardsPerPage)/2; i++){
      items.push(
        <Pagination.Item key={i} active={i===active} onClick= {()=> paginate(i)}>
        {i}
      </Pagination.Item>
      )
    }
    for(let i = 10; i <= Math.ceil(totalCards/cardsPerPage); i++){
      secondItems.push(
        <Pagination.Item key={i} active={i===active} onClick= {()=> paginate(i)}>
        {i}
      </Pagination.Item>
      )
    }
  }
  else{
    for(let i = 1; i <= Math.ceil(totalCards/cardsPerPage); i++){
      items.push(
        <Pagination.Item key={i} active={i===active} onClick= {()=> paginate(i)}>
        {i}
      </Pagination.Item>
      )
    }
  }

  return (
    <div className='container-pagination'>
      <Pagination className='pagination-customized' size="sm">{items}</Pagination>
      <Pagination className='pagination-customized' size="sm">{secondItems}</Pagination>
    </div>
  )
}

export default PaginationComponent
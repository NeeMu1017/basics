import React from 'react'

const Pagination = ({ postPerPage, totalPage, paginate }) => {
  // that pagitaion dipantion on the api items 
  // here "postPerPage " == is per page items
  // here "Totalpage" items show Toatal items in api / document
  // paginate is that to hover the that page
  const pageNumber = [] //creater emty arraty for add all page Number in this array

  for (let i = 1; i <= Math.ceil(totalPage / postPerPage); i++) {
    pageNumber.push(i)
    let privest = i-1
  }
  return (
    <nav>
      <ul className='pagination'>
        {
          pageNumber.map(num=>(
            <li className='page-item'>
              <button
              onClick={()=>paginate(num)}
              className='page-link'
              >{num}</button>              
            </li>
          ))
        }
      </ul>
    </nav>
  )
}

export default Pagination
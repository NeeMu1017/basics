import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Pagination from '../Pagination'
import Navbar from '../../Navbar/Navbar'

const Tableget = () => {

    const [photos, setPhotos] = useState([])
    const [currrentpage, setCurrentPage] = useState(1);
    const [postPerPage] = useState(40)
    const [search,setSearch] =useState('');
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/comments")
            .then((res) => { setPhotos(res.data) })
            .catch(error => console.log(error))

    }, [])

    const indexOfLastPost = currrentpage * postPerPage; // In 1th page 0 to 10, 2th 11 to 20 work like :: indeoflast = 1 *10(last element)
    const indexOfFirstPost = indexOfLastPost - postPerPage;// Form next page of 2th wock like :: 10 (Last page element) - 10 (in page item); get firt item of 2th to last page
    const currentpost = photos.slice(indexOfFirstPost, indexOfLastPost); // get how manny item in one page like :: 1 to 10 or  11 to 20 ...........

    const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
        <div>
            <Navbar/>
            <div>
                <div className="container">
                <input type="text"
                onChange={(e)=>{setSearch(e.target.value)}}
                className='form-control m-3'
                />
                </div> 
                <table className='table'>
                    <thead>
                        <tr>
                            <td>id</td>
                            <td>title</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            currentpost.filter((e)=>{
                                return search.toLowerCase() === " " ? e : 
                                e.name.toLowerCase().includes(search)
                            }).map(e => (  
                                <tr key={e.id}>
                                    <td>{e.id}</td>
                                    <td>{e.name}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
                <Pagination
                    postPerPage={postPerPage}
                    totalPage={photos.length}
                    paginate={paginate}
                />
            </div>
        </div>
    )
}

export default Tableget
import React from 'react';
import styles from "./Home.module.css"
import Navbar from '../Navbar/Navbar';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  let navig = useNavigate();
  return (
    <div>
      <Navbar />
      <div>
        <h4>Difference Tyep's of form</h4>
        <div className="row ">
          <div className="col-2">
            <button className={styles.buttonn} onClick={() => navig('/from')}>From</button>
          </div>
          <div className="col-2">
          <button className={styles.buttonn} onClick={() => navig('/from2')}>Html css From</button>
          </div>
          <div className="col-2">
          <button className={styles.buttonn} onClick={() => navig('/from3')}>REDUX From</button>
          </div>
        </div>
      </div>
      <div className='row'>
        <h4>Make Table for given </h4>
        <div className='col-2'>
          <button className={styles.buttonn} onClick={() => navig('/tableget')}>Table Get Methode</button>
        </div>
        <div className='col-2'>
          <button className={styles.buttonn} onClick={() => navig('/tableget')}>Table Put Methode</button>
        </div>
        <div className='col-2'>
          <button className={styles.buttonn} onClick={() => navig('/tableget')}>Table Post Methode</button>
        </div>

      </div>


    </div>
  )
}

export default Home
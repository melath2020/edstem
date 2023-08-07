import React from 'react'
import food1 from '../../src/images/receip.PNG'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="container">
      <div class="row justify-content-center align-items-center g-2">
         <div class="col-md-4 mt-5">
        <Link to={"/singleproduct"}>
       
          <div class="card">
            <img src={food1} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Piza</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
       
        </Link>
        </div>

        <div class="col-md-4 mt-5">
        <Link to={"/singleproduct"}>
       
          <div class="card">
            <img src={food1} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Piza</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
       
        </Link>
        </div>

        <div class="col-md-4 mt-5">
        <Link to={"/singleproduct"}>
       
          <div class="card">
            <img src={food1} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Poratta</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
       
        </Link>
        </div>

        <div class="col-md-4 mt-5">
        <Link to={"/singleproduct"}>
       
          <div class="card">
            <img src={food1} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Nuddles</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
       
        </Link>
        </div>

        <div class="col-md-4 mt-5">
        <Link to={"/singleproduct"}>
       
          <div class="card">
            <img src={food1} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Bread</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
       
        </Link>
        </div>

        <div class="col-md-4 mt-5">
        <Link to={"/singleproduct"}>
       
          <div class="card">
            <img src={food1} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Sandwitch</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
       
        </Link>
        </div>


        <div class="col-md-4 mt-5">
        <Link to={"/singleproduct"}>
       
          <div class="card">
            <img src={food1} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Piza</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
       
        </Link>
        </div>


        <div class="col-md-4 mt-5">
        <Link to={"/singleproduct"}>
       
          <div class="card">
            <img src={food1} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Piza</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
       
        </Link>
        </div>

        
        <div class="col-md-4 mt-5">
        <Link to={"/singleproduct"}>
       
          <div class="card">
            <img src={food1} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Burger</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
       
        </Link>
        </div>
        
      
      </div>
    </div>
  );
}

export default Home

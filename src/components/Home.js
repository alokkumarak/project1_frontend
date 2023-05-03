import { Link } from "react-router-dom";



function Home() {
  return (
    <div className="container mt-4">

     
      <div id="carouselExampleIndicators" className="carousel slide" style={{maxHeight:"500px"}}>
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>

          <div className="carousel-inner" >
            <div className="carousel-item active"  style={{backgroundColor:"green",height:"500px"}}>
            <img src="logo512.png" className="d-block w-100" style={{height:"100%"}} alt="First slide"/>

            </div>

            <div className="carousel-item " style={{backgroundColor:"green",height:"500px"}} >
              
              <img src="https://via.placeholder.com/500x300?text=Second+slide" className="d-block w-100"  style={{height:"100%"}} alt="Second slide"/>
        
            </div>

            <div className="carousel-item" style={{backgroundColor:"green",height:"500px"}}>
              <img src="https://via.placeholder.com/500x300?text=Third+slide" className="d-block w-100"  style={{height:"100%"}} alt="Third slide"/>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

      {/* Latest Courses*/}

      
      <div className="row mt-5">
        <h3>Latest Courses</h3>
        <div className="col-md-3">
            <div className="card">
                <Link to="/detail/1" ><img src="logo512.png" className="card-img-top img-fluid" alt="..."/></Link>
                <div className="card-body">
                  <h5 className="card-title">Course title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <Link to="/detail/1" class="btn btn-primary center">Start Learning</Link>
                </div>
            </div>
        </div>

        <div className="col-md-3">
            <div className="card">
                <Link to="/detail/1" ><img src="logo512.png" className="card-img-top img-fluid" alt="..."/></Link>
                <div className="card-body">
                  <h5 className="card-title">Course title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <Link to="/detail/1" class="btn btn-primary center">Start Learning</Link>
                </div>
            </div>
        </div>


        <div className="col-md-3">
            <div className="card">
                <Link to="/detail/1" ><img src="logo512.png" className="card-img-top img-fluid" alt="..."/></Link>
                <div className="card-body">
                  <h5 className="card-title">Course title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <Link to="/detail/1" class="btn btn-primary center">Start Learning</Link>
                </div>
            </div>
        </div>


        <div className="col-md-3">
            <div className="card">
                <Link to="/detail/1" ><img src="logo512.png" className="card-img-top img-fluid" alt="..."/></Link>
                <div className="card-body">
                  <h5 className="card-title">Course title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <Link to="/detail/1" class="btn btn-primary center">Start Learning</Link>
                </div>
            </div>
        </div>
      </div>

      {/* End Latest Courses*/}

      {/* Popular Courses*/}

      
      <div className="row mt-5">
      <h3>Popular Courses</h3>
        <div className="col-md-3">
              <div className="card">
                  <Link to="/detail/1" ><img src="logo512.png" className="card-img-top img-fluid" alt="..."/></Link>
                  <div className="card-body">
                    <h5 className="card-title">Course title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <Link to="/detail/1" class="btn btn-primary center">Start Learning</Link>
                  </div>
              </div>
          </div>



          <div className="col-md-3">
            <div className="card">
                <Link to="/detail/1" ><img src="logo512.png" className="card-img-top img-fluid" alt="..."/></Link>
                <div className="card-body">
                  <h5 className="card-title">Course title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <Link to="/detail/1" class="btn btn-primary center">Start Learning</Link>
                </div>
            </div>
        </div>


        <div className="col-md-3">
            <div className="card">
                <Link to="/detail/1" ><img src="logo512.png" className="card-img-top img-fluid" alt="..."/></Link>
                <div className="card-body">
                  <h5 className="card-title">Course title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <Link to="/detail/1" class="btn btn-primary center">Start Learning</Link>
                </div>
            </div>
        </div>


        <div className="col-md-3">
            <div className="card">
                <Link to="/detail/1" ><img src="logo512.png" className="card-img-top img-fluid" alt="..."/></Link>
                <div className="card-body">
                  <h5 className="card-title">Course title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <Link to="/detail/1" class="btn btn-primary center">Start Learning</Link>
                </div>
            </div>
        </div>
      </div>

      {/* End Popular Courses*/}

    {/* Popular Teachers*/}  
       
      <div className="row mt-5">
      <h3>Popular Teachers</h3>
        <div className="col-md-3">
              <div className="card">
                  <Link to="/detail/1" ><img src="logo512.png" className="card-img-top img-fluid" alt="..."/></Link>
                  <div className="card-body">
                    <h5 className="card-title">Teacher Name</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <Link to="/detail/1" class="btn btn-primary center">Show Teacher</Link>
                  </div>
              </div>
          </div>


          <div className="col-md-3">
            <div className="card">
                <Link to="/detail/1" ><img src="logo512.png" className="card-img-top img-fluid" alt="..."/></Link>
                <div className="card-body">
                  <h5 className="card-title">Teacher Name</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <Link to="/detail/1" class="btn btn-primary center">Show Teacher</Link>
                </div>
            </div>
        </div>


        <div className="col-md-3">
            <div className="card">
                <Link to="/detail/1" ><img src="logo512.png" className="card-img-top img-fluid" alt="..."/></Link>
                <div className="card-body">
                  <h5 className="card-title">Teacher Name</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <Link to="/detail/1" class="btn btn-primary center">Show Teacher</Link>
                </div>
            </div>
        </div>


        <div className="col-md-3">
            <div className="card">
                <Link to="/detail/1" ><img src="logo512.png" className="card-img-top img-fluid" alt="..."/></Link>
                <div className="card-body">
                  <h5 className="card-title">Teacher Name</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <Link to="/detail/1" class="btn btn-primary center">Show Teacher</Link>
                </div>
            </div>
        </div>

      </div>

      {/* End Popular Teachers*/}

      {/* Start Student Testimonials*/}
      
      <h3 className="pb-1 mb-4 mt-5">Student Testimonials</h3>
      
        <div id="carouselExampleIndicators" class="carousel slide bg-dark text-white py-5">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>

          <div className="carousel-inner">
            <div className="carousel-item active">

                <figure className="text-center">
                  <blockquote className="blockquote">
                    <p>A well-known quote, contained in a blockquote element.</p>
                  </blockquote>
                  <figcaption className="blockquote-footer">
                    Someone famous in <cite title="Source Title">Source Title</cite>
                  </figcaption>
                </figure>

            </div>

            <div className="carousel-item">
              <figure className="text-center">
                  <blockquote className="blockquote">
                    <p>A well-known quote, contained in a blockquote element.</p>
                  </blockquote>
                  <figcaption className="blockquote-footer">
                    Someone famous in <cite title="Source Title">Source Title</cite>
                  </figcaption>
                </figure>
            </div>

            <div className="carousel-item">
              <figure className="text-center">
                    <blockquote className="blockquote">
                      <p>A well-known quote, contained in a blockquote element.</p>
                    </blockquote>
                    <figcaption className="blockquote-footer">
                      Someone famous in <cite title="Source Title">Source Title</cite>
                    </figcaption>
                  </figure>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

      {/* End Student Testimonials*/}
      

    </div>
  );
}

export default Home;
import {Link} from "react-router-dom";

function Card(){
    return(
        <div className="card mx-3 mt-0 h-100">
        <Link to="/detail/1" ><img src="https://mdbcdn.b-cdn.net/img/new/standard/city/041.webp" className="card-img-top img-fluid" alt="Hollywood Sign on The Hill" /></Link>
            <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
                This is a longer card with supporting text below as a natural lead-in to
                additional content. This content is a little bit longer.
            </p>
            </div>
        </div> 
    );
}

export default Card;
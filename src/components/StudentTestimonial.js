import React from 'react';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';

function StudentTestimonial(){
  return (
    <div>
        <h2 className="text-center mb-5">Student Testimonial</h2>
    <Carousel autoPlay="true" infiniteLoop="true" showStatus="false">
            <div>
                <div className="container text-center">

                    <div className="row">
                        <div className="col-lg-4">
                            <img className="rounded-circle shadow-1-strong mb-4"
                            src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp" alt="avatar"
                            style={{width:'150px'}} />
                            <h5 className="mb-3">Anna Deynah</h5>
                            <p>UX Designer</p>
                            <p className="text-muted">
                            <i className="pe-2"><FormatQuoteIcon/></i>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id
                            officiis hic tenetur quae quaerat ad velit ab hic tenetur.
                            </p>
                            <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
                            <li><i><StarIcon/></i></li>
                            <li><i><StarIcon/></i></li>
                            <li><i><StarIcon/></i></li>
                            <li><i><StarIcon/></i></li>
                            <li><i><StarHalfIcon/></i></li>
                            </ul>
                        </div>

                        <div className="col-lg-4 d-none d-lg-block">
                            <img className="rounded-circle shadow-1-strong mb-4"
                            src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(32).webp" alt="avatar"
                            style={{width:'150px'}} />
                            <h5 className="mb-3">John Doe</h5>
                            <p>Web Developer</p>
                            <p className="text-muted">
                            <i className="pe-2"><FormatQuoteIcon/></i>
                            Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
                            suscipit laboriosam, nisi ut aliquid commodi.
                            </p>
                            <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
                            <li><i><StarIcon/></i></li>
                            <li><i><StarIcon/></i></li>
                            <li><i><StarIcon/></i></li>
                            <li><i><StarIcon/></i></li>
                            <li><i><StarIcon/></i></li>
                            </ul>
                        </div>

                        <div className="col-lg-4 d-none d-lg-block">
                            <img className="rounded-circle shadow-1-strong mb-4"
                            src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp" alt="avatar"
                            style={{width:'150px'}}/>
                            <h5 className="mb-3">Maria Kate</h5>
                            <p>Photographer</p>
                            <p className="text-muted">
                            <i className="pe-2"><FormatQuoteIcon/></i>
                            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
                            praesentium voluptatum deleniti atque corrupti.
                            </p>
                            <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
                            <li><i><StarIcon/></i></li>
                            <li><i><StarIcon/></i></li>
                            <li><i><StarIcon/></i></li>
                            <li><i><StarIcon/></i></li>
                            <li><i><StarHalfIcon/></i></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>


            <div>
                <div className="container text-center">

                    <div className="row">
                        <div className="col-lg-4">
                            <img className="rounded-circle shadow-1-strong mb-4"
                            src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp" alt="avatar"
                            style={{width:'150px'}} />
                            <h5 className="mb-3">Anna Deynah</h5>
                            <p>UX Designer</p>
                            <p className="text-muted">
                            <i className="pe-2"><FormatQuoteIcon/></i>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id
                            officiis hic tenetur quae quaerat ad velit ab hic tenetur.
                            </p>
                            <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
                            <li><i><StarIcon/></i></li>
                            <li><i><StarIcon/></i></li>
                            <li><i><StarIcon/></i></li>
                            <li><i><StarIcon/></i></li>
                            <li><i><StarHalfIcon/></i></li>
                            </ul>
                        </div>

                        <div className="col-lg-4 d-none d-lg-block">
                            <img className="rounded-circle shadow-1-strong mb-4"
                            src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(32).webp" alt="avatar"
                            style={{width:'150px'}} />
                            <h5 className="mb-3">John Doe</h5>
                            <p>Web Developer</p>
                            <p className="text-muted">
                            <i className="pe-2"><FormatQuoteIcon/></i>
                            Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
                            suscipit laboriosam, nisi ut aliquid commodi.
                            </p>
                            <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
                            <li><i><StarIcon/></i></li>
                            <li><i><StarIcon/></i></li>
                            <li><i><StarIcon/></i></li>
                            <li><i><StarIcon/></i></li>
                            <li><i><StarIcon/></i></li>
                            </ul>
                        </div>

                        <div className="col-lg-4 d-none d-lg-block">
                            <img className="rounded-circle shadow-1-strong mb-4"
                            src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp" alt="avatar"
                            style={{width:'150px'}}/>
                            <h5 className="mb-3">Maria Kate</h5>
                            <p>Photographer</p>
                            <p className="text-muted">
                            <i className="pe-2"><FormatQuoteIcon/></i>
                            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
                            praesentium voluptatum deleniti atque corrupti.
                            </p>
                            <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
                            <li><i><StarIcon/></i></li>
                            <li><i><StarIcon/></i></li>
                            <li><i><StarIcon/></i></li>
                            <li><i><StarIcon/></i></li>
                            <li><i><StarHalfIcon/></i></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

                 <div>
                <div className="container text-center">

                    <div className="row">
                        <div className="col-lg-4">
                            <img className="rounded-circle shadow-1-strong mb-4"
                            src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp" alt="avatar"
                            style={{width:'150px'}} />
                            <h5 className="mb-3">Anna Deynah</h5>
                            <p>UX Designer</p>
                            <p className="text-muted">
                            <i className="pe-2"><FormatQuoteIcon/></i>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id
                            officiis hic tenetur quae quaerat ad velit ab hic tenetur.
                            </p>
                            <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
                            <li><i><StarIcon/></i></li>
                            <li><i><StarIcon/></i></li>
                            <li><i><StarIcon/></i></li>
                            <li><i><StarIcon/></i></li>
                            <li><i><StarHalfIcon/></i></li>
                            </ul>
                        </div>

                        <div className="col-lg-4 d-none d-lg-block">
                            <img className="rounded-circle shadow-1-strong mb-4"
                            src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(32).webp" alt="avatar"
                            style={{width:'150px'}} />
                            <h5 className="mb-3">John Doe</h5>
                            <p>Web Developer</p>
                            <p className="text-muted">
                            <i className="pe-2"><FormatQuoteIcon/></i>
                            Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
                            suscipit laboriosam, nisi ut aliquid commodi.
                            </p>
                            <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
                            <li><i><StarIcon/></i></li>
                            <li><i><StarIcon/></i></li>
                            <li><i><StarIcon/></i></li>
                            <li><i><StarIcon/></i></li>
                            <li><i><StarIcon/></i></li>
                            </ul>
                        </div>

                        <div className="col-lg-4 d-none d-lg-block">
                            <img className="rounded-circle shadow-1-strong mb-4"
                            src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp" alt="avatar"
                            style={{width:'150px'}}/>
                            <h5 className="mb-3">Maria Kate</h5>
                            <p>Photographer</p>
                            <p className="text-muted">
                            <i className="pe-2"><FormatQuoteIcon/></i>
                            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
                            praesentium voluptatum deleniti atque corrupti.
                            </p>
                            <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
                            <li><i><StarIcon/></i></li>
                            <li><i><StarIcon/></i></li>
                            <li><i><StarIcon/></i></li>
                            <li><i><StarIcon/></i></li>
                            <li><i><StarHalfIcon/></i></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            </Carousel>
    </div>
  );
};

export default StudentTestimonial;
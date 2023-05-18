import Link from "antd/es/typography/Link";
import HomeIcon from '@mui/icons-material/Home';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
function Footer() {
    return (
      <footer className="text-center pt-5 mt-5 mx-3 text-lg-start bg-dark text-white">
    
    
      <section className="">
        <div className="container text-center text-md-start mt-5">
          
          <div className="row mt-3">
            
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              
              <h6 className="text-uppercase fw-bold mb-4">
                EDUPEDIA
              </h6>
              <p>
                We provide the best and latest training which helps all the fresher and the corporates to understand well and give them the knowledge to go hand in hand.
              </p>
            </div>
            
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
             
              <h6 className="text-uppercase fw-bold mb-4">
                COURSES
              </h6>
              <p>
                <Link to="#!" className="text-reset text-decoration-none">CSE</Link>
              </p>
              <p>
              <Link to="#!" className="text-reset text-decoration-none">GATE</Link>
              </p>
              <p>
              <Link to="#!" className="text-reset text-decoration-none">Sem Exams</Link>
              </p>
              <p>
              <Link to="#!" className="text-reset text-decoration-none">Interview Preparation</Link>
              </p>
            </div>
            
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              
              <h6 className="text-uppercase fw-bold mb-4">
                USEFUL LINKS
              </h6>
              <p>
              <Link to="#!" className="text-reset text-decoration-none">About US</Link>
              </p>
              <p>
              <Link to="#!" className="text-reset text-decoration-none">Courses</Link>
              </p>
              <p>
              <Link to="#!" className="text-reset text-decoration-none">Register</Link>
              </p>
              <p>
              <Link to="#!" className="text-reset text-decoration-none">Any Query</Link>
              </p>
            </div>
            
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              
              <h6 className="text-uppercase fw-bold mb-4">CONTACT US</h6>
              <p><span><HomeIcon/> Patna,Bihar</span></p>
              <p><span><EmailIcon/> info@edupedia.com</span></p>
              <p><span><LocalPhoneIcon/> +91 7004278778</span></p>
            </div>
            
          </div>
          
        </div>
      </section>
      
      <div className="text-center p-4">
        © 2023 Copyright:
        <Link className="text-reset text-decoration-none fw-bold" to="#">edupedia.com</Link>
      </div>
      
    </footer>
    );
  }
  
  export default Footer;
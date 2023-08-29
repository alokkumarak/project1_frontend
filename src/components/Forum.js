import React from 'react'
import '../css/forum.css'
import ForumAnwer from './ForumAnwer'
import ForumQuestion from './ForumQuestion'
function Forum() {
  return (
    
    <div className="home-page">
     <div className="banner">
        <div className="container">
          <h3 className="logo-font" >Disscussion Forum</h3>
          <p>A place to share your knowledge.</p>
        </div>
     </div>

      <div className="container page">
        <div className="row">
          <div className="col-md-9">
            <div className="feed-toggle">
      
              <div className="d-flex justify-content-between align-items-center p-2">
                  <h5><b>Global Feed</b></h5>
                  <input
                    type="text"
                    placeholder="Search..."
                    className="form-control w-25"
                    
                  />
                </div>
                  
                
            </div>
            <div className="scrollable-container">
              <ForumQuestion/>
              <ForumQuestion/>
            </div>
            {/* <nav>
              <ul className="pagination">
                <li className="page-item active"><button type="button" className="page-link">1</button></li>
                <li className="page-item"><button type="button" className="page-link">2</button></li>
                <li className="page-item"><button type="button" className="page-link">3</button></li>
                <li className="page-item"><button type="button" className="page-link">4</button></li>
                <li className="page-item"><button type="button" className="page-link">5</button></li>
                <li className="page-item"><button type="button" className="page-link">6</button></li>
                <li className="page-item"><button type="button" className="page-link">7</button></li>
                <li className="page-item"><button type="button" className="page-link">8</button></li>
              </ul>
            </nav> */}
          </div>

          <div className="col-md-3">
            <div className="sidebar">
              <p>Popular Tags</p>
              <div className="tag-list">
                <button type="button" className="tag-default tag-pill">implementations</button>
                <button type="button" className="tag-default tag-pill">welcome</button>
                <button type="button" className="tag-default tag-pill">introduction</button>
                <button type="button" className="tag-default tag-pill">codebaseShow</button>
              </div>
            </div>
          </div>

        </div>
      </div>


      <div className="container">
        <div className="quistion-box">
          <label htmlFor="questionBox" className="form-label">Ask your doubt</label>
          <textarea className="form-control w-75" id="questionBox" rows="5"></textarea>
          <button type="submit" className="submit-button my-2">Submit</button>
        </div>
      </div>
    </div>
  )
}

export default Forum
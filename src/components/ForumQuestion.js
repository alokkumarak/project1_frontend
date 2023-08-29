import React from 'react'
import ForumAnwer from './ForumAnwer'

function ForumQuestion() {
  return (
    <div className="article-preview mt-2">
                <div className="article-meta">
                  <a href="/@Anah Benešová"><img src="https://api.realworld.io/images/demo-avatar.png" alt="Anah Benešová" /></a>
                  <div className="info">
                    <a className="author" href="/@Anah Benešová">Anah Benešová</a>
                    <time className="date" dateTime="2022-12-09T13:46:24.264Z">Fri Dec 09 2022</time>
                  </div>
                  
                </div>
                <h1 className="preview-link-h">Try to transmit the HTTP card, maybe it will override the multi-byte hard drive!</h1>
                <ForumAnwer/>
                <ForumAnwer/>
                <ForumAnwer/>
                <ForumAnwer/>
                <button className="more-sol my-3">More solutions.....</button>
                <div className="container">
                  <div className="solution-box my-3">
                    <label htmlFor="solutionBox" className="form-label">Give your solution.</label>
                    <textarea className="form-control" id="solutionBox" rows="3"></textarea>
                   
                        <button style={{float:"right"}} type="submit"  className="submit-button mt-2">Submit</button>
                    
                  </div>
                </div>
              </div>
  )
}

export default ForumQuestion
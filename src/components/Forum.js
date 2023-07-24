import React from 'react'
import '../css/forum.css'
function Forum() {
  return (
    
    <div className="home-page">
     <div className="banner">
        <div className="container">
          <h1 className="logo-font" >Disscussion Forum</h1>
          <p>A place to share your knowledge.</p>
        </div>
     </div>

      <div className="container page">
        <div className="row">
          <div className="col-md-9">
            <div className="feed-toggle">
              <ul className="nav nav-pills outline-active">
                <li className="nav-item">
                  <button type="button" className="nav-link active">
                    Global Feed
                  </button>
                </li>
              </ul>
            </div>
            <div className="scrollable-container">
              <div className="article-preview">
                <div className="article-meta">
                  <a href="/@Anah Benešová"><img src="https://api.realworld.io/images/demo-avatar.png" alt="Anah Benešová" /></a>
                  <div className="info">
                    <a className="author" href="/@Anah Benešová">Anah Benešová</a>
                    <time className="date" dateTime="2022-12-09T13:46:24.264Z">Fri Dec 09 2022</time>
                  </div>
                  <div className="pull-xs-right">
                    <button className="btn btn-sm btn-outline-primary"><i className="ion-heart"></i> 1124</button>
                  </div>
                </div>
                <h1 className="preview-link-h">Try to transmit the HTTP card, maybe it will override the multi-byte hard drive!</h1>
                <div className="preview-link" href="/article/Try-to-transmit-the-HTTP-card-maybe-it-will-override-the-multi-byte-hard-drive!-120863">
                  <p><a href="/@Anah Benešová"><img src="https://api.realworld.io/images/demo-avatar.png" alt="Anah Benešová" /></a>
                    <a className="author" href="/@Alok Kumar"><u><b>Alok Kumar</b></u></a> : Assumenda molestiae laboriosam enim ipsum quaerat enim officia vel quo. Earum odit rem natus totam atque cumque. Sint dolorem facere non.
                  </p>
                  <span>Read more...</span>
                  <ul className="tag-list">
                    <li className="tag-default tag-pill tag-outline">voluptate</li>
                    <li className="tag-default tag-pill tag-outline">rerum</li>
                    <li className="tag-default tag-pill tag-outline">ducimus</li>
                    <li className="tag-default tag-pill tag-outline">hic</li>
                  </ul>
                </div>
                <div className="preview-link" href="/article/Try-to-transmit-the-HTTP-card-maybe-it-will-override-the-multi-byte-hard-drive!-120863">
                  <p><a href="/@Anah Benešová"><img src="https://api.realworld.io/images/demo-avatar.png" alt="Anah Benešová" /></a>
                    <a className="author" href="/@Alok Kumar"><u><b>Alok Kumar</b></u></a> : Assumenda molestiae laboriosam enim ipsum quaerat enim officia vel quo. Earum odit rem natus totam atque cumque. Sint dolorem facere non.
                  </p>
                  <span>Read more...</span>
                  <ul className="tag-list">
                    <li className="tag-default tag-pill tag-outline">voluptate</li>
                    <li className="tag-default tag-pill tag-outline">rerum</li>
                    <li className="tag-default tag-pill tag-outline">ducimus</li>
                    <li className="tag-default tag-pill tag-outline">hic</li>
                  </ul>
                </div>
                <div className="preview-link" href="/article/Try-to-transmit-the-HTTP-card-maybe-it-will-override-the-multi-byte-hard-drive!-120863">
                  <p><a href="/@Anah Benešová"><img src="https://api.realworld.io/images/demo-avatar.png" alt="Anah Benešová" /></a>
                    <a className="author" href="/@Alok Kumar"><u><b>Alok Kumar</b></u></a> : Assumenda molestiae laboriosam enim ipsum quaerat enim officia vel quo. Earum odit rem natus totam atque cumque. Sint dolorem facere non.
                  </p>
                  <span>Read more...</span>
                  <ul className="tag-list">
                    <li className="tag-default tag-pill tag-outline">voluptate</li>
                    <li className="tag-default tag-pill tag-outline">rerum</li>
                    <li className="tag-default tag-pill tag-outline">ducimus</li>
                    <li className="tag-default tag-pill tag-outline">hic</li>
                  </ul><br />
                </div>
                <button className="more-sol my-3">More solutions.....</button>
                <div className="container">
                  <div className="solution-box my-3">
                    <label htmlFor="solutionBox" className="form-label">Give your solution.</label>
                    <textarea className="form-control" id="solutionBox" rows="3"></textarea>
                  </div>
                </div>
              </div>
            </div>
            <nav>
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
            </nav>
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
          <textarea className="form-control" id="questionBox" rows="3"></textarea>
        </div>
      </div>
    </div>
  )
}

export default Forum
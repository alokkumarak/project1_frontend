import React from "react";

function ForumAnwer({ ans }) {
  
  return (
    <div className="preview-link">
      <div className="forum_ind_ans">
        <img src="https://api.realworld.io/images/demo-avatar.png" alt="kklf" />
        <div className="forum_name">
          <b>{ans?.answered_by_name} : </b>
          {ans?.answer}
        </div>
      </div>
      {/* <span>Read more...</span> */}

      {/* <ul className="tag-list">
        <li className="tag-default tag-pill tag-outline">voluptate</li>
        <li className="tag-default tag-pill tag-outline">rerum</li>
        <li className="tag-default tag-pill tag-outline">ducimus</li>
        <li className="tag-default tag-pill tag-outline">hic</li>
        </ul> */}
    </div>
  );
}

export default ForumAnwer;

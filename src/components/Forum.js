import React, { useState, useEffect } from "react";
import "../css/forum.css";
import ForumQuestion from "./ForumQuestion";
import { Button } from "@mui/material";
import  Axios  from "axios";
import { serverString } from "../utils/config";
function Forum({ studentToken, teacherToken }) {
  const [ForumQuestions, setForumQuestions] = useState("");
  const [forumData, setForumData] = useState(null);
  const [inQueue, setInQueue] = useState(false);

  const asked_by_id = studentToken ? studentToken.student_id : teacherToken ? teacherToken.teacher_id : null;
  const asked_by_name = studentToken ? studentToken.student_name : teacherToken ? teacherToken.teacher_name : null;

  const submitQuestion = () => {
    const data ={
      forum_question: ForumQuestions,
      asked_by_id: asked_by_id,
      asked_by_name: asked_by_name,
    }
    Axios.post(`${serverString}/postforumQuestion`, data,
    {
      headers: {
          "Content-Type": "application/json",
          },
          }
          )
    .then((response) => {
      // console.log(response);
      setForumQuestions("");
      setInQueue(true);
      
    })
    .catch((error) => {
      console.log(error);
    }
    );
  };


  // useEffect(() => {
  //   console.log("useEffect");
  //   Axios.get(`${serverString}/getAllForums`)
  //   .then((response) => {
  //     console.log(response);
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   }
  //   );
  // }, []);

  useEffect(() => {
    Axios.get(`${serverString}/getAllForums`)
      .then((res) => {
        if (res.data) {
          setForumData(res.data.data);
        }
      })
      .catch((err) => {
        console.log("err", err);
      });
  }, [inQueue]);



  return (
    <div className="home-page">
      <div className="container">
        <div className="row">
          <div className="col-md-9">
            <div className="forum_header">
              <h5>
                <b>Global Feed</b>
              </h5>
              <input
                type="text"
                placeholder="Search..."
                className="search_bar"
              />
            </div>
            <div className="scrollable-container">
              {forumData &&
                forumData.map((forum) => (
                  <ForumQuestion
                    key={forum.forum_id}
                    forum={forum}
                    ansById={asked_by_id}
                    andByName={asked_by_name}
                  />
                ))}
            </div>
          </div>

          <div className="col-md-3">
            <div className="sidebar">
              <p>Popular Tags</p>
              <div className="tag-list">
                <button type="button" className="tag-default tag-pill">
                  implementations
                </button>
                <button type="button" className="tag-default tag-pill">
                  welcome
                </button>
                <button type="button" className="tag-default tag-pill">
                  introduction
                </button>
                <button type="button" className="tag-default tag-pill">
                  codebaseShow
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {studentToken || teacherToken ? (
        <div className="container">
          <div className="quistion-box">
            <label htmlFor="questionBox" className="form-label">
              Ask your doubt
            </label>
            <textarea
              className="form-control w-75"
              id="questionBox"
              rows="5"
              value={ForumQuestions}
              onChange={(e) => setForumQuestions(e.target.value)}
            ></textarea>
            <Button
              variant="contained"
              color="secondary"
              type="submit"
              className="submit-button my-2"
              onClick={submitQuestion}
            >
              Submit
            </Button>
          </div>
        </div>
      ) : (
        <div className="container">
          <h3>please login to ask your doubt</h3>
        </div>
      )}
    </div>
  );
}

export default Forum;

import React, { useState } from "react";
import ForumAnwer from "./ForumAnwer";
import { Button } from "@mui/material";
import Axios from "axios";
import { serverString } from "../utils/config";

function ForumQuestion({ forum, ansById, andByName }) {
  const [forumAns, setForumAns] = useState(null);
  const dateObj = new Date(forum.creaed_at);
  const options = { year: "numeric", month: "short", day: "2-digit" };
  const formattedDate = dateObj.toLocaleString("en-US", options);

  const submitAnswer = () => {
    const data = {
      answer: forumAns,
      forum_id: forum.forum_id,
      answered_by_id: ansById,
      answered_by_name: andByName,
    };
    Axios.post(`${serverString}/postforumAnswer`, data, {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        setForumAns("");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // console.log(forum);

  return (
    <div className="article-preview mt-2">
      <div className="article-meta">
        <img
          src="https://api.realworld.io/images/demo-avatar.png"
          alt="Anah Benešová"
        />
        <div className="info">
          <div>{forum.asked_by_name}</div>
          <span>{formattedDate}</span>
        </div>
      </div>
      <h1 className="preview-link-h">{forum.forum_question}</h1>
      <div className="forum_ans">
        {
          forum.forum_answers.map((ans) => (
            <ForumAnwer ans={ans} />
          ))
        }
        {/* <Button className="more-sol">More solutions.....</Button> */}
        <div className="container">
          <div className="solution-box">
            <label htmlFor="solutionBox" className="form-label">
              Give your solution.
            </label>
            <textarea
              className="form-control"
              id="solutionBox"
              rows="3"
              value={forumAns}
              onChange={(e) => setForumAns(e.target.value)}
            ></textarea>
            <Button
              style={{ float: "right" }}
              type="submit"
              className="submit-button mt-2"
              variant="contained"
              color="secondary"
              onClick={submitAnswer}
            >
              Submit
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForumQuestion;

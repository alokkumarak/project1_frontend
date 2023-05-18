import { Link } from "react-router-dom";
import TeacherSidebar from "./TeacherSidebar";
// import { Form, Input, Button, Space, message } from "antd";
import Operation from "antd/es/transfer/operation";
import AddToQueueIcon from "@mui/icons-material/AddToQueue";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import Axios from "axios";
import { serverString } from "../../utils/config";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Button } from "@mui/material";

function AddVideos() {
  const navigate = useNavigate();
  const [videoBoxOpen, setVideoBoxOpen] = useState(false);
  const [videoArr, setVideoArr] = useState([]);
  const [videoTitle,setVideoTitle]=useState("")
  const [videoVideo,setVideoVideo]=useState("")

  const courseVideoUpload = (values) => {
    console.log(values.videos[0].video_file, "video..");
    const valueArr = values.videos;
    const videoValueArr = [];
    valueArr.forEach((element) => {
      let videoVal = element.video_file;
      const data = new FormData();
      data.append("file", videoVal);
      data.append("upload_preset", "insta-post");
      data.append("cloud_name", "dpucwezsk");
      Axios.post(
        "https://api.cloudinary.com/v1_1/dpucwezsk/video/upload",
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      )
        .then((res) => {
          if (res.data) {
            videoValueArr.push(...videoValueArr, {
              video_file: res.data.url,
              video_title: element.video_title,
            });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    });
    console.log(JSON.stringify(videoValueArr), "khdfjdkshkhdsk");
    // if (videoValueArr.length > 0) {
    //   const course_id = localStorage.getItem("course_thumb");
    //   if (course_id) {
    //     Axios.post(`${serverString}/course_videos/upload`, {
    //       course_id,
    //       course_videos: videoValueArr,
    //     },
    //     {
    //         headers: {
    //             "Content-Type": "application/json"
    //         },
    //     }
    //     )
    //       .then((res) => {
    //         if (res.data) {
    //         //   localStorage.removeItem("course_thumb");
    //         //   navigate("/add-courses");
    //         //   window.location.reload();
    //         }
    //       })
    //       .catch((err) => {
    //         console.log(err, "in video upload");
    //       });
    //   }
    // }
  };

  const openVideoBox = () => {
    setVideoBoxOpen(true);
  };

  const tempSaveVideo = () => {
    if(videoTitle && videoVideo){
        const newTempsave=[...videoArr]
        newTempsave.push({
            video_title:videoTitle,
            video_file:videoVideo
        })
        setVideoArr(newTempsave)
        setVideoTitle("")
        setVideoVideo("")
        setVideoBoxOpen(false);
    }
   console.log(videoArr);
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <aside className="col-md-3">
          <TeacherSidebar />
        </aside>
        <div className="col-8">
          <div className="card">
            <h5 className="card-header">Add Videos</h5>
            <div className="card-body">
              <div className="d-flex flex-column align-items-center">
                {
                   videoArr.length > 0 && videoArr.map((videoVal,index)=>(
                       
                        <div className="d-flex flex-column align-itmes-center" key={index}>
                              <div className="d-flex">
                                  Title :<span className="">&nbsp;{videoVal.video_title}</span>
                              </div>
                              <div className="d-flex">
                                  Video : <span className="">&nbsp;{videoVal.video_file.name}</span>
                              </div>
                        </div>
                   ))
                }
                {videoBoxOpen && (
                  <div className="d-flex justify-content-around w-100 align-items-center mb-5">
                    <div className="mb-3">
                      <label for="title" className="form-label">
                        Video title
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Title"
                        value={videoTitle}
                        onChange={(e)=>setVideoTitle(e.target.value)}
                      />
                    </div>
                    <div className="mb-3">
                      <label for="title" className="form-label">
                        Upload Video
                      </label>
                      <input
                        type="file"
                        accept="video/*"
                        name="video"
                        className="form-control"
                        onChange={(e)=>setVideoVideo(e.target.files[0])}
                      />
                    </div>
                    <div
                      className="btn btn-light btn-outline-success btn-lg"
                      onClick={tempSaveVideo}
                    >
                      save
                    </div>
                  </div>
                )}
                <button
                  className="btn btn-light btn-outline-primary btn-lg w-50 h-100 mb-3"
                  onClick={openVideoBox}
                >
                  <span>
                    Click here to Add Videos <AddToQueueIcon />
                  </span>
                </button>

                <button
                  className="btn btn-primary w-25 h-100"
                  onClick={courseVideoUpload}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddVideos;
import { Link } from "react-router-dom";
import TeacherSidebar from "./TeacherSidebar";
import { Form, Input, Button, Space, message } from "antd";
import Operation from "antd/es/transfer/operation";
import AddToQueueIcon from "@mui/icons-material/AddToQueue";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import Axios from "axios";
import { serverString } from "../../utils/config";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function AddVideos() {
  const navigate = useNavigate();
  const courseVideoUpload = (values) => {
    console.log(values.videos[0].video_file,"video..");
    const valueArr = values.videos;
    const videoValueArr = [];
    valueArr.forEach((element) => {
      let videoVal = element.video_file;
      const data = new FormData();
      data.append("file", videoVal);
      data.append("upload_preset", "insta-post");
      data.append("cloud_name", "dpucwezsk");
      Axios.post("https://api.cloudinary.com/v1_1/dpucwezsk/video/upload", data,
      {
        headers: {
             "Content-Type": "multipart/form-data"
         },
      })
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
    console.log(JSON.stringify(videoValueArr),"khdfjdkshkhdsk");
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
              <Form className="text-center" onFinish={courseVideoUpload}>
                <Form.List name="videos">
                  {(fields, { add, remove }) => (
                    <>
                      {fields.map((field, index) => {
                        return (
                          <Space direction="horizontal" size="large">
                            <Form.Item
                              key={field.key}
                              name={[field.name, "video_title"]}
                              label={`Video:${index + 1}`}
                            >
                              <Input
                                className="w-100"
                                placeholder="Video Title"
                              />
                            </Form.Item>

                            <Form.Item
                              key={field.key}
                              name={[field.name, "video_file"]}
                            >
                              <Input className="w-100" type="file" accept="video/*" />
                            </Form.Item>

                            <Button
                              className="btn btn-sm"
                              onClick={() => {
                                remove(field.name);
                              }}
                            >
                              <HighlightOffIcon />
                            </Button>
                          </Space>
                        );
                      })}

                      <Form.Item>
                        <Button
                          className="btn btn-light btn-outline-primary btn-lg w-50 h-100"
                          block
                          onClick={() => {
                            add();
                          }}
                        >
                          <span>
                            Click to Add <AddToQueueIcon />
                          </span>
                        </Button>
                      </Form.Item>
                    </>
                  )}
                </Form.List>

                <Button
                  className="btn btn-primary w-25 h-100"
                  htmlType="submit"
                  type="primary"
                >
                  Submit
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddVideos;

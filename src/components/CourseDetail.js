import { Fragment, useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import Reviews from "./Reviews";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import StarIcon from "@mui/icons-material/Star";
import Controls from "./Controls";
import ReactPlayer from "react-player";
import screenful from "screenfull";
import Axios from "axios";
import { serverString } from "../utils/config";
import { Button } from "@mui/material";
import test1 from "../assets/test1.pdf";
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOfflineOutlined';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import laodingIcon from "../assets/loadingIcon.png";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  // height: '80%',
  // width: '80%',
  // backgroundColor: 'red',
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

const format = (seconds) => {
  if (isNaN(seconds)) {
    return `00:00`;
  }
  const date = new Date(seconds * 1000);
  const hh = date.getUTCHours();
  const mm = date.getUTCMinutes();
  const ss = date.getUTCSeconds().toString().padStart(2, "0");
  if (hh) {
    return `${hh}:${mm.toString().padStart(2, "0")}:${ss}`;
  }
  return `${mm}:${ss}`;
};

let count = 0;

function calculateAverageRating(data) {
  const totalRatings = data?.length;
  const sumOfRatings = data.reduce((acc, item) => acc + item.student_rating, 0);
  const averageRating = totalRatings > 0 ? sumOfRatings / totalRatings : 0;
  const roundedAverageRating = Math.ceil(averageRating);

  return roundedAverageRating;
}

function CourseDetail({ studentToken }) {
  let { course_id } = useParams();
  const [openModel, setOpenModel] = useState(false);
  const [oneCourseValues, setOneCourseValues] = useState();
  const [courseVideos, setCourseVideos] = useState([]);
  const controlsRef = useRef(null);
  const playerContainerRef = useRef(null);
  const playerRef = useRef(null);
  const [timeDisplayFormat, setTimeDisplayFormat] = useState("normal");
  const [studentEnrolled, setStudentEnrolled] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  const [state, setState] = useState({
    pip: false,
    playing: false,
    controls: false,
    light: false,
    muted: true,
    played: 0,
    duration: 0,
    // playbackRate: 1.0,
    volume: 1,
    loop: false,
    seeking: false,
  });

  const {
    playing,
    // controls,
    light,
    muted,
    loop,
    // playbackRate,
    pip,
    played,
    // seeking,
    volume,
  } = state;

  const openModelHandle = () => {
    setOpenModel(true);
  };
  const closeModelHandle = () => {
    setOpenModel(false);
  };

  const handleMouseMove = () => {
    controlsRef.current.style.visibility = "visible";
    count = 0;
  };

  const hanldeMouseLeave = () => {
    controlsRef.current.style.visibility = "hidden";
    count = 0;
  };

  const handleProgress = (changeState) => {
    if (count > 3) {
      controlsRef.current.style.visibility = "hidden";
      count = 0;
    }
    if (controlsRef.current.style.visibility === "visible") {
      count += 1;
    }
    if (!state.seeking) {
      setState({ ...state, ...changeState });
    }
  };

  const handleSeekChange = (e, newValue) => {
    setState({ ...state, played: parseFloat(newValue / 100) });
  };

  const handleSeekMouseDown = (e) => {
    setState({ ...state, seeking: true });
  };

  const handleSeekMouseUp = (e, newValue) => {
    setState({ ...state, seeking: false });
    playerRef.current.seekTo(newValue / 100, "fraction");
  };

  const handleDuration = (duration) => {
    setState({ ...state, duration });
  };

  const handleVolumeSeekDown = (e, newValue) => {
    setState({ ...state, seeking: false, volume: parseFloat(newValue / 100) });
  };
  const handleVolumeChange = (e, newValue) => {
    setState({
      ...state,
      volume: parseFloat(newValue / 100),
      muted: newValue === 0 ? true : false,
    });
  };

  const handlePlayPause = () => {
    setState({ ...state, playing: !state.playing });
  };

  const handleRewind = () => {
    playerRef.current.seekTo(playerRef.current.getCurrentTime() - 10);
  };

  const handleFastForward = () => {
    playerRef.current.seekTo(playerRef.current.getCurrentTime() + 10);
  };

  const hanldeMute = () => {
    setState({ ...state, muted: !state.muted });
  };

  const currentTime =
    playerRef && playerRef.current
      ? playerRef.current.getCurrentTime()
      : "00:00";

  const duration =
    playerRef && playerRef.current ? playerRef.current.getDuration() : "00:00";
  const elapsedTime =
    timeDisplayFormat === "normal"
      ? format(currentTime)
      : `-${format(duration - currentTime)}`;

  const totalDuration = format(duration);

  const handleDisplayFormat = () => {
    setTimeDisplayFormat(
      timeDisplayFormat === "normal" ? "remaining" : "normal"
    );
  };

  const toggleFullScreen = () => {
    screenful?.toggle(playerContainerRef?.current);
  };

  useEffect(() => {
    Axios.get(`${serverString}/getOneCourseDetail?course_id=${course_id}`)
      .then((res) => {
        if (res.data) {
          setOneCourseValues(res.data.data);
          Axios.get(`${serverString}/getOneCourseVideos?course_id=${course_id}`)
            .then((response) => {
              if (response.data) {
                setCourseVideos(response.data.data);
              }
            })
            .catch((error) => {
              toast.error("error in fetching videos",{position:"top-center",theme:"colored"});

            });
        }
      })
      .catch((err) => {
        toast.error("error while fetching one course",{position:"top-center",theme:"colored"});
      });
    Axios.get(
      `${serverString}/studentEnrolledStatus?course_id=${course_id}&student_id=${studentToken?.student_id}`
    )
      .then((res) => {
        if (res.data.enrolled) {
          setStudentEnrolled(true);
        }
      })
      .catch((err) => {
        console.log("Error in getting enrollment status");
      });
  }, []);

  const EnrollStudent = () => {
    setIsLoading(true);
    Axios.post(
      `${serverString}/enrollOneStudent`,
      {
        course_id,
        student_id: studentToken?.student_id,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => {
        if (response) {
          toast.success(response?.data?.message,{position:"top-center",theme:"colored"});
          setStudentEnrolled(true);
        }
      })
      .catch((err) => {
        toast.error(err?.response?.data?.message,{position:"top-center",theme:"colored"});
      })
      .finally(() => {
        setIsLoading(false);
      }
      );
  };

  const averageRating = oneCourseValues ? calculateAverageRating(oneCourseValues?.course_review_rating) : 0;


  return (
    <Fragment>
      <div className="container mt-3">
        {oneCourseValues ? (
          <div className="row">
            <div className="col-4">
              <img
                src={
                  oneCourseValues.course_thumbnail
                    ? oneCourseValues.course_thumbnail
                    : "/logo512.png"
                }
                className="img-thumbnail"
                alt="Course thumbnail"
              />
            </div>

            <div className="col-8">
              <h3> {oneCourseValues?.course_title} </h3>
              <p>{oneCourseValues?.course_description}</p>

              <p className="fw-bold">
                Course By: &nbsp;
                <Link
                  to={`/teacher-detail/${oneCourseValues.course_teacher_id}`}
                >
                  {oneCourseValues.course_teacher_name
                    ? oneCourseValues.course_teacher_name
                    : "Teacher Name"}
                </Link>
              </p>
              <p className="fw-bold">
                Duration:{" "}
                {oneCourseValues.course_duration
                  ? oneCourseValues.course_duration
                  : "Not mentioned"}
              </p>
              <p className="fw-bold">
                Total Enrolled:{" "}
                {oneCourseValues.course_student_inrolled
                  ? oneCourseValues.course_student_inrolled.length
                  : "0"}
              </p>
              <p className="fw-bold">Rating: {averageRating}/5</p>
              {studentToken &&
                (studentEnrolled ? (
                  <Button variant="contained" color="secondary">
                    Enrolled
            
                  </Button>
                ) : (
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => {EnrollStudent()}}
                    disabled={isLoading}
                  >     
                  {
                    isLoading ? 
                      <div>
                      <img
                        src={laodingIcon}
                        style={{ width: "25px", height: "25px" }}
                      />{" "}
                      Enrolling you....
                    </div>:
                    "Enroll Now"
                  }                                       
                    
                  </Button>
                ))}
                <ToastContainer/>
            </div>
          </div>
        ) : (
          <div className="row">
            <div className="col-4">
              <img
                src="/logo512.png"
                className="img-thumbnail"
                alt="Course thumbnail"
              />
            </div>

            <div className="col-8">
              <h3> kjzbjfvdsj dbsjkjfdsv </h3>
              <p>
                kjdzhfjdzhkczkjxjckzx nxzcbvdsjcv xcm kzxmnckvndsknvks dj
                vdjnvbdsjbv
              </p>

              <p className="fw-bold">
                Course By: &nbsp;
                <Link to={`/teacher-detail`}>
                  {" "}
                  kjshadsa kjsadhidsf
                  {/* {oneCourseValues.course_teacher_name
                    ? oneCourseValues.course_teacher_name
                    : "Teacher Name"} */}
                </Link>
              </p>
              <p className="fw-bold">
                Duration: niorgdf
                {/* {oneCourseValues.course_duration
                  ? oneCourseValues.course_duration
                  : "Not mentioned"} */}
              </p>
              <p className="fw-bold">
                Total Enrolled: 0
                {/* {oneCourseValues.course_student_inrolled
                  ? oneCourseValues.course_student_inrolled.length
                  : "0"} */}
              </p>
              {/* <p className="fw-bold">Rating: 4.5/5</p> */}
            </div>
          </div>
        )}

        {/*Course Videos*/}

        <div className="card mt-4">
          <h5 className="card-header">Course Videos</h5>
          <ul className="list-group list-group-flush">
            {courseVideos.length ? (
              courseVideos?.map((video, index) => (
                <li className="list-group-item" key={index}>
                  {video.video_title}
                  <a href={test1} download className="btn btn-sm btn-rounded btn-info mx-2 float-end">
                   Resource <i><DownloadForOfflineIcon/></i>
                 </a>

                  <button
                    className="btn btn-sm btn-secondary btn-rounded float-end"
                    onClick={() => {
                      openModelHandle();
                    }}
                  >
                    Play <i><PlayCircleIcon/></i>
                  </button>
                  <BootstrapDialog
                    //  fullWidth={true}
                    maxWidth="lg"
                    // fullScreen={true}
                    // onClose={closeModelHandle}
                    aria-labelledby="customized-dialog-title"
                    open={openModel}
                    fullScreen={true}
                  >
                    <BootstrapDialogTitle
                      id="customized-dialog-title"
                      onClose={closeModelHandle}
                    >
                      {video.video_title}
                    </BootstrapDialogTitle>
                    <DialogContent
                      dividers
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <div style={{ height: "850px", minWidth: "1400px" }}>
                        <div
                          onMouseMove={handleMouseMove}
                          onMouseLeave={hanldeMouseLeave}
                          ref={playerContainerRef}
                          className="playerWrapper"
                        >
                          <ReactPlayer
                            ref={playerRef}
                            width="100%"
                            height="100%"
                            // url="https://youtu.be/Dli3czfNvlo"  "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
                            url={video.video_file}
                            pip={pip}
                            playing={playing}
                            controls={false}
                            light={light}
                            loop={loop}
                            // playbackRate={playbackRate}
                            volume={volume}
                            muted={muted}
                            onProgress={handleProgress}
                            config={{
                              file: {
                                attributes: {
                                  crossorigin: "anonymous",
                                },
                              },
                            }}
                          />

                          <Controls
                            ref={controlsRef}
                            onSeek={handleSeekChange}
                            onSeekMouseDown={handleSeekMouseDown}
                            onSeekMouseUp={handleSeekMouseUp}
                            onDuration={handleDuration}
                            onRewind={handleRewind}
                            onPlayPause={handlePlayPause}
                            onFastForward={handleFastForward}
                            playing={playing}
                            played={played}
                            elapsedTime={elapsedTime}
                            totalDuration={totalDuration}
                            onMute={hanldeMute}
                            muted={muted}
                            onVolumeChange={handleVolumeChange}
                            onVolumeSeekDown={handleVolumeSeekDown}
                            onChangeDispayFormat={handleDisplayFormat}
                            // playbackRate={playbackRate}
                            // onPlaybackRateChange={handlePlaybackRate}
                            onToggleFullScreen={toggleFullScreen}
                            volume={volume}
                          />
                        </div>
                      </div>
                    </DialogContent>
                  </BootstrapDialog>
                </li>
              ))
            ) : (
              <div>videos loading.........</div>
            )}
          </ul>
        </div>

        {/* <h3 className="pb-1 mb-4 mt-5">Related Courses</h3>
        <div className="row mb-4">
          <div className="col-md-3">
            <div className="card">
              <Link to="/detail/1">
                <img src="/logo512.png" className="card-img-top" alt="..." />
              </Link>
              <div className="card-body">
                <h5 className="card-title">
                  <Link to="/detail/1"> Course title</Link>
                </h5>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card">
              <a href="#">
                <img src="/logo512.png" className="card-img-top" alt="..." />
              </a>
              <div className="card-body">
                <h5 className="card-title">
                  <a href="#"> Course title</a>
                </h5>
              </div>
            </div>
          </div>
        </div> */}
      </div>

      <div className="container shadow card mt-5" style={{ width: "80rem" }}>
        <div className="card-body mb-3">
          <h5 className="card-title">
            Rating and Reviews{" "}
            <div
              style={{ float: "right", display: "flex", alignItems: "center" }}
            >
              <span style={{ marginRight: "20px" }}>Total Reviews:135</span>
              <Link to={`/addReviews/${course_id}`}>
                <Button variant="contained" color="secondary">
                  Add Review
                </Button>
              </Link>
            </div>
          </h5>
          <hr />
          <br />
          Rated {averageRating} out of 5
          <p className="card-text">
            <div className="mt-2">
              <i>
                <StarIcon />
              </i>
              <i>
                <StarIcon />
              </i>
              <i>
                <StarIcon />
              </i>
              <i>
                <StarIcon />
              </i>
              <i>
                <StarIcon />
              </i>
              <div className="progress mt-2" style={{ width: "80%" }}>
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: "100%" }}
                  aria-valuenow={100}
                  aria-valuemin={0}
                  aria-valuemax={100}
                />
              </div>
            </div>

            <div className="mt-2">
              <i>
                <StarIcon />
              </i>
              <i>
                <StarIcon />
              </i>
              <i>
                <StarIcon />
              </i>
              <i>
                <StarIcon />
              </i>

              <div className="progress mt-2" style={{ width: "80%" }}>
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: "75%" }}
                  aria-valuenow={100}
                  aria-valuemin={0}
                  aria-valuemax={100}
                />
              </div>
            </div>

            <div className="mt-2">
              <i>
                <StarIcon />
              </i>
              <i>
                <StarIcon />
              </i>
              <i>
                <StarIcon />
              </i>

              <div className="progress mt-2" style={{ width: "80%" }}>
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: "60%" }}
                  aria-valuenow={100}
                  aria-valuemin={0}
                  aria-valuemax={100}
                />
              </div>
            </div>

            <div className="mt-2">
              <i>
                <StarIcon />
              </i>
              <i>
                <StarIcon />
              </i>

              <div className="progress mt-2" style={{ width: "80%" }}>
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: "30%" }}
                  aria-valuenow={100}
                  aria-valuemin={0}
                  aria-valuemax={100}
                />
              </div>
            </div>

            <div className="mt-2">
              <i>
                <StarIcon />
              </i>

              <div className="progress mt-2" style={{ width: "80%" }}>
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: "10%" }}
                  aria-valuenow={100}
                  aria-valuemin={0}
                  aria-valuemax={100}
                />
              </div>
            </div>
          </p>
        </div>

        {oneCourseValues?.course_review_rating?.map((review, index) => (
          <Reviews review={review} key={index} />
        ))}

        {/* <Reviews  />
        <Reviews />
        <Reviews /> */}
      </div>
    </Fragment>
  );
}

export default CourseDetail;

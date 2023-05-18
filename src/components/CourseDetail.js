import { Fragment, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Controls from "./Controls";
import ReactPlayer from "react-player";
import screenful from "screenfull";

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

function CourseDetail() {
  let { course_id } = useParams();
  const [openModel, setOpenModel] = useState(false);
  const controlsRef = useRef(null);
  const playerContainerRef = useRef(null);
  const playerRef = useRef(null);
  const [timeDisplayFormat, setTimeDisplayFormat] = useState("normal");
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

  return (
    <Fragment>
      <div className="container mt-3">
        <div className="row">
          <div className="col-4">
            <img
              src="/logo512.png"
              className="img-thumbnail"
              alt="Course thumbnail"
            />
          </div>

          <div className="col-8">
            <h3> Course Title </h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>

            <p className="fw-bold">
              Course By:<Link to="/teacher-detail/1">Teacher</Link>
            </p>
            <p className="fw-bold">Duration: 3 Hours 45 Minutes</p>
            <p className="fw-bold">Total Enrolled: 456 Students</p>
            <p className="fw-bold">Rating: 4.5/5</p>
          </div>
        </div>

        {/*Course Videos*/}

        <div className="card mt-4">
          <h5 className="card-header">Course Videos</h5>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              Introduction
              <button
                className="btn btn-sm btn-secondary float-end"
                //   data-bs-toggle="modal"
                //   data-bs-target="#exampleModal"
                onClick={() => {
                  openModelHandle();
                }}
              >
                Play
              </button>
            </li>
            <li className="list-group-item">
              Set up Project
              <button className="btn btn-sm btn-secondary float-end">
                Play
              </button>
            </li>
            <li className="list-group-item">
              Start with functional components
              <button className="btn btn-sm btn-secondary float-end">
                Play
              </button>
            </li>
            <li className="list-group-item">
              Introduction
              <button className="btn btn-sm btn-secondary float-end">
                Play
              </button>
            </li>
            <li className="list-group-item">
              Set up Project
              <button className="btn btn-sm btn-secondary float-end">
                Play
              </button>
            </li>
            <li className="list-group-item">
              Start with functional components
              <button className="btn btn-sm btn-secondary float-end">
                Play
              </button>
            </li>
          </ul>
        </div>

        <h3 className="pb-1 mb-4 mt-5">Related Courses</h3>
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
        </div>
      </div>

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
          Modal title
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
                // url="https://youtu.be/Dli3czfNvlo"
                url="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
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
    </Fragment>
  );
}

export default CourseDetail;

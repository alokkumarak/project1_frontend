import React, { forwardRef, useState } from "react";
import "../css/post.css";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import Slider from "@mui/material/Slider";
import Tooltip from "@mui/material/Tooltip";
import FastRewindIcon from "@mui/icons-material/FastRewind";
import FastForwardIcon from "@mui/icons-material/FastForward";
import VolumeDownIcon from "@mui/icons-material/VolumeDown";
import VolumeMuteIcon from "@mui/icons-material/VolumeMute";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import PauseIcon from "@mui/icons-material/Pause";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import ZoomInMapIcon from "@mui/icons-material/ZoomInMap";
import CropFreeIcon from "@mui/icons-material/CropFree";


const PrettoSlider = styled(Slider)(({ theme }) => ({
  root: {
    height: 8,
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: "#fff",
    border: "2px solid currentColor",
    marginTop: -8,
    marginLeft: -12,
    "&:focus, &:hover, &$active": {
      boxShadow: "inherit",
    },
  },
  active: {},
  valueLabel: {
    left: "calc(-50% + 4px)",
  },
  track: {
    height: 8,
    borderRadius: 4,
  },
  rail: {
    height: 8,
    borderRadius: 4,
  },
}));

function ValueLabelComponent(props) {
  const { children, open, value } = props;

  return (
    <Tooltip open={open} enterTouchDelay={0} placement="top" title={value}>
      {children}
    </Tooltip>
  );
}

const Controls = forwardRef(
  (
    {
      onSeek,
      onSeekMouseDown,
      onSeekMouseUp,
      onDuration,
      onRewind,
      onPlayPause,
      onFastForward,
      playing,
      played,
      elapsedTime,
      totalDuration,
      onMute,
      muted,
      onVolumeSeekDown,
      onChangeDispayFormat,
      // playbackRate,
      // onPlaybackRateChange,
      onToggleFullScreen,
      volume,
      onVolumeChange,
    },
    ref
  ) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [fullScr, setFullScr] = useState(true);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
      setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    // const id = open ? "simple-popover" : undefined;

    return (
      <div ref={ref} className="controlsWrapper">
        <div className="fullScreen_controls">
          <div className="screen_controlTop"></div>

          <div className="screen_controlsMiddle">
            <IconButton
              onClick={onRewind}
              className="controlIcons"
              aria-label="rewind"
              style={{ marginRight: "20px" }}
            >
              <FastRewindIcon />
            </IconButton>
            <IconButton
              onClick={onPlayPause}
              className="controlIcons"
              aria-label="play"
            >
              {playing ? <PauseIcon /> : <PlayArrowIcon />}
            </IconButton>
            <IconButton
              onClick={onFastForward}
              className="controlIcons"
              aria-label="forward"
              style={{ marginLeft: "20px" }}
            >
              <FastForwardIcon />
            </IconButton>
          </div>

          <div className="screen_controlBottom">
            <div className="control_progress">
              <PrettoSlider
                min={0}
                max={100}
                ValueLabelComponent={(props) => (
                  <ValueLabelComponent {...props} value={elapsedTime} />
                )}
                aria-label="custom thumb label"
                value={played * 100}
                onChange={onSeek}
                onMouseDown={onSeekMouseDown}
                onChangeCommitted={onSeekMouseUp}
                onDuration={onDuration}
              />
            </div>

            <div className="controls_bottomBottom">
              <div
                className="controlls_bottomLeft"
                container
                alignItems="center"
              >
                <div className="controls_bottomL">
                  <div onClick={onPlayPause} className="bottomIcons">
                    {playing ? <PauseIcon /> : <PlayArrowIcon />}
                  </div>

                  <div
                    // onClick={() => setState({ ...state, muted: !state.muted })}
                    onClick={onMute}
                    className="bottomIcons"
                  >
                    {muted ? (
                      // <VolumeMute fontSize="large" />
                      <VolumeOffIcon />
                    ) : volume > 0.7 ? (
                      <VolumeUpIcon />
                    ) : volume > 0.4 ? (
                      <VolumeDownIcon />
                    ) : (
                      <VolumeMuteIcon />
                    )}
                  </div>
                </div>
                <Slider
                  min={0}
                  max={100}
                  value={muted ? 0 : volume * 100}
                  onChange={onVolumeChange}
                  aria-labelledby="input-slider"
                  className="volumeSlider"
                  onMouseDown={onSeekMouseDown}
                  onChangeCommitted={onVolumeSeekDown}
                />
                <button
                  className="controll_button"
                  onClick={onChangeDispayFormat}
                >
                  <div className="timimggg">
                    {elapsedTime}/{totalDuration}
                  </div>
                </button>
              </div>

              {/* full screen */}
              <div item>
                <IconButton
                  onClick={onToggleFullScreen}
                  className="bottomIcons"
                >
                  {fullScr ? (
                    <CropFreeIcon onClick={() => setFullScr(false)} />
                  ) : (
                    <ZoomInMapIcon onClick={() => setFullScr(true)} />
                  )}
                </IconButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
);

Controls.propTypes = {
  onSeek: PropTypes.func,
  onSeekMouseDown: PropTypes.func,
  onSeekMouseUp: PropTypes.func,
  onDuration: PropTypes.func,
  onRewind: PropTypes.func,
  onPlayPause: PropTypes.func,
  onFastForward: PropTypes.func,
  onVolumeSeekDown: PropTypes.func,
  onChangeDispayFormat: PropTypes.func,
  // onPlaybackRateChange: PropTypes.func,
  onToggleFullScreen: PropTypes.func,
  onMute: PropTypes.func,
  playing: PropTypes.bool,
  played: PropTypes.number,
  elapsedTime: PropTypes.string,
  totalDuration: PropTypes.string,
  muted: PropTypes.bool,
  // playbackRate: PropTypes.number,
};
export default Controls;

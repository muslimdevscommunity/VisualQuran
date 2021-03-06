import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import PauseIcon from "@material-ui/icons/Pause";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import Grid from "@material-ui/core/Grid";

import Modal from "../UI/Modal/Modal";
import Gallery from "../Gallery/Gallery";
import Dialog from "../UI/Dialog/Dialog";
import CheckBox from "../UI/CheckBox/CheckBox";
import Select from "../Select/Select";
import * as SelectTypes from "./SelectTypes";
import Recitations from "../Gallery/Recitations";

const useStyles = makeStyles((theme) => ({
  card: {
    display: "flex"
  },
  details: {
    display: "flex",
    flexDirection: "column"
  },
  row: {
    display: "flex",
    alignItems: "center"
  },
  cover: {
    width: 200
  },
  controls: {
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    justifyContent: "center",
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    color: "white",
    height: 48,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)"
  },
  playIcon: {
    height: 38,
    color: "white",
    width: 38
  },
  checkBox: {
    display: "flex",
    alignItems: "center"
  },
  justifyContentCenter: {
    justifyContent: "center"
  }
}));

interface ControllerProps {
  translations: any;
  recitations: any;
  chapters: any;
}

export default function MediaControlCard(props: any) {
  const classes = useStyles();

  const {
    onChangeBackground,
    onChangeSettings,
    onPlay,
    isPlaying,
    current,
    chapters,
    recitations,
    translations
  } = props;

  return (
    <Card className={classes.card}>
      <div className={classes.details}>
        <div>
          <CardContent>
            <Grid container spacing={3}>
              <Grid item>
                <Typography gutterBottom variant='subtitle1'>
                  Chapter
                </Typography>
                <Select
                  defaultValue={current.chapterId}
                  list={chapters}
                  changed={onChangeSettings}
                  type={SelectTypes.CHAPTER}
                ></Select>
              </Grid>
              <Grid item>
                <Typography gutterBottom variant='subtitle1'>
                  Recitators
                </Typography>
                <Dialog title='Reciters' name={"Select A Reciter"}>
                  {" "}
                  <Recitations list={recitations} changed={onChangeSettings} />
                </Dialog>
              </Grid>
              <Grid item>
                <Typography gutterBottom variant='subtitle1'>
                  Translations
                </Typography>
                <Select
                  defaultValue={current.translationId}
                  list={translations}
                  changed={onChangeSettings}
                  type={SelectTypes.TRANSLATION}
                ></Select>
              </Grid>
            </Grid>
            <Grid container spacing={3}>
              <Grid item xs={4}></Grid>
              <Grid item xs={4}>
                <CheckBox
                  // currentCheck={props.currentCheck}
                  onRepeat={props.onRepeat}
                ></CheckBox>
              </Grid>
              <Grid item xs={4}></Grid>
            </Grid>
          </CardContent>

          <div className={classes.controls}>
            <IconButton onClick={onPlay} aria-label='play/pause'>
              {isPlaying ? (
                <PauseIcon className={classes.playIcon} />
              ) : (
                <PlayArrowIcon className={classes.playIcon} />
              )}
            </IconButton>
          </div>
        </div>
      </div>
      <CardMedia
        className={classes.cover}
        image={props.imgURL}
        title='Surah Kahf'
      >
        <Modal>
          <Gallery onChangeBackground={onChangeBackground} />
        </Modal>
      </CardMedia>
    </Card>
  );
}

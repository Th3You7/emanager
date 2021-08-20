import React from "react";
import { Avatar, Typography, Paper, IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { EditRounded } from "@material-ui/icons";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "95%",
    background: theme.palette.background.paper,
    borderRadius: "2px",
    height: "35vh",
    margin: theme.spacing(0, "auto", 1.5),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },

  media: {
    height: theme.spacing(20),
    width: theme.spacing(20),
    marginBottom: theme.spacing(3),
  },

  title: {
    lineHeight: ".8",
  },

  edit: {
    position: "absolute",
    right: 0,
    top: 0,
  },

  cover: {
    width: "100%",
    height: "63%",
    position: "absolute",
    top: 0,
    left: 0,
  },

  img: {
    height: "100%",
    width: "100%",
  },
}));

export default function AdminProfile() {
  const classes = useStyles();
  const history = useHistory();
  const { result } = useSelector((state) => state.getProfileReducer);
  const handleClick = () => {
    history.push(`/admin/edit`);
  };

  return (
    <Paper variant="outlined" className={classes.root}>
      <div className={classes.cover}>
        <img
          className={classes.img}
          src={result?.img?.cover?.url}
          alt="cover img"
        />
      </div>
      <IconButton onClick={handleClick} className={classes.edit}>
        <EditRounded />
      </IconButton>
      <Avatar
        alt="admin logo"
        src={result?.img?.profile?.url}
        className={classes.media}
      />

      {result ? (
        <div className={classes.info}>
          <Typography
            variant="h4"
            component="h2"
            color="textPrimary"
            align="center"
            className={classes.title}
          >
            {result.storeName.replace(/\b\w/g, (l) => l.toUpperCase())}
          </Typography>
          <Typography
            variant="subtitle1"
            component="h6"
            color="textSecondary"
            align="center"
            className={classes.subtitle}
          >
            {result.name.replace(/\b\w/g, (l) => l.toUpperCase())}
          </Typography>
        </div>
      ) : (
        <p>loading</p>
      )}
    </Paper>
  );
}

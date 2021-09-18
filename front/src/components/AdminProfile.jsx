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
  },

  media: {
    position: "absolute",
    bottom: -10,
    left: "50%",
    transform: "translate(-50%, 0%)",
    height: theme.spacing(16),
    width: theme.spacing(16),
  },

  title: {
    lineHeight: ".8",
  },

  edit: {
    position: "absolute",
    right: 0,
    top: 0,
    background: "rgba(0,0,0,0.5)",
  },

  cover: {
    width: "100%",
    height: "63%",
    position: "relative",
    backgroundImage: (props) =>
      props?.result?.img?.cover?.url
        ? `url("${props.result?.img?.cover?.url}")`
        : "",
    backgroundColor: "white",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  },

  info: {
    marginTop: "20px",
  },
}));

export default function AdminProfile() {
  const { result } = useSelector((state) => state.getProfileReducer);
  const classes = useStyles({ result });
  const history = useHistory();
  const handleClick = () => {
    history.push(`/admin/edit`);
  };

  return (
    <Paper variant="outlined" className={classes.root}>
      <div className={classes.cover}>
        {/* <img
          className={classes.img}
          src={result?.img?.cover?.url}
          alt="cover img"
        /> */}
        <IconButton onClick={handleClick} className={classes.edit}>
          <EditRounded />
        </IconButton>
        <Avatar
          alt="admin logo"
          src={result?.img?.profile?.url}
          className={classes.media}
        />
      </div>

      {result ? (
        <div className={classes.info}>
          <Typography
            variant="h4"
            component="h2"
            color="textPrimary"
            align="center"
            className={classes.title}
          >
            {result?.storeName?.replace(/\b\w/g, (l) => l.toUpperCase())}
          </Typography>
          <Typography
            variant="subtitle1"
            component="h6"
            color="textSecondary"
            align="center"
            className={classes.subtitle}
          >
            {result?.name?.replace(/\b\w/g, (l) => l.toUpperCase())}
          </Typography>
        </div>
      ) : (
        <p>loading</p>
      )}
    </Paper>
  );
}

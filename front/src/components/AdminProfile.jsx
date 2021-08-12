import React from "react";
import { Avatar, Typography, Paper, IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { EditRounded } from "@material-ui/icons";
import { useHistory } from "react-router-dom";

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
    height: theme.spacing(11),
    width: theme.spacing(11),
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
}));

export default function AdminProfile({ data }) {
  const classes = useStyles();
  const history = useHistory();

  const handleClick = () => {
    history.push(`/admin/edit`);
  };

  return (
    <Paper variant="outlined" className={classes.root}>
      <IconButton onClick={handleClick} className={classes.edit}>
        <EditRounded />
      </IconButton>
      <Avatar alt="admin logo" className={classes.media} />

      {data ? (
        <div className={classes.info}>
          <Typography
            variant="h4"
            component="h2"
            color="textPrimary"
            align="center"
            className={classes.title}
          >
            {data.storeName}
          </Typography>
          <Typography
            variant="subtitle1"
            component="h6"
            color="textSecondary"
            align="center"
            className={classes.subtitle}
          >
            {data.name}
          </Typography>
        </div>
      ) : (
        <p>loading</p>
      )}
    </Paper>
  );
}

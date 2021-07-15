import React from "react";
import { Avatar, Typography, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

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
  },

  media: {
    height: theme.spacing(11),
    width: theme.spacing(11),
    marginBottom: theme.spacing(3),
  },

  title: {
    lineHeight: ".8",
  },
}));

export default function AdminProfile() {
  const classes = useStyles();

  return (
    <Paper variant="outlined" className={classes.root}>
      <Avatar alt="admin logo" className={classes.media} />

      <div className={classes.info}>
        <Typography
          variant="h4"
          component="h2"
          color="textPrimary"
          align="center"
          className={classes.title}
        >
          Jab Store
        </Typography>
        <Typography
          variant="subtitle1"
          component="h6"
          color="textSecondary"
          align="center"
          className={classes.subtitle}
        >
          Yusuf Jabri
        </Typography>
      </div>
    </Paper>
  );
}

import React, { useState } from "react";
import {
  Avatar,
  Typography,
  Paper,
  IconButton,
  Menu,
  MenuItem,
} from "@material-ui/core";
import { MoreVert } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "95%",
    background: theme.palette.background.paper,
    borderRadius: "2px",
    height: "35vh",
    margin: theme.spacing(0, "auto", 1.5),
    position: "relative",
  },

  media: {
    height: theme.spacing(9),
    width: theme.spacing(9),
    //marginBottom: theme.spacing(3),
    top: "-23%",
    left: "3%",
  },

  title: {
    lineHeight: ".5",
    fontWeight: 600,
    fontSize: theme.spacing(2.2),
  },

  cover: {
    width: "100%",
    height: theme.spacing(16),
    background: "#ebe4e4",
    position: "relative",
    top: 0,
  },
  info: {
    padding: theme.spacing(0, 2),
    marginTop: theme.spacing(-4),
  },

  menu: {
    textAlign: "right",
  },
}));

export default function AdminProfile({ name, givenName }) {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Paper variant="outlined" className={classes.root}>
      <div className={classes.cover}>
        <div className={classes.menu}>
          <IconButton
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleClick}
          >
            <MoreVert />
          </IconButton>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>Cover</MenuItem>
          </Menu>
        </div>
      </div>

      <Avatar alt="admin logo" className={classes.media} />
      <div className={classes.info}>
        <Typography
          variant="h5"
          component="h2"
          color="primary"
          className={classes.title}
        >
          {name}
        </Typography>
        <Typography
          variant="subtitle1"
          component="h6"
          color="textSecondary"
          className={classes.subtitle}
        >
          {givenName}
        </Typography>
      </div>
    </Paper>
  );
}

import React from "react";
import { Avatar, Typography, Paper, IconButton } from "@material-ui/core";
import { EditRounded, Phone } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory, useParams } from "react-router-dom";

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
    height: theme.spacing(10),
    width: theme.spacing(10),
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
    height: theme.spacing(18),
    background: "#ebe4e4",
    position: "relative",
    top: 0,
  },
  info: {
    padding: theme.spacing(0, 2),
    marginTop: theme.spacing(-4),
    display: "flex",
  },

  menu: {
    textAlign: "right",
    position: "absolute",
    left: 0,
    top: 0,
    width: "100%",
    zIndex: 100,
  },

  img: {
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 0,
    left: 0,
  },

  subtitle: {
    fontWeight: 700,
  },
}));

export default function AdminProfile({
  name,
  img,
  productsSum,
  paymentsSum,
  phone,
}) {
  const classes = useStyles();
  const history = useHistory();
  const { profileid } = useParams();

  const handleClick = () => {
    history.push(`/loan/${profileid}/edit`);
  };

  return (
    <Paper variant="outlined" className={classes.root}>
      <div className={classes.cover}>
        <div className={classes.menu}>
          <IconButton onClick={handleClick}>
            <EditRounded />
          </IconButton>
        </div>
        {img?.cover && (
          <img className={classes.img} src={img?.cover?.url} alt="cover" />
        )}
      </div>

      <Avatar
        alt="admin logo"
        className={classes.media}
        src={img?.profile?.url}
      />
      <div className={classes.info}>
        <div style={{ flex: "0 1 50%" }}>
          <Typography
            variant="h5"
            component="h2"
            color="textPrimary"
            className={classes.title}
          >
            {name && name.replace(/\b\w/g, (l) => l.toUpperCase())}
          </Typography>
          <Typography
            variant="subtitle1"
            component="h6"
            color="textSecondary"
            className={classes.subtitle}
          >
            {Number(productsSum - paymentsSum)} DH
          </Typography>
        </div>
        <div style={{ flex: "0 1 50%" }}>
          <Typography
            variant="subtitle1"
            component="h6"
            color="textSecondary"
            className={classes.subtitle}
            style={{ display: "flex" }}
          >
            <Phone
              style={{
                marginRight: "4px",
              }}
            />
            <span>{phone}</span>
          </Typography>
        </div>
      </div>
    </Paper>
  );
}

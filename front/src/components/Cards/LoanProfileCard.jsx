import React from "react";
import {
  CardContent,
  CardMedia,
  CardActionArea,
  Card,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    marginBottom: theme.spacing(0.5),
  },
  media: {
    width: theme.spacing(14),
  },
  flex: {
    display: "flex",
  },
  title: {
    fontWeight: 600,
  },
  loan: {
    color: theme.palette.text.secondary,
  },
}));

export default function LoanProfileCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image="/imgs/pic1.jpg"
        title="ahmed ahmed"
      />
      <CardActionArea component={Link} to="./loan/all">
        <CardContent>
          <Typography className={classes.title}>Ahmed Ahmed</Typography>
          <div className={classes.flex}>
            <Typography
              style={{ flex: "0 1 50%" }}
              variant="subtitle2"
              className={classes.items}
            >
              4 Items
            </Typography>
            <Typography variant="subtitle2" className={classes.loan}>
              300dh
            </Typography>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

import {
  Button,
  CircularProgress,
  IconButton,
  makeStyles,
  Snackbar,
  TextField,
  Typography,
} from "@material-ui/core";
import axios from "axios";
import { PhotoCameraOutlined, SaveOutlined } from "@material-ui/icons";
import { Alert } from "@material-ui/lab";
import React, { useCallback, useEffect, useState } from "react";
import { UpperAppBar } from "../components";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { loanProfileAddAction, loanReset } from "../actions/loanAction";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(0, 2),
  },

  input: {
    marginBottom: theme.spacing(3),
  },

  root: {
    width: "100%",
  },
  failed: {
    color: theme.palette.error["dark"],
    fontSize: theme.spacing(2.5),
    margin: theme.spacing(4, 0),
  },
  title: {
    marginBottom: theme.spacing(1.5),
    fontWeight: 700,
  },
}));

const schema = yup.object().shape({
  name: yup.string().required(), //required
  phone: yup.number().required(),
  // profile: yup
  // .mixed()
  //   .test(
  //     "fileFormat",
  //     "Unsupported Format",
  //     (value) =>
  //       value === null ||
  //       (value[0] && SUPPORTED_FORMATS.includes(value[0].type))
  //   ),
  // cover: yup
  //   .mixed()
  //   .test(
  //     "fileFormat",
  //     "Unsupported Format",
  //     (value) =>
  //       value === null ||
  //       (value[0] && SUPPORTED_FORMATS.includes(value[0].type))
  //   ),
  // .required("*Img is required")
  // .test(
  //   "fileSize",
  //   "File too large",
  //   (value) => value === null || (value[0] && value[0].size <= FILE_SIZE)
  // )
});

export default function LoanProfileAddScreen() {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();
  const [profile, setProfile] = useState("");
  const [cover, setCover] = useState("");
  const [load, setLoad] = useState(false);
  const [coverErr, setCoverErr] = useState("");
  const [profileErr, setProfileErr] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const { loading, result, error } = useSelector(
    (state) => state.loanProfileAddReducer
  );
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (result) {
      setOpen(true);
    }
  }, [setOpen, result]);

  console.log(location);

  useEffect(() => {
    if (result && location?.state?.fromConfirm) {
      const timeout = setTimeout(() => {
        dispatch(loanReset());
        history.goBack();
      }, 2000);

      return () => clearTimeout(timeout);
    }
  }, [dispatch, location, result, history]);

  const onSubmit = (data) => {
    let img = {};
    if (profile) {
      const { imageUrl, public_id } = profile;
      img.profile = { url: imageUrl, public_id };
    }

    if (cover) {
      const { imageUrl, public_id } = cover;

      img.cover = { url: imageUrl, public_id };
    }
    dispatch(
      loanProfileAddAction({
        ...data,
        img,
      })
    );
  };
  const handleClose = useCallback((event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  }, []);

  const handleProfileImageChange = async (e) => {
    setLoad(true);
    const img = e.target.files[0];
    const formData = new FormData();
    formData.append("loanProfile", img);
    if (profile) {
      formData.append("public_id", profile.public_id);
    }
    try {
      const { data } = await axios.post(
        "/api/loan/upload/addprofile",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      setProfile(data);
      setLoad(false);
      setProfileErr("");
    } catch (error) {
      setProfileErr(error.message);
      setLoad(false);
    }
  };

  const handleCoverImageChange = async (e) => {
    setLoad(true);
    const img = e.target.files[0];
    const formData = new FormData();
    formData.append("loanCover", img);
    if (cover) {
      formData.append("public_id", cover.public_id);
    }
    try {
      const { data } = await axios.post("/api/loan/upload/addcover", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setCover(data);
      setLoad(false);
      setCoverErr("");
    } catch (error) {
      setCoverErr(error.message);
      setLoad(false);
    }
  };

  const handleBack = () => {
    dispatch(loanReset());
    history.goBack();
  };

  return (
    <div className={classes.root}>
      <UpperAppBar handleBack={handleBack} />
      <div className={classes.container}>
        <Typography className={classes.title} component="h2" variant="h5">
          Add Loan Profile
        </Typography>
        <form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
          <TextField
            error={errors.name ? true : false}
            label="Name"
            name="name"
            fullWidth
            className={classes.input}
            margin="dense"
            InputLabelProps={{
              shrink: true,
            }}
            // variant="filled"
            inputRef={register}
            helperText={errors.name?.message}
          />

          <TextField
            error={errors.phone ? true : false}
            label="Phone Number"
            name="phone"
            fullWidth
            className={classes.input}
            margin="dense"
            InputLabelProps={{
              shrink: true,
            }}
            // variant="filled"
            inputRef={register}
            helperText={errors.phone?.message.slice(0, 30)}
          />

          {!load && !result && (
            <>
              <div>
                <input
                  name="profile"
                  accept="image/*"
                  className={classes.input}
                  id="icon-button-profile"
                  type="file"
                  style={{ display: "none" }}
                  ref={register}
                  onChange={handleProfileImageChange}
                />
                <label htmlFor="icon-button-profile">
                  Profile Image
                  <IconButton
                    color="inherit"
                    aria-label="upload picture"
                    component="span"
                  >
                    <PhotoCameraOutlined />
                  </IconButton>
                </label>
                {profile && (
                  <p style={{ marginTop: 0 }}>{profile.originalname}</p>
                )}
                {profileErr && (
                  <p style={{ color: "red", marginTop: 0 }}>{profileErr}</p>
                )}
              </div>
              <div>
                <input
                  name="cover"
                  accept="image/*"
                  className={classes.input}
                  id="icon-button-cover"
                  type="file"
                  style={{ display: "none" }}
                  ref={register}
                  onChange={handleCoverImageChange}
                />
                <label htmlFor="icon-button-cover">
                  Cover Image
                  <IconButton
                    color="inherit"
                    aria-label="upload picture"
                    component="span"
                  >
                    <PhotoCameraOutlined />
                  </IconButton>
                </label>
                {cover && <p style={{ marginTop: 0 }}>{cover.originalname}</p>}
                {coverErr && (
                  <p style={{ color: "red", marginTop: 0 }}>{profileErr}</p>
                )}
                <br />
              </div>
              {!result && !load && (
                <Button
                  variant="contained"
                  color="primary"
                  size="medium"
                  className={classes.button}
                  startIcon={<SaveOutlined />}
                  type="submit"
                  style={{ marginTop: "48px" }}
                >
                  Save
                </Button>
              )}
            </>
          )}
          {(loading || load) && <CircularProgress color="primary" />}
          <Snackbar open={open} onClose={handleClose}>
            <Alert onClose={handleClose} severity="success">
              Saved successfully!
            </Alert>
          </Snackbar>
          {error && (
            <Typography className={classes.failed}>
              Error has occured
            </Typography>
          )}
        </form>
      </div>
    </div>
  );
}

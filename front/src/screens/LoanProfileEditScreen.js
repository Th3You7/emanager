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
import { useHistory, useParams } from "react-router-dom";
import { loanProfileEditAction, loanReset } from "../actions/loanAction";

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

export default function LoanProfileEditScreen() {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();

  const { profileid } = useParams();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const {
    data: { name },
  } = useSelector((state) => state.loanProfileReducer);
  const { loading, result, error } = useSelector(
    (state) => state.loanProfileEditReducer
  );
  const [profileImg, setProfileImg] = useState("");
  const [coverImg, setCoverImg] = useState("");
  const [load, setLoad] = useState(false);
  const [coverErr, setCoverErr] = useState("");
  const [profileErr, setProfileErr] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (result) {
      setOpen(true);
    }
  }, [setOpen, result]);

  const onSubmit = (data) => {
    let img = {};
    if (profileImg) {
      const { imageUrl, public_id } = profileImg;
      img.profile = { url: imageUrl, public_id };
    }

    if (coverImg) {
      const { imageUrl, public_id } = coverImg;

      img.cover = { url: imageUrl, public_id };
    }
    dispatch(
      loanProfileEditAction(
        {
          ...data,
          img,
        },
        profileid
      )
    );
  };
  const handleClose = useCallback((event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  }, []);

  const url = `https://manage-commerce.herokuapp.com`;

  const handleProfileImageChange = async (e) => {
    setLoad(true);
    const img = e.target.files[0];
    const formData = new FormData();
    formData.append("profile", img);
    if (profileImg) {
      formData.append("public_id", profileImg.public_id);
    }
    try {
      const { data } = await axios.post(
        `${url}/api/loan/upload/addprofile`,
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      setProfileImg(data);
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
    formData.append("cover", img);
    try {
      const { data } = await axios.post(
        `${url}/api/loan/upload/addcover`,
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      setCoverImg(data);
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
          Edit Loan Profile
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
            defaultValue={name}
            helperText={errors.name?.message}
          />
          {!result && !load && (
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
                {profileImg && (
                  <p style={{ marginTop: 0 }}>{profileImg.originalname}</p>
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
                {coverImg && (
                  <p style={{ marginTop: 0 }}>{coverImg.originalname}</p>
                )}
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
              Edited successfully!
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

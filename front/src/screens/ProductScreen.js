import React, { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { UpperAppBar } from "../components";
import {
  Fab,
  Typography,
  TextField,
  makeStyles,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormControl,
  FormHelperText,
  FormLabel,
  CircularProgress,
} from "@material-ui/core";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { productDetailsAction } from "../actions/productsAction";
import { addToCartAction } from "../actions/cartAction";

const useStyles = makeStyles((theme) => ({
  root: { width: "100%", position: "relative", height: "100vh" },
  img: {
    width: "100%",
    height: "52vh",
  },
  content: {
    padding: theme.spacing(2),
  },
  textField: {
    display: "block",
    marginTop: theme.spacing(3),
  },
  fab: {
    width: "94%",
    left: "50%",
    transform: "translateX(-50%)",
    marginTop: theme.spacing(10),
    // position: "absolute",
    // bottom: 10,
  },
  price: {
    color: theme.palette.text.secondary,
  },

  p: {
    color: theme.palette.error["dark"],
  },
}));

const schema = yup.object().shape({
  size: yup.string().required(),
  soldPrice: yup.number().required(),
});

export default function Product() {
  const history = useHistory();
  const classes = useStyles();
  const { id } = useParams();
  const dispatch = useDispatch();
  const { fetching, error, product } = useSelector(
    (state) => state.productDetailsReducer
  );
  const { products } = useSelector((state) => state.cartReducer);
  const {
    control,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  useEffect(() => {
    dispatch(productDetailsAction(id));
  }, [id, dispatch]);

  const onSubmit = (data) => {
    const { size, soldPrice } = data;

    dispatch(addToCartAction({ ...product, size, soldPrice }));
    history.replace(`/cart/${id}?size=${size}&soldPrice=${soldPrice}`);
  };

  const handleBack = () => {
    history.goBack();
  };

  const handleStore = () => {
    history.replace("/cart");
  };

  return (
    <div className={classes.root}>
      <UpperAppBar handleBack={handleBack} handleStore={handleStore} />
      {fetching && (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            height: "80vh",
          }}
        >
          <CircularProgress color="inherit" />
        </div>
      )}
      {error && error}
      {product && (
        <>
          <img
            className={classes.img}
            src={product?.img?.url}
            alt={product.name}
          />
          <div className={classes.content}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Typography component="h2" variant="h6" gutterBottom>
                {product.name}
              </Typography>
              <Typography
                component="h2"
                variant="h6"
                gutterBottom
                className={classes.price}
              >
                {product.price}DH
              </Typography>
            </div>

            <form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
              <FormControl error={errors.size ? true : false}>
                <FormLabel component="legend">Size </FormLabel>
                {Object.keys(product.availableSizes).reduce(
                  (acc, curr) => acc + Number(product.availableSizes[curr]),
                  0
                ) === 0 && <p className={classes.p}>Out of stock</p>}
                <Controller
                  name="size"
                  control={control}
                  defaultValue={null}
                  rules={{ required: true }}
                  render={(props) => (
                    <RadioGroup
                      value={props.value}
                      onChange={(e) => props.onChange(e.target.value)}
                      row
                    >
                      {/* {Object.keys(product.availableSizes).reduce(
                    (acc, curr) => acc + Number(product.availableSizes[curr]),
                    0
                  ) === 0 && <p className={classes.p}>Out of stock</p>} */}
                      {/* //*spliter */}
                      {Object.keys(product.availableSizes).map(
                        (productSize) => {
                          if (Number(product.availableSizes[productSize]) > 0) {
                            const selectedSize =
                              products.find((x) => x._id === product._id) &&
                              Number(
                                products.find((x) => x._id === product._id)
                                  .size[productSize]
                              )
                                ? Number(
                                    products.find((x) => x._id === product._id)
                                      .size[productSize]
                                  )
                                : 0;

                            const availableSize = Number(
                              product.availableSizes[productSize]
                            );

                            return availableSize - selectedSize > 0 ? (
                              <FormControlLabel
                                key={productSize}
                                value={productSize}
                                label={productSize.toUpperCase()}
                                control={<Radio />}
                              />
                            ) : null;
                          }

                          return null;
                        }
                      )}
                    </RadioGroup>
                  )}
                />

                {errors.size ? (
                  <FormHelperText>Select Size</FormHelperText>
                ) : null}
              </FormControl>
              <TextField
                className={classes.textField}
                id="outlined-number"
                label="Sold Price"
                name="soldPrice"
                InputLabelProps={{
                  shrink: true,
                }}
                // value={soldPrice}
                variant="outlined"
                // onChange={handlePrice}
                inputRef={register}
                error={errors.soldPrice ? true : false}
                helperText={errors.soldPrice?.message.slice(0, 29)}
              />
              <Fab
                color="primary"
                variant="extended"
                className={classes.fab}
                type="submit"
              >
                Add To Cart
              </Fab>
            </form>
          </div>
        </>
      )}
    </div>
  );
}

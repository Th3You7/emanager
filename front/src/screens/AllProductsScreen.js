import React from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { AddRounded, DeleteRounded, EditRounded } from "@material-ui/icons";

import { DataGrid, GridToolbarContainer } from "@material-ui/data-grid";
import { UpperAppBar } from "../components";
import { useHistory } from "react-router";

const useStyles = makeStyles((theme) => ({
  root: {
    //padding: theme.spacing(2),
  },

  flex: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    margin: theme.spacing(1, "auto", 2),
    width: "90%",
  },

  btn: {
    margin: theme.spacing(0, 0, 0, 1),
  },

  container: {
    height: 500,
    width: "90%",
    margin: theme.spacing(0, "auto"),
  },
}));

const rows = [
  { id: 1, col1: "Hello", col2: "World", col4: "out of stock" },
  { id: 2, col1: "XGrid", col2: "is Awesome" },
  { id: 3, col1: "Material-UI", col2: "is Amazing" },
  { id: 4, col1: "Hello", col2: "World" },
  { id: 5, col1: "XGrid", col2: "is Awesome" },
  { id: 6, col1: "Material-UI", col2: "is Amazing" },
];

const columns = [
  { field: "id", hide: true },
  { field: "col1", headerName: "Name", width: 150 },
  { field: "col2", headerName: "Price", width: 100 },
  { field: "col4", headerName: "Status", width: 150 },
];

export default function AllProductsScreen() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const history = useHistory();

  const handleClick = () => {
    history.goBack();
  };

  return (
    <div className={classes.root}>
      <UpperAppBar handleClick={handleClick} />
      <div className={classes.flex}>
        <Button
          variant="contained"
          startIcon={<AddRounded />}
          color="primary"
          size="small"
          className={classes.btn}
        >
          {" "}
          Add
        </Button>
        <Button
          variant="contained"
          startIcon={<DeleteRounded />}
          color="secondary"
          size="small"
          className={classes.btn}
        >
          {" "}
          Delete
        </Button>
        <Button
          variant="contained"
          startIcon={<EditRounded />}
          color="default"
          size="small"
          className={classes.btn}
        >
          {" "}
          Edit
        </Button>
      </div>
      <div className={classes.container}>
        <DataGrid
          page={page}
          onPageChange={(params) => {
            setPage(params.page);
          }}
          pageSize={10}
          columns={columns.map((column) => ({
            ...column,
            sortable: false,
          }))}
          rows={rows}
          disableColumnMenu={true}
          //   components={{
          //     Toolbar: customToolBar,
          //   }}
        />
      </div>
    </div>
  );
}

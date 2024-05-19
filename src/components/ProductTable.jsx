import Box from "@mui/material/Box";
import { DataGrid, GridActionsCellItem, GridToolbar } from "@mui/x-data-grid";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import useStockRequest from "../services/useStockRequest";
import { useSelector } from "react-redux";

export default function ProductTable() {
  const { deleteStock } = useStockRequest();
  const { products } = useSelector((state) => state.stock);

  const getRowId = (row) => row._id;

  const columns = [
    { field: "_id", headerName: "#", minWidth: 150, flex: 1.4 },
    {
      field: "categoryId",
      headerName: "Categories",
      flex: 1,
      minWidth: 100,
      valueGetter: (value) => value?.name,
    },
    {
      field: "brandId",
      headerName: "Brands",
      headerAlign: "center",
      align: "center",
      width: 150,
      flex: 1.2,
      editable: true,
      valueGetter: (value) => value?.name,
    },
    {
      field: "name",
      headerName: "Name",
      headerAlign: "center",
      align: "center",
      flex: 1.1,
      editable: true,
      miWidth: 110,
    },
    {
      field: "quantity",
      headerName: "Stock",
      sortable: true,
      headerAlign: "center",
      align: "center",
      width: 160,
      editable: true,
    },
    {
      field: "actions",
      type: "actions",
      headerName: "Operations",
      getActions: (props) => {
        return [
          <GridActionsCellItem
            icon={<DeleteForeverIcon />}
            onClick={() => deleteStock("products", props.id)}
            label="Delete"
          />,
        ];
      },
    },
  ];

  return (
    <Box sx={{ width: "100%", mt: 3 }}>
      <DataGrid
        autoHeight
        rows={products}
        columns={columns}
        pageSizeOptions={[5, 10, 25, 50, 100]}
        checkboxSelection
        disableRowSelectionOnClick
        getRowId={getRowId}
        slots={{ toolbar: GridToolbar }}
      />
    </Box>
  );
}

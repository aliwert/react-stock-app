import * as React from "react"
import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Typography from "@mui/material/Typography"
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline"
import EditIcon from "@mui/icons-material/Edit"
import { btnStyle } from "../styles/globalStyles"
import useStockRequest from "../services/useStockRequest"

export default function FirmCard({ firm, handleOpen, setInfo }) {
  const { deleteStock } = useStockRequest()
  return (
    <Card
      sx={{
        maxWidth: 345,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        width: "300px",
        height: "400px",
        p: 2,
      }}
    >
      <CardMedia component="img" alt={firm?.name} height="140" image={firm?.image} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {firm?.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {firm?.address}
        </Typography>
        <Typography variant="body2" color="text.secondary" mt={2}>
          {firm?.phone}
        </Typography>
      </CardContent>
      <CardActions>
        <DeleteOutlineIcon
          sx={btnStyle}
          onClick={() => deleteStock("firms", firm?._id)}
        />
        <EditIcon
          sx={btnStyle}
          onClick={() => {
            handleOpen()
            setInfo(firm)
          }}
        />
      </CardActions>
    </Card>
  )
}

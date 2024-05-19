import { useEffect, useState } from "react"
import useStockRequest from "../services/useStockRequest"
import PurchaseModal from "../components/PurchaseModal"
import PurchaseTable from "../components/PurchaseTable"
import { Button, Container } from "@mui/material"
import TableSkeleton, {
  ErrorMessage,
  NoDataMessage,
} from "../components/DataFetchMessages"
import { useSelector } from "react-redux"

const Purchases = () => {
  const { getStock, getProPurBraFirmStock } = useStockRequest()
  const { error, loading, purchases } = useSelector((state) => state.stock)

  const [open, setOpen] = useState(false)

  const initialState = {
    brandId: "",
    firmId: "",
    productId: "",
    quantity: "",
    price: "",
  }
  const [info, setInfo] = useState(initialState)

  const handleOpen = () => setOpen(true)
  const handleClose = () => {
    setOpen(false)
    setInfo(initialState)
  }

  useEffect(() => {

    getProPurBraFirmStock()
  }, []) 

  return (
    <Container maxWidth="xl">
      <Button variant="contained" onClick={handleOpen}>
        New Purchase
      </Button>

      {loading && <TableSkeleton />}
      {!loading && !purchases?.length && <NoDataMessage />}
      {!loading && purchases?.length > 0 && (
        <PurchaseTable setInfo={setInfo} handleOpen={handleOpen} />
      )}

      <PurchaseModal
        open={open}
        handleClose={handleClose}
        info={info}
        setInfo={setInfo}
      />
    </Container>
  )
}

export default Purchases

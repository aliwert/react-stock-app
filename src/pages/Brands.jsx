import { Typography, Box, Grid, Alert, Button } from "@mui/material"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import BrandCard from "../components/BrandCard"
import BrandModal from "../components/BrandModal"
import useStockRequest from "../services/useStockRequest"
import {
  CardSkeleton,
  ErrorMessage,
  NoDataMessage,
} from "../components/DataFetchMessages"

const Brands = () => {
  const { getStock } = useStockRequest()
  const { brands, loading, error } = useSelector((state) => state.stock)

  const [info, setInfo] = useState({ name: "", image: "" })

  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => {
    setOpen(false)
    setInfo({ name: "", image: "" })
  }

  useEffect(() => {
    getStock("brands")
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Box>
      <Typography variant="h4" color="error" mb={2}>
        Brands
      </Typography>

      <Button variant="contained" onClick={handleOpen} disabled={error}>
        New Brand
      </Button>

      {loading && (
        <CardSkeleton>
          <BrandCard />
        </CardSkeleton>
      )}

      {!loading && !brands.length && <NoDataMessage />}
      {!loading && brands.length > 0 && (
        <Grid container gap={2} mt={3} justifyContent={"center"}>
          {brands?.map((brand) => (
            <Grid item key={brand._id}>
              <BrandCard
                brand={brand}
                handleOpen={handleOpen}
                setInfo={setInfo}
              />
            </Grid>
          ))}
        </Grid>
      )}

      <BrandModal
        open={open}
        handleClose={handleClose}
        info={info}
        setInfo={setInfo}
      />
    </Box>
  )
}

export default Brands

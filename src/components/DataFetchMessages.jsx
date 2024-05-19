import Alert from "@mui/material/Alert"
import Skeleton from "@mui/material/Skeleton"
import Stack from "@mui/material/Stack"

export const ErrorMessage = () => {
  return (
    <Alert sx={{ mt: 3 }} severity="error">
      Data couldn't be fetched
    </Alert>
  )
}

export const NoDataMessage = () => {
  return (
    <Alert sx={{ mt: 3 }} severity="warning">
      No data found to display
    </Alert>
  )
}

export const CardSkeleton = ({ children }) => {
  return (
    <Stack spacing={1} sx={{ mt: 3 }} alignItems={"center"}>
      <Skeleton variant="rectangular">{children}</Skeleton>
    </Stack>
  )
}

const TableSkeleton = () => {
  return (
    <Stack spacing={1} sx={{ mt: 3 }}>
      <Skeleton variant="rectangular" width="100%" height={90} />
      <Skeleton variant="rectangular" width="100%" height={50} />
      <Skeleton variant="rectangular" width="100%" height={50} />
      <Skeleton variant="rectangular" width="100%" height={50} />
      <Skeleton variant="rectangular" width="100%" height={30} />
    </Stack>
  )
}

export default TableSkeleton

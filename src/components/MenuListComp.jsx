import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import ListItemButton from "@mui/material/ListItemButton"
import ListItemIcon from "@mui/material/ListItemIcon"
import ListItemText from "@mui/material/ListItemText"
import DashboardCustomizeIcon from "@mui/icons-material/DashboardCustomize"
import AttachMoneyIcon from "@mui/icons-material/AttachMoney"
import InventoryIcon from "@mui/icons-material/Inventory"
import StoreIcon from "@mui/icons-material/Store"
import StarsIcon from "@mui/icons-material/Stars"
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"
import { useNavigate } from "react-router-dom"

const MenuListComp = () => {
  const navigate = useNavigate()

  const icons = [
    {
      title: "Dashboard",
      iconName: <DashboardCustomizeIcon />,
      path: "/stock",
    },
    {
      title: "Purchases",
      iconName: <ShoppingCartIcon />,
      path: "/stock/purchases/",
    },
    {
      title: "Sales",
      iconName: <AttachMoneyIcon />,
      path: "/stock/sales/",
    },
    {
      title: "Firms",
      iconName: <StoreIcon />,
      path: "/stock/firms/",
    },
    {
      title: "Brands",
      iconName: <StarsIcon />,
      path: "/stock/brands/",
    },
    {
      title: "Products",
      iconName: <InventoryIcon />,
      path: "/stock/products/",
    },
  ]

  return (
    <div>
      <List>
        {icons.map((item, index) => (
          <ListItem
            key={index}
            disablePadding
            onClick={() => navigate(item.path)}
            sx={{
              color: "white",
              "& .MuiSvgIcon-root": { color: "white" },
              "&:hover": { color: "red" },
              "&:hover .MuiSvgIcon-root": { color: "red" },
            }}
          >
            <ListItemButton>
              <ListItemIcon>{item.iconName}</ListItemIcon>
              <ListItemText primary={item.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  )
}

export default MenuListComp

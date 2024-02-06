import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

function Header() {
  return (
    <Box sx={{ width: "100vw", height: 66 }}>
      <AppBar position="static" sx={{ backgroundColor: "#fff", color: "#000" }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{
              fontWeight: "bold", 
              fontSize: "1.5rem", 
            }}
          >
            Wordle
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
export default Header;

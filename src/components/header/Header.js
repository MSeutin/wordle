import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Tooltip from "@mui/material/Tooltip";


function Header() {
  const handlePlayAgain = () => {
  window.location.reload();
};
  return (
    <Box sx={{ width: "100vw", height: 66 }}>
      <AppBar position="static" sx={{ backgroundColor: "#fff", color: "#000" }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Tooltip title="App by Frenchmike">
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
          </Tooltip>
          <Typography
            variant="h6"
            component="div"
            sx={{
              fontWeight: "bold",
              fontSize: "2rem", // Makes the font larger
              letterSpacing: "0.1rem", // Increases spacing between letters
              fontFamily: "Protest Guerrilla",
              // fontFamily: 'Indie Flower',
            }}
          >
            Wordle
          </Typography>
          <Button
            onClick={handlePlayAgain}
            sx={{
              backgroundColor: "#36454F", // A warm toned down color
              color: "#f2f2f2",
              "&:hover": {
                backgroundColor: "#606060", // Slightly darker shade on hover
              },
              fontFamily: "Protest Guerrilla", // Change as per your preference
            }}
          >
            Play Again
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
export default Header;

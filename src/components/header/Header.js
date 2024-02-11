import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Tooltip from "@mui/material/Tooltip";
import SettingsIcon from "@mui/icons-material/Settings";

function Header({ toggleFlagBackground }) {
  const handlePlayAgain = () => {
    window.location.reload();
  };
  return (
    <Box sx={{ width: "100vw", height: 66 }}>
      <AppBar position="static" sx={{ backgroundColor: "#fff", color: "#000" }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Tooltip title="Change Background">
              <IconButton
                onClick={toggleFlagBackground}
                sx={{
                  ml: 2, // Adds some space to the left of the icon button
                  color: "inherit", // Uses the current color
                }}
              >
                <SettingsIcon />
              </IconButton>
            </Tooltip>
          </Box>
            <Tooltip title="App by Frenchmike">
            <Button
              variant="text"
              onClick={toggleFlagBackground}
              sx={{
                fontWeight: "bold",
                fontFamily: "Protest Guerrilla", // Change as per your preference
                fontSize: "1.4rem", // Makes the font larger
                letterSpacing: "0.1rem", // Increases spacing between letters
              }}
            >
              <Box display="flex" justifyContent="center" alignItems="center">
                <Typography
                  variant="h4"
                  component="span"
                  sx={{ color: "#0055a4" }}
                >
                  Wo
                </Typography>
                <Typography
                  variant="h4"
                  component="span"
                  sx={{ color: "#d3d3d3" }}
                >
                  rd
                </Typography>
                <Typography
                  variant="h4"
                  component="span"
                  sx={{ color: "#ef4135" }}
                >
                  le
                </Typography>
              </Box>
              </Button>
            </Tooltip>
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

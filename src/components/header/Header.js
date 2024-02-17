import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  IconButton,
  Button,
  Menu,
  MenuItem,
} from "@mui/material";
import Tooltip from "@mui/material/Tooltip";
import SettingsIcon from "@mui/icons-material/Settings";
import { useState } from "react";

function Header({ startNewGame }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

    const handleMouseEnter = (event) => {
      setAnchorEl(event.currentTarget);
    };

    const handleMouseLeave = () => {
      setAnchorEl(null);
    };
  
  return (
    <Box sx={{ width: "100vw", height: 66 }}>
      <AppBar position="static" sx={{ backgroundColor: "rgba(10, 10, 10, 0.3)", color: "#000" }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Toolbar>
            {/* Other toolbar items */}
            <IconButton
              size="large"
              edge="end"
              color="inherit"
              aria-label="settings"
              onMouseEnter={handleMouseEnter}
            >
              <SettingsIcon />
            </IconButton>
            <Menu
              id="flag-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleMouseLeave}
              onMouseLeave={handleMouseLeave}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem
                sx={{
                  fontSize: "0.8rem",
                  fontWeight: "bold",
                  color: "#555",
                  margin: "5px 0",
                }}
              >
                Item 1
              </MenuItem>
              <MenuItem
                sx={{
                  fontSize: "0.8rem",
                  fontWeight: "bold",
                  color: "#555",
                  margin: "5px 0",
                }}
              >
                Item 2
              </MenuItem>
              <MenuItem
                sx={{
                  fontSize: "0.8rem",
                  fontWeight: "bold",
                  color: "#555",
                  margin: "5px 0",
                }}
              >
                Item 3
              </MenuItem>
              {/* Add more flags as needed */}
            </Menu>
          </Toolbar>
          <Tooltip title="App by Frenchmike">
            <Button
              variant="text"
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
            onClick={startNewGame}
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

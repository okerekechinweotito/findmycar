import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Slide from "@mui/material/Slide";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "@mui/material";

const styles = {
  header: {
    padding: "1em 0 1em 1em",
    fontWeight: "bolder",
    background: "#0a192f",
  },
};
const pages = ["Stolen Cars", "Recovered Cars"];

function HideOnScroll(props) {
  const { children } = props;

  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
};

const HideAppBar = (props) => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <React.Fragment>
      <HideOnScroll {...props}>
        <AppBar className="globalBackgroundColor" style={styles.header}>
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <Typography
                variant="h5"
                noWrap
                component="div"
                sx={{
                  mr: 2,
                  display: { xs: "none", md: "flex" },
                  fontWeight: "bolder",
                  color: "#e6e6e6",
                  letterSpacing: "8px",
                  fontFamily: "Rubik Wet Paint",
                }}
              >
                <Link
                  href="#"
                  sx={{
                    textDecoration: "none",
                    color: "inherit",
                    "&:hover": {
                      color: "#ff5c00",
                      background: "#0B1D36",
                      borderRadius: "5px",
                    },
                  }}
                >
                  <Typography
                    component="span"
                    variant="div"
                    sx={{
                      color: "#ff5c00",
                      "&:hover": {
                        color: "#e6e6e6",
                      },
                    }}
                  >
                    Find
                  </Typography>
                  MyCar
                </Link>
              </Typography>

              <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                >
                  <MenuIcon sx={{ color: "#fff" }} />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: "block", md: "none" },
                  }}
                  MenuListProps={{
                    style: {
                      background: "#0a192f",
                      color: "#ff5c00",
                      padding: "1em",
                    },
                  }}
                >
                  {pages.map((page) => (
                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                      <Typography
                        sx={{
                          textAlign: "center",
                          fontFamily: "Rubik Wet Paint",
                          fontSize: "1.3em",
                        }}
                      >
                        {page}
                      </Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
              <Typography
                variant="h5"
                noWrap
                component="div"
                sx={{
                  flexGrow: 1,
                  display: { xs: "flex", md: "none" },
                  fontWeight: "bolder",
                  color: "#e6e6e6",
                  fontFamily: "Rubik Wet Paint",
                  letterSpacing: "8px",
                }}
              >
                <Link
                  href="#"
                  sx={{
                    textDecoration: "none",
                    color: "inherit",
                    "&:hover": {
                      color: "#ff5c00",
                      background: "#0B1D36",
                      borderRadius: "5px",
                    },
                  }}
                >
                  <Typography
                    component="span"
                    variant="div"
                    sx={{
                      color: "#ff5c00",
                      "&:hover": {
                        color: "#e6e6e6",
                      },
                    }}
                  >
                    Find
                  </Typography>
                  MyCar
                </Link>
              </Typography>
              <Box
                sx={{
                  flexGrow: 1,
                  display: { xs: "none", md: "flex" },
                }}
              >
                {pages.map((page) => (
                  <Button
                    key={page}
                    onClick={handleCloseNavMenu}
                    sx={{
                      pt: 1,
                      color: "#e6e6e6",
                      display: "block",
                      fontWeight: "bold",
                      fontFamily: "Rubik Wet Paint",
                      letterSpacing: "3px",
                      mr: "4em",
                      ml: "4em",
                      background: "#0A192F",
                      "&:hover": {
                        color: "#ff5c00",
                      },
                    }}
                  >
                    {page}
                  </Button>
                ))}
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </HideOnScroll>
    </React.Fragment>
  );
};

export default HideAppBar;

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
import { Link as RouterLink } from "react-router-dom";
import { FadeIn } from "../helperFunctions/FadeInAnimation";
import { HashLink } from "react-router-hash-link";

window.onscroll = function () {
  shadowShow();

  const headerVisibility =
    document.getElementById("headerBoxShadow").style.visibility;
  const headerPopup = document.getElementById("menu-appbar");

  if (headerVisibility === "hidden") {
    headerPopup.style.display = "none";
  } else {
    headerPopup.style.display = "null";
  }
};

function shadowShow() {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    document.getElementById("headerBoxShadow").classList.add("active");
  } else {
    document.getElementById("headerBoxShadow").classList.remove("active");
  }
}

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
    const headerPopup = document.getElementById("menu-appbar");
    headerPopup.style.display = "inherit";
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <React.Fragment>
      <HideOnScroll {...props}>
        <AppBar
          className="globalBackgroundColor"
          sx={{
            fontWeight: "bolder",
            background: " #edf1f7",
            padding: { xs: ".5em 0 .5em 1em", lg: ".5em 0 .5em 4em" },
          }}
          id="headerBoxShadow"
          elevation={0}
        >
          <Container maxWidth="xl">
            <FadeIn>
              <Toolbar disableGutters>
                <Typography
                  variant="h5"
                  noWrap
                  component="div"
                  sx={{
                    mr: 2,
                    display: { xs: "none", md: "flex" },
                    fontWeight: "boldest",
                    color: "#2491DF",
                    letterSpacing: "5px",
                    fontFamily: "Merriweather",
                  }}
                >
                  <Link
                    component={RouterLink}
                    to="/"
                    sx={{
                      textDecoration: "none",
                      color: "inherit",
                      fontSize: "1.2em",
                      transition: "0.5s",
                      "&:hover": {
                        color: "#14A800",
                        transform: "scale(0.9)",
                        textDecoration: "none",
                      },
                    }}
                  >
                    <Typography component="span" variant="div">
                      FindMyCar
                    </Typography>
                  </Link>
                </Typography>

                <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                  <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleOpenNavMenu}
                    sx={{
                      transition: "1s",
                      fontFamily: "'Nunito', sans-serif",
                      fontWeight: "bold",
                      "&:hover": {
                        transform: "scale(0.9)",
                      },
                    }}
                  >
                    <MenuIcon
                      sx={{
                        color: "#2491DF",
                        "&:hover": {
                          color: "#14a800",
                        },
                      }}
                    />
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
                        background: " #edf1f7",
                        color: "#2491DF",
                        padding: "1em",
                      },
                    }}
                  >
                    <Link component={RouterLink} to="/stolen-cars">
                      <MenuItem
                        onClick={handleCloseNavMenu}
                        sx={{
                          transition: "0.5s",

                          "&:hover": {
                            color: "#14A800",
                            transform: "scale(0.9)",
                          },
                        }}
                      >
                        <Typography
                          sx={{
                            textAlign: "center",
                            fontSize: "1.2em",
                            fontFamily: "'Nunito', sans-serif",
                            letterSpacing: "2px",
                          }}
                        >
                          Stolen Cars
                        </Typography>
                      </MenuItem>
                    </Link>

                    <Link component={RouterLink} to="/">
                      <MenuItem
                        onClick={handleCloseNavMenu}
                        sx={{
                          transition: "0.5s",

                          "&:hover": {
                            color: "#14A800",
                            transform: "scale(0.9)",
                          },
                        }}
                      >
                        <Typography
                          sx={{
                            textAlign: "center",
                            fontSize: "1.2em",
                            fontFamily: "'Nunito', sans-serif",
                            letterSpacing: "2px",
                          }}
                        >
                          Recovered Cars
                        </Typography>
                      </MenuItem>
                    </Link>

                    <HashLink smooth to="/#recent-blog-posts">
                      <MenuItem
                        onClick={handleCloseNavMenu}
                        sx={{
                          transition: "0.5s",

                          "&:hover": {
                            color: "#14A800",
                            transform: "scale(0.9)",
                          },
                        }}
                      >
                        <Typography
                          sx={{
                            textAlign: "center",
                            fontSize: "1.2em",
                            fontFamily: "'Nunito', sans-serif",
                            letterSpacing: "2px",
                          }}
                        >
                          Blog
                        </Typography>
                      </MenuItem>
                    </HashLink>

                    <HashLink smooth to="/#contact">
                      <MenuItem
                        onClick={handleCloseNavMenu}
                        sx={{
                          transition: "0.5s",

                          "&:hover": {
                            color: "#14A800",
                            transform: "scale(0.9)",
                          },
                        }}
                      >
                        <Typography
                          sx={{
                            textAlign: "center",
                            fontSize: "1.2em",
                            fontFamily: "'Nunito', sans-serif",
                            letterSpacing: "2px",
                          }}
                        >
                          Contact
                        </Typography>
                      </MenuItem>
                    </HashLink>
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
                    color: "##2491DF",
                    fontFamily: "Merriweather",
                    letterSpacing: "4px",
                  }}
                >
                  <Link
                    component={RouterLink}
                    to="/"
                    sx={{
                      textDecoration: "none",
                      color: "#2491DF",
                      transition: "0.5s",
                      fontWeight: "boldest",

                      "&:hover": {
                        color: "#14A800",
                        transform: "scale(0.9)",
                      },
                    }}
                  >
                    <Typography component="span" variant="div">
                      FindMyCar
                    </Typography>
                  </Link>
                </Typography>
                <Box
                  sx={{
                    flexGrow: 1,
                    display: { xs: "none", md: "flex" },
                    justifyContent: "space-evenly",
                    alignItems: "center",
                  }}
                >
                  <Link component={RouterLink} to="/stolen-cars">
                    <Button
                      onClick={handleCloseNavMenu}
                      sx={{
                        pt: 1,
                        color: "#2491DF",
                        display: "block",
                        fontWeight: "boldest",
                        fontFamily: "'Nunito', sans-serif",
                        letterSpacing: "2px",
                        background: " #edf1f7",
                        fontSize: { md: "0.9em", lg: "1.0em" },
                        marginLeft: "3em",
                        transition: "0.5s",
                        "&:hover": {
                          color: "#14A800",
                          transform: "scale(0.9)",
                        },
                      }}
                    >
                      Stolen Cars
                    </Button>
                  </Link>

                  <Link component={RouterLink} to="/">
                    <Button
                      onClick={handleCloseNavMenu}
                      sx={{
                        pt: 1,
                        color: "#2491DF",
                        display: "block",
                        fontWeight: "boldest",
                        fontFamily: "'Nunito', sans-serif",
                        letterSpacing: "2px",
                        background: " #edf1f7",
                        fontSize: { md: "0.9em", lg: "1.0em" },
                        marginLeft: "3em",
                        transition: "0.5s",
                        "&:hover": {
                          color: "#14A800",
                          transform: "scale(0.9)",
                        },
                      }}
                    >
                      Recovered Cars
                    </Button>
                  </Link>

                  <HashLink smooth to="/#recent-blog-posts">
                    <Button
                      onClick={handleCloseNavMenu}
                      sx={{
                        pt: 1,
                        color: "#2491DF",
                        display: "block",
                        fontWeight: "boldest",
                        fontFamily: "'Nunito', sans-serif",
                        letterSpacing: "2px",
                        background: " #edf1f7",
                        fontSize: { md: "0.9em", lg: "1.0em" },
                        marginLeft: "3em",
                        transition: "0.5s",
                        "&:hover": {
                          color: "#14A800",
                          transform: "scale(0.9)",
                        },
                      }}
                    >
                      Blog
                    </Button>
                  </HashLink>

                  <HashLink smooth to="/#contact">
                    <Button
                      onClick={handleCloseNavMenu}
                      sx={{
                        pt: 1,
                        color: "#2491DF",
                        display: "block",
                        fontWeight: "boldest",
                        fontFamily: "'Nunito', sans-serif",
                        letterSpacing: "2px",
                        background: " #edf1f7",
                        fontSize: { md: "0.9em", lg: "1.0em" },
                        marginLeft: "3em",
                        transition: "0.5s",
                        "&:hover": {
                          color: "#14A800",
                          transform: "scale(0.9)",
                        },
                      }}
                    >
                      Contact
                    </Button>
                  </HashLink>
                </Box>
              </Toolbar>
            </FadeIn>
          </Container>
        </AppBar>
      </HideOnScroll>
    </React.Fragment>
  );
};

export default HideAppBar;

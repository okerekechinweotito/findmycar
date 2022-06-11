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
import { FadeIn } from "../helperFunctions/FadeInAnimation";

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
        <AppBar
          className="globalBackgroundColor"
          sx={{
            fontWeight: "bolder",
            background: "#ffff",
            padding: { xs: "1em 0 1em 1em", lg: "1em 0 1em 4em" },
          }}
          id="headerBoxShadow"
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
                    letterSpacing: "8px",
                    fontFamily: "Merriweather",
                  }}
                >
                  <Link
                    href="#"
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
                        background: "#ffff",
                        color: "#2491DF",
                        padding: "1em",
                      },
                    }}
                  >
                    {pages.map((page) => (
                      <MenuItem
                        key={page}
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
                            fontFamily: "Merriweather",
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
                    color: "##2491DF",
                    fontFamily: "Merriweather",
                    letterSpacing: "8px",
                  }}
                >
                  <Link
                    href="#"
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
                  }}
                >
                  {pages.map((page) => (
                    <Button
                      key={page}
                      onClick={handleCloseNavMenu}
                      sx={{
                        pt: 1,
                        color: "#2491DF",
                        display: "block",
                        fontWeight: "bold",
                        fontFamily: "Merriweather",
                        letterSpacing: "3px",
                        mr: "4em",
                        ml: "4em",
                        background: "#ffff",
                        fontSize: { md: "0.9em", lg: "1.2em" },
                        marginLeft: "auto",
                        transition: "0.5s",
                        "&:hover": {
                          color: "#14A800",
                          transform: "scale(0.9)",
                        },
                      }}
                    >
                      {page}
                    </Button>
                  ))}
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

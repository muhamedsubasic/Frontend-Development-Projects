import * as React from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import PodcastsIcon from "@mui/icons-material/Podcasts";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

const pages = [
    { name: "About", path: "/about" },
    { name: "Posts", path: "/posts" },
    { name: "Contact", path: "/contact" },
];

function ResponsiveAppBar() {
    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    const drawerList = (
        <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
            <List>
                {pages.map((page) => (
                    <ListItem key={page.name} disablePadding>
                        <ListItemButton component={Link} to={page.path}>
                            <ListItemText primary={page.name} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <Container maxWidth="lg" sx={{ px: { xs: 0, md: 2 }, mx: { xs: 0, md: "auto" } }}>
            <AppBar position="static">
                <Toolbar disableGutters>
                    <PodcastsIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
                    <Typography
                        variant="h6"
                        noWrap
                        component={Link}
                        to="/"
                        sx={{
                            mr: 1,
                            display: { xs: "none", md: "flex" },
                            fontFamily: "monospace",
                            fontWeight: 700,
                            letterSpacing: ".3rem",
                            color: "inherit",
                            textDecoration: "none",
                        }}
                    >
                        PORTFOLIO
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                        <IconButton size="large" onClick={toggleDrawer(true)} color="inherit">
                            <MenuIcon />
                        </IconButton>
                        <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
                            {drawerList}
                        </Drawer>
                    </Box>
                    <PodcastsIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
                    <Typography
                        variant="h5"
                        noWrap
                        component={Link}
                        to="/"
                        sx={{
                            mr: 2,
                            display: { xs: "flex", md: "none" },
                            flexGrow: 1,
                            fontFamily: "monospace",
                            fontWeight: 700,
                            letterSpacing: ".3rem",
                            color: "inherit",
                            textDecoration: "none",
                        }}
                    >
                        PORTFOLIO
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                        {pages.map((page) => (
                            <Button key={page.name} component={Link} to={page.path} sx={{ my: 2, color: "white", display: "block" }}>
                                {page.name}
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </AppBar>
        </Container>
    );
}

export default ResponsiveAppBar;
